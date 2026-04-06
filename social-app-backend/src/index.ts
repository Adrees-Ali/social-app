import { Hono } from "hono";
import auth from "./routes/auth";
import posts from "./routes/posts";
import comments from "./routes/comments";

const app = new Hono();

app.route("/auth", auth);
app.route("/posts", posts);
app.route("/comments", comments);


export default {
  port: 4000,
  fetch: app.fetch,
};