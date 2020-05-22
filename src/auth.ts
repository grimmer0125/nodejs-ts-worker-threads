// workers/auth.js
// import sha256 from "js-sha256";
const sha256 = require("js-sha256");

import { expose } from "threads/worker";
import { isMainThread } from "worker_threads";

console.log("auth!!");

expose({
  hashPassword(password, salt) {
    if (isMainThread) {
      console.log("main thread");
    } else {
      console.log("worker thread");
    }
    // return password + salt;
    return sha256(password + salt);
  },
});
