// type Executor<T> = (
//   resolve: (result: T) => void,
//   reject: (error: unknown) => void
// ) => void;

// class Promise<T> {
//   constructor(f: Executor<T>) {}
//   then<U>(g: (result: T) => Promise<U>): Promise<U> {return}
//   catch<U>(g: (error: unknown) => Promise<U>): Promise<U> {return}
// }

// let a: () => Promise<string, TypeError> = {return};
// let b: (s: string) => Promise<number, never> = {return};
// let c: () => Promise<boolean, RangeError> = {return}

// a().then(b)
//   .catch(e => c())
//   .then(result => console.info('done', result))
//   .catch(e => console.error('Error', e))
