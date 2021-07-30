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
// filter([1, 2, 3, 4], (_) => _ < 3);
// filter(["a", "b"], (_) => _ !== "b");

// let names = [
//   { firstName: "beth" },
//   { firstName: "caitlyn" },
//   { firstName: "xin" },
// ];

// let result = filter(names, (_) => _.firstName.startsWith("b"));

// result[0].firstName;
