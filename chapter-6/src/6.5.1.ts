// type ToArray<T> = T[];
// type A = ToArray<number>
// type B = ToArray<number | string>

// type ToArray2<T> = T extends unknown ? T[] : T[]
// type A = ToArray2<number>
// type B = ToArray2<number | string>

// type Without<T, U> = T extends U ? never : T;

// type A = Without<boolean | number | string, boolean>
