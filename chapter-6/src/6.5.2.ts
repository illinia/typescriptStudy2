// type ElementType<T> = T extends unknown[] ? T[number] : T;
// type A = ElementType<boolean[]>;

// type ElementType2<T> = T extends (infer U)[] ? U : T;
// type B = ElementType2<number[]>;

// type SecondArg<F> = F extends (a: any, b: infer B) => any ? B : never;

// type F = typeof Array['prototype']['slice']
// type A = SecondArg<F>
