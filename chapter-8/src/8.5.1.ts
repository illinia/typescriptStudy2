// type RedisClient = {
//   on<E extends keyof Events>(
//     event: E,
//     f: (arg: Events[E]) => void
//   ): void
//   emit<E extends keyof Events>(
//     event: E,
//     arg: Events[E]
//   ): void
// };

// type Events = {
//   ready: void
//   error: Error
//   reconnecting: {attempt: number, delay: number}
// }
