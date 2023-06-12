import { getProducts } from "../product.js";

/**
 *
 * @param {Express} app
 */
export default function basicRoutes(app) {
  app.get("/", (req, res) => {
    res.send("GET Method called");
    console.log(res.getHeaders());
  });
  app.post("/", (req, res) => res.send("POST Method called"));
  app.put("/", (req, res) => res.send("PUT Method called"));
  app.delete("/", (req, res) => res.send("DELETE Method called"));

  app.get("/products", async (req, res) => {
    const products = await getProducts();
    const headers = res.getHeaders();
    console.dir(headers["x-powered-by"], { depth: 0 });
    res.json(products);
  });
}
export function imagesRoutes(app) {
  app
    .route("/images")
    .get((req, res, next) => res.send("GET request called"))
    .post((req, res, next) => res.end("POST request send"));
}
