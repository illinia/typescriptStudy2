// async function get<R extends Request>(entity: R["entity"]): Promise<R["data"]> {
//   let res = await fetch(`/api/${entity}`);
//   let json = await res.json();
//   if (!json) {
//     throw ReferenceError("Empty response");
//   }
//   return json;
// }
