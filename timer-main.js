import fs from "fs/promises";
import { fileURLToPath } from "url";
// Le plus performant va l'emporter
setTimeout(() => {
  console.log("Timeout");
}, 0);

// Sera executer rapidement car il n'a pas de timer
setImmediate(async () => {
  console.log("Immediate");
  const __filename = fileURLToPath(import.meta.url);
  const result = await fs.readFile(__filename);
  console.log(result.toString());
});
