// type Log = (message: string, userId: string) => void;

// type Log = {
//   (message: string, userId?: string): void
// }

// type Reserve = {
//   (from: Date, to: Date, destination: string): Reservation;
//   (from: Date, destination: string): Reservation;
//   (destination: string): Reservation;
// };

// let reserve: Reserve = (fromOrDestination: Date | string, toOrDestination?: Date | string, destination?: string) => {
//   if (toOrDestination instanceof Date && destination !== undefined) {
//   } else if (typeof toOrDestination === "string") {
//   }
// };

// type CreateElement = {
//   (tag: "a"): HTMLAnchorelement;
//   (tag: "canvas"): HTMLCanvasElement;
//   (tag: "table"): HTMLTableElement;
//   (tag: string): HTMLElement;
// };
// let CreateElement: CreateElement = (tag: string): HTMLElement => {};

// function warnUser(warning) {
//   if (warnUser.wasCalled) {
//     return;
//   }
//   warnUser.wasCalled = true;
//   alert(warning);
// }
// warnUser.wasCalled = false;

// type WarnUser = {
//   (warning: string): void;
//   wasCalled: boolean;
// };
