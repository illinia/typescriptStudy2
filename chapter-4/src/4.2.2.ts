// type Filter = {
//   <T>(array: T[], f: (item: T) => boolean): T[];
// };

// let filter: Filter = (array, f) => {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     let item = array[i];
//     if (f(item)) {
//       result.push(item);
//     }
//   }
//   return result;
// };

// type Filter<T> = {
//   (array: T[], f: (item: T) => boolean): T[];
// };

// let filter: Filter<number> = (array, f) => {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     let item = array[i];
//     if (f(item)) {
//       result.push(item);
//     }
//   }
//   return result;
// };

// type Filter = <T>(array: T[], f: (item: T) => boolean) => T[];

// let filter: Filter = (array, f) => {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     let item = array[i];
//     if (f(item)) {
//       result.push(item);
//     }
//   }
//   return result;
// };

// type Filter<T> = (array: T[], f: (item: T) => boolean) => T[];

// let filter: Filter<string> = (array, f) => {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     let item = array[i];
//     if (f(item)) {
//       result.push(item);
//     }
//   }
//   return result;
// };
// function filter<T>(array: T[], f: (item: T) => boolean): T[] {
//   return array;
// }

function map<T, U>(array: T[], f: (item: T) => U): U[] {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result[i] = f(array[i]);
  }
  return result;
}

map<string, boolean | string>(["a", "b", "c"], (_) => _ === "a");

let promise = new Promise<number>((resolve) => resolve(45));
promise.then((result) => result * 4);
