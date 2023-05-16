import { createServer } from "node:http";
const PORT = 3500;
const server = createServer((req, res) => {
  res.end("Welcome to a simple node server app");
});
server.listen(PORT, () => {
  console.log(process.platform);
  console.log("The server is listening at http://localhost:" + PORT);
});
