import {
  DATA_REGEX,
  STRING_REGEX,
  NUMBER_REGEX,
  ERROR_REGEX,
  BYTES_REGEX,
  TYPE_MAPSET,
  ARRAY_REGEX,
} from "./constants";
import { ParserResult, ParserResultType } from "./types";

function getDataMatcher(sign: string): {
  type: ParserResultType;
  matcher: RegExp;
} {
  const type: ParserResultType | undefined = TYPE_MAPSET.get(sign);

  if (!type) throw new Error("Can not find data type");

  switch (type) {
    case "string":
      return { type, matcher: STRING_REGEX };
    case "error":
      return { type, matcher: ERROR_REGEX };
    case "number":
      return { type, matcher: NUMBER_REGEX };
    case "bytes":
      return { type, matcher: BYTES_REGEX };
    case "array":
      return { type, matcher: ARRAY_REGEX };
    default:
      throw new Error("Can not find matcher");
  }
}

export function parser(rawData: string): ParserResult | null {
  const dataGs = DATA_REGEX.exec(rawData);
  if (!dataGs) return null;
  const { type, matcher } = getDataMatcher(dataGs[1]);

  const gs = matcher.exec(dataGs[2]);
  if (!gs) throw new Error("Data parsing is failed");

  return { type, data: gs[1] };
}
