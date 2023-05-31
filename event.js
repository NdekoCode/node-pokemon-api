import { EventEmitter } from "node:events";
const myEvent = new EventEmitter();

myEvent.on("start", (e) => {
  console.log(e); // Data to Transfert
});
myEvent.emit("start", "Data to Transfert");
