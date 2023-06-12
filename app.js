import Express from "express";
import basicRoutes, { imagesRoutes, imagesRoutesMid } from "./routes/routes.js";
const app = Express();
const PORT = 3000;

app.listen(PORT, () =>
  console.log(`Server is listening on http://localhost:${PORT}`)
);
basicRoutes(app);
imagesRoutes(app);
imagesRoutesMid(app);
