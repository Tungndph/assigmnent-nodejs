import laptopsRouter from "./laptops.js";

export default function routes(app) {
  app.get("/", (req, res) => {
    res.send("Home");
  });
  app.use("/laptops", laptopsRouter);
}
