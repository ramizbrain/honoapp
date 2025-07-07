import { Hono } from "hono";
import { articleRoute } from "./modules/article/article.route";
import { cors } from "hono/cors";

const app = new Hono();
const api = new Hono({ strict: false });

app.use(
  "*",
  cors({
    origin: ["https://frontend.com"],
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

api.route("/article", articleRoute);
app.route("/api/v1", api);

export default app;
