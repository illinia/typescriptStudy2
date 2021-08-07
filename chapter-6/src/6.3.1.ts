// type APIResponse = {
//   user: {
//     userId: string;
//     friendList: {
//       count: number;
//       friends: {
//         firstName: string;
//         lastName: string;
//       }[];
//     };
//   };
// };

// type FriendList = APIResponse["user"]["friendList"];
// type Friend = FriendList["friends"][number];

// function getAPIResponse(): Promise<APIResponse> {}

// function renderFriendList(friendList: FriendList) {}

// let response = await getAPIResponse();
// renderFriendList(response.user.friendList);

// type ResponseKeys = keyof APIResponse;
// type UserKeys = keyof APIResponse["user"];
// type FriendListKeys = keyof APIResponse["user"]["friendList"];

// function get<O extends object, K extends keyof O>(o: O, k: K): O[K] {
//   return o[k];
// }

// type ActivityLog = {
//   lastEvent: Date;
//   events: {
//     id: string;
//     timestamp: Date;
//     type: "Read" | "write";
//   }[];
// };
// let activityLog: ActivityLog = {};
// let lastEvent = get(activityLog, 'lastEvent');

// type Get = {
//   <O extends object, K1 extends keyof O>(o: O, k1: K1): O[K1];
//   <O extends object, K1 extends keyof O, K2 extends keyof O[K1]>(
//     o: O,
//     k1: K1,
//     k2: K2
//   ): O[K1][K2];
//   <
//     O extends object,
//     K1 extends keyof O,
//     K2 extends keyof O[K1],
//     K3 extends keyof O[K1][K2]
//   >(
//     o: O,
//     k1: K1,
//     k2: K2,
//     k3: K3
//   ): O[K1][K2][K3];
// };

// let get: Get = (object: any, ...keys: string[]) => {
//   let result = object;
//   keys.forEach((k) => (result = result[k]));
//   return result;
// };

// get(activityLog, "events", 0, "type");
// get(activityLog, "bad");
