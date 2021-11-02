import { ParserResultType } from "./types";

export const TYPE_MAPSET = new Map<string, ParserResultType>([
  ["+", "string"],
  ["-", "error"],
  [":", "number"],
  ["$", "bytes"],
  ["*", "array"],
]);

export const DATA_REGEX = /^([\+|\-|\:|\$|\*]{1,1})(.*[\r\n]+)$/;

export const STRING_REGEX = /^(\w+)\r\n$/;

export const ERROR_REGEX = /^(\W+)\s([\w\d]+)$/;

export const NUMBER_REGEX = /^(\d+)\r\n$/;

export const BYTES_REGEX = /^(\d+)\r\n([.*]+)\r\n$/;

export const ARRAY_REGEX = /^.*$/;
