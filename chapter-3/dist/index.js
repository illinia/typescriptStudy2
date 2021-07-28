"use strict";
// function squareOf(n: number) {
//   return n * n;
// }
// squareOf(2);
// squareOf("z");
// let a: any = 666;
// let b: any = ["danger"];
// let c = a + b;
// let a: unknown = 30;
// let b = a === 123;
// let c = a + 10;
// if (typeof a === "number") {
//   let d = a + 10;
// }
// let a = true
// var b = false
// const c = true;
// let d: boolean = true;
// let e: true = true;
// let f: true = false;
// let a = 1234;
// var b = Infinity * 0.10;
// const c = 5678;
// let d = a < b;
// let e: number = 100;
// let f: 26.218 = 26.218;
// let g: 26.218 = 10;
// let oneMillion = 1_000_000
// let twoMillion: 2_000_000 = 2_000_000;
// let a = 1234n;
// const b = 5678n;
// var c = a + b;
// let d = a < 1235;
// // let e = 88.5n;
// let f: bigint = 100n;
// let g: 100n = 100n;
// let h: bigint = 100;
// let a = "hello";
// var b = "billy";
// const c = "!";
// let d = a + " " + b + c;
// let e: string = "zoom";
// let f: "john" = "john";
// let g: "john" = "zoe";
// let a = Symbol('a');
// let b: symbol = Symbol('b');
// var c = a === b;
// let d = a + 'x';
// const e = Symbol('e');
// const f: unique symbol = Symbol('f');
// let g: unique symbol = Symbol('f');
// let h = e === e;
// let i = e === f;
// let a = {
//   b: "x",
// };
// let b = {
//   c: {
//     d: 'f'
//   }
// }
// let a: { b: number } = {
//   b: 12,
// };
// let c: {
//   firstName: string;
//   lastName: string;
// } = {
//   firstName: "john",
//   lastName: "barrowman",
// };
// class Person {
//   constructor(public firstName: string, public lastName: string) {}
// }
// c = new Person("matt", "smith");
// let a: { b: number}
// a = {}
// a = {
//   b: 1,
//   c: 2
// }
// let a: {
//   b: number
//   c?: string
//   [key: number]: boolean
// }
// a = {b: 1}
// a = {b: 1, c: undefined}
// a = {b: 1, c: 'd'}
// a = {b: 1, 10: true}
// a = {b: 1, 10: true, 20: false}
// a = {10: true}
// a = {b: 1, 33: 'red'}
// let user: {
//   readonly firstName: string
// } = {
//   firstName: 'abby'
// }
// user.firstName
// user.firstName = 'abbey';
// type Age = number;
// type Person = {
//   name: string;
//   age: Age;
// };
// let age: Age = 55;
// let driver: Person = {
//   name: "James May",
//   age: age,
// };
// let age = 55;
// let driver: Person = {
//   name: "James May",
//   age: age,
// };
// type Color = 'red';
// type Color = 'blue';
// type Color = "red";
// let x = Math.random() < 0.5;
// if (x) {
//   type Color = "blue";
//   let b: Color = "blue";
// } else {
//   let c: Color = "red";
// }
// type Cat = { name: string; purrs: boolean };
// type Dog = { name: string; barks: boolean; wags: boolean };
// type CatOrDogBoth = Cat | Dog;
// type CatAndDog = Cat & Dog;
// let a: CatOrDogBoth = {
//   name: "Bonkers",
//   purrs: true,
// };
// a = {
//   name: "Domino",
//   barks: true,
//   wags: true,
// };
// a = {
//   name: "Donkers",
//   barks: true,
//   purrs: true,
//   wags: true,
// };
// let b: CatAndDog = {
//   name: "Domino",
//   barks: true,
//   purrs: true,
//   wags: true,
// };
// function trueOrNull(isTrue: boolean) {
//   if (isTrue) {
//     return "true";
//   }
//   return null;
// }
// type Returns = string | null;
// function(a: string, b: number) {
//   return a || b;
// }
//# sourceMappingURL=index.js.map