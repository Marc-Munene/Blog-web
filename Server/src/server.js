import express from "express";
import { deleteBlogs, editBlogs, getBlogs } from "./controllers/blogs.js";
import { blogRouter } from "./routes/blogRoute.js";
import { getHome } from "./controllers/Home.js";
import { usersRouter } from "./routes/usersRoute.js";
import { connectDB } from "./database/config.js";

const app = express();

app.use(express.json());

const PORT = process.env.PORT;

connectDB();

app.get("/", getHome);

app.use("/api", blogRouter, usersRouter);

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
