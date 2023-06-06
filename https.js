import fs from "node:fs/promises";
import { createServer } from "node:https";

const PORT = 443;
createServer(
  {
    key: await fs.readFile("./key.pem"),
    cert: await fs.readFile("./cert.pem"),
  },
  (req, res) => {
    console.log(`The server is listening at ${PORT}`);
    res.end("Hello https World");
  }
).listen(PORT);
