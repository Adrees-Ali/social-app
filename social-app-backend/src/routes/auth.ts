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

auth.put("/profile/:id", async (c: Context) => {

  const id = c.req.param("id");

  const {
    first_name,
    last_name,
    bio
  } = await c.req.json();

  const result = await sql`
    UPDATE users
    SET
      first_name = ${first_name},
      last_name = ${last_name},
      bio = ${bio}
    WHERE id = ${id}
    RETURNING *
  `;

  return c.json({
    message: "Profile updated",
    user: result[0]
  });
});

auth.post("/forgot-password", async (c: Context) => {

  const { email } = await c.req.json();

  const user = await sql`
    SELECT * FROM users
    WHERE email = ${email}
  `;

  if (user.length === 0) {

    return c.json({
      message: "Email not found"
    }, 404);
  }

  return c.json({
    message: "Password reset link sent successfully"
  });
});
export default auth;