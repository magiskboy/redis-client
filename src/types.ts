type DataType = string | number | null | Array<number | string | null>;

export type ParserResultType =
  | "string"
  | "error"
  | "number"
  | "array"
  | "bytes"
  | "null";

export interface ParserResult {
  type: ParserResultType;
  data: DataType;
}
