"use strict";
function log(message, userId) {
    let time = new Date().toLocaleTimeString();
    console.log(time, message, userId || "Not signed in");
}
log("Page loaded");
log("User signed in", "da763be");
//# sourceMappingURL=4.1.1.js.map