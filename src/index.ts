import { Hono } from "hono";
import { articleRoute } from "./modules/article/article.route";
import { cors } from "hono/cors";

const app = new Hono();
const v1 = new Hono();

app.use(
  "*",
  cors({
    origin: ["https://frontend.com"],
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.route("/api/v1", v1);
v1.route("/article", articleRoute);

export default app;
