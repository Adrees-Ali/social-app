import { Hono , Context} from "hono";
import sql from "../db";

const auth = new Hono();


auth.post("/register", async (c: Context) => {
  const { name, username, email, phone, password } = await c.req.json();

  const result = await sql`
    INSERT INTO users (name, username, email, phone, password)
    VALUES (${name}, ${username}, ${email}, ${phone || null}, ${password})
    RETURNING *
  `;

  return c.json({
    message: "User registered",
    user: result[0]
  });
});


auth.post("/login", async (c: Context) => {
  const { email, password } = await c.req.json();

  const result = await sql`
    SELECT * FROM users 
    WHERE email = ${email} AND password = ${password}
  `;

  if (result.length === 0) {
    return c.json({ message: "Invalid credentials" }, 401);
  }

  return c.json({
    message: "Login successful",
    user: result[0]
  });
});

export default auth;