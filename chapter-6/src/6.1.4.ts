// let a = 'x';
// let b = 3;
// var c = true;
// const d = {x: 3}

// enum E {X, Y, Z}
// let e = E.X

// const a = "x";
// const b = 3;
// const c = true;

// enum E {
//   X,
//   Y,
//   Z,
// }
// const e = E.X;

// let a: 'x' = 'x'
// let b: 3 = 3;
// var c: true = true;
// const d: {x: 3} = {x: 3}

// const a = 'x';
// let b = a;

// const c: 'x' = 'x';
// let d = c;

// let a = null;
// a = 3;
// a = "b";

// function x() {
//   let a = null;
//   a = 3;
//   a = 'b'
//   return a
// }

// x();

// let a = {x: 3};
// let b: {x: 3}
// let c = {x: 3} as const

// let d = [1, {x: 2}]
// let e = [1, {x: 2}] as const

// type Options = {
//   baseURL: string;
//   cacheSize?: number;
//   tier?: "prod" | "dev";
// };

// class API {
//   constructor(private options: Options) {}
// }

// new API({
//   baseURL: "https://api.mysite.com",
//   tier: "prod",
// });

// new API({
//   baseURL: "https://api.mysite.com",
//   badTier: "prod",
// });

// new API({
//   baseURL: "https://api.mysite.com",
//   badTier: "prod",
// } as Options);

// let badOptions = {
//   baseURL: "https://api.mysite.com",
//   badTier: "prod",
// };
// new API(badOptions);

// let options: Options = {
//   baseURL: "https://api.mysite.com",
//   badTier: 'prod'
// };
// new API(options);
