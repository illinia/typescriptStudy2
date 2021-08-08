// // type CompanyID = string;
// // type OrderID = string;
// // type UserID = string;
// // type ID = CompanyID | OrderID | UserID;

// // function queryForUser(id: UserID) {}

// // let id: CompanyID = "b341412";
// // queryForUser(id);

// type CompanyID = string & {readonly brand: unique symbol}
// type OrderID = string & {readonly brand: unique symbol}
// type UserID = string & {readonly brand: unique symbol}
// type ID = CompanyID | OrderID | UserID;

// function CompanyID(id: string) {
//   return id as CompanyID
// }
// function OrderID(id: string) {
//   return id as OrderID
// }
// function UserID(id: string) {
//   return id as UserID
// }

// function queryForUser(id: UserID) {}

// let companyId = CompanyID('f32j4l')
// let orderId = OrderID('9vx0zu')
// let userId = UserID('s0df80ds')

// queryForUser(userId);
// queryForUser(companyId);
