import { Hono, Context } from "hono";
import sql from "../db";

const comments = new Hono();

comments.post("/", async (c: Context) => {
  const { post_id, user_id, content } = await c.req.json();

  const result = await sql`
    INSERT INTO comments (post_id, user_id, content)
    VALUES (${post_id}, ${user_id}, ${content})
    RETURNING *
  `;

  return c.json({
    message: "Comment added",
    comment: result[0]
  });
});

export default comments;