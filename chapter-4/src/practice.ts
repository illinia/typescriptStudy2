function is<T>(...args: T[]): boolean {
  let array = [...args];
  let result = true;
  for (let i = 1; i < array.length; i++) {
    array[0] !== array[i] && (result = false);
  }
  console.log(result);
  return result;
}

is("string", "ohterstring");
is(true, false);
is(42, 42);
// is(10, "foo");
is([1], [1, 2], [1, 2, 3]);
