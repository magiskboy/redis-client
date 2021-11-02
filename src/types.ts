type DataType = string | number | null | Array<number | string | null>;

export type ParserResultType =
  | "string"
  | "error"
  | "number"
  | "array"
  | "bytes"
  | "null";

export interface IParserResult {
  type: ParserResultType;
  rawData: string | null;
}

export class ParserResult implements IParserResult {
  constructor(public type: ParserResultType, public rawData: string | null) {}

  get data(): DataType {
    return [];
  }
}
