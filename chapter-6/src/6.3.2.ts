// type Weekday = "Mon" | "Tue" | "Wed" | "Thu" | "Fri";
// type Day = Weekday | "Sat" | "Sun";

// // let nextDay: Record<Weekday, Day> = {
// //   Mon: 'Tue'
// // }
// let nextDay: { [K in Weekday]: Day } = {
//   Mon: "Tue",
// };

// type MyMappedType = {
//   [Key in UnionType]: ValueType;
// };

// type Record<K extends keyof any, T> = {
//   [P in K]: T;
// };

// type Account = {
//   id: number;
//   isEmployee: boolean;
//   notes: string[];
// };

// type OptionalAccount = {
//   [K in keyof Account]?: Account[K];
// };

// type NullableAccount = {
//   [K in keyof Account]: Account[K] | null;
// };

// type ReadonlyAccount = {
//   readonly [K in keyof Account]: Account[K];
// };

// type Account2 = {
//   -readonly [K in keyof ReadonlyAccount]: Account[K];
// };

// type Account3 = {
//   [K in keyof OptionalAccount]-?: Account[K];
// };
