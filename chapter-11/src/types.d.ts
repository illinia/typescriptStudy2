// type ToArray<T> = T extends unknown[] ? T : T[];
// type UserID = string & { readonly brand: unique symbol };

// declare module "module-name" {
//   export type MyType = number;
//   export type MyDefaultType = { a: string };
//   export let myExport: MyType;
//   let myDefaultExport: MyDefaultType;
//   export default myDefaultExport;
// }

// declare module "@most/core";

// declare module "unsafe-module-name";

// declare module "json!*" {
//   let value: object;
//   export default value;
// }
// declare module "*.css" {
//   let css: CSSRuleList;
//   export default css;
// }
