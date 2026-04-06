import { Hono, Context } from "hono";
import sql from "../db";

const posts = new Hono();


posts.post("/", async (c: Context) => {
  const { user_id, content } = await c.req.json();

  const result = await sql`
    INSERT INTO posts (user_id, content)
    VALUES (${user_id}, ${content})
    RETURNING *
  `;

  return c.json(result[0]);
});


posts.get("/", async (c: Context) => {
  const result = await sql`
    SELECT * FROM posts
  `;

  return c.json(result);
});

export default posts;