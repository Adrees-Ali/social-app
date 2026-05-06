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

posts.delete("/:id", async (c: Context) => {
  const id = c.req.param("id");

  await sql`
    DELETE FROM posts
    WHERE id = ${id}
  `;

  return c.json({ message: "Post deleted successfully" });
});

posts.put("/:id", async (c: Context) => {
  const id = c.req.param("id");
  const { content } = await c.req.json();

  await sql`
    UPDATE posts
    SET content = ${content}
    WHERE id = ${id}
  `;

  return c.json({ message: "Post updated successfully" });
});

export default posts;