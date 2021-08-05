// let a = 1999;
// function b() {}

// type a = number;
// interface b {
//   (): void;
// }

// if (a + 1 > 3) {
// }
// let x: a = 3;

// class C {}
// let c: C = new C();

// enum E {
//   F,
//   G,
// }
// let e: E = E.F;

// type State = {
//   [key: string]: string;
// };

// class StringDatabase {
//   constructor(public state: State = {}) {}
//   get(key: string): string | null {
//     return key in this.state ? this.state[key] : null;
//   }
//   set(key: string, value: string): void {
//     this.state[key] = value;
//   }
//   static from(state: State) {
//     let db = new StringDatabase();
//     for (let key in state) {
//       db.set(key, state[key]);
//     }
//     return db;
//   }
// }
// const db = new StringDatabase();
// interface StringDatabase {
//   state: State;
//   get(key: string): string | null;
//   set(key: string, value: string): void;
// }

// interface StringDatabaseConstructor {
//   new (state?: State): StringDatabase;
//   from(state: State): StringDatabase;
// }
