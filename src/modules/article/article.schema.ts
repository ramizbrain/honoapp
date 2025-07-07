import { z } from "zod";

export const articleSchema = z.object({
  title: z.string(),
  url: z.string().url(),
});
