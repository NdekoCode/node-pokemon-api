import fs from "fs";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
function readDocument(callback) {
  fs.readFile(__filename, callback);
}
const timeoutScheduled = Date.now();
// Va s'executer en dernier car son callback va etre envoyer dans l'EventLoop
setTimeout(() => {
  const delay = Date.now() - timeoutScheduled;
  console.log(`${delay}ms have passed since i was scheduled`);
}, 100);

// Va s'executer en premier
console.log("Waiting...");

// Va s'executer en deuxième
readDocument((err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log(result.toString());
  }
});
