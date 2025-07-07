import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { articleSchema } from "./article.schema";
import z from "zod";

export const articleRoute = new Hono({ strict: false });

articleRoute.get(
  "/:publicId",
  zValidator(
    "param",
    z.object({
      publicId: z.string(),
    })
  ),
  (c) => {
    const { publicId } = c.req.valid("param");
    return c.json({
      publicId,
    });
  }
);

articleRoute.post("/", zValidator("json", articleSchema), (c) => {
  const body = c.req.valid("json");
  return c.json({
    title: body.title,
    url: body.url,
  });
});
