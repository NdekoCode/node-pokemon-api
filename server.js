import { createServer } from "node:http";
const PORT = 3500;
const server = createServer();
server.on("request", (req, res) => {
  console.dir(req, res);
  res.end("Hello world");
});
server.listen(PORT, () => {
  console.log(`The server is listening at ${PORT}`);
});
