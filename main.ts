import { parser } from "./src";

const data = "+OK\r\n";

const result = parser(data);

console.log(JSON.stringify(result, null, 2));
