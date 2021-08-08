// type A = number | string;
// type B = string;
// type C = Exclude<A, B>
// type C = Extract<A, B>

// type A = {a?: number | null}
// type B = NonNullable<A['a']>

// type F = (a: number) => string;
// type R = ReturnType<F>

// type A = {new(): B}
// type B = {b: number}
// type I = InstanceType<A>
