// type MyEvent<T> = {
//   target: T;
//   type: string;
// };

// type ButtonEvent = MyEvent<HTMLButtonElement>;

// let myEvent: Event<HTMLElement | null> = {
//   target: document.querySelector("#myButton"),
//   type: "click",
// };

// type TimedEvent<T> = {
//   event: MyEvent<T>;
//   from: Date;
//   to: Date;
// };

// function triggerEvent<T>(event: MyEvent<T>): void {}
// triggerEvent({
//   target: document.querySelector("#myButton"),
//   type: "mouseover",
// });
