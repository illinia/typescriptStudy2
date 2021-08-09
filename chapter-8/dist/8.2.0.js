"use strict";
// function readFile(
//   path: string,
//   options: { encoding: string; flag?: string },
//   callback: (err: Error | null, data: string | null) => void
// ): void;
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
fs.readFile("/var/log/apache2/access_log", { encoding: "utf8" }, (error, data) => {
    if (error) {
        console.error("error reading", error);
        return;
    }
    console.info("success reading!", data);
});
fs.appendFile("/var/log/apache2/access_log", "New access log entry", (error) => {
    if (error) {
        console.error("error writing!", error);
    }
});
//# sourceMappingURL=8.2.0.js.map