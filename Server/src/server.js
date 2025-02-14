import express from "express";
import { deleteBlogs, editBlogs, getBlogs, getHome } from "./controllers/blogs.js";

const app = express();

const PORT = process.env.PORT;

app.get("/", getHome);

app.get("/blogs", getBlogs);

app.post("/blogs", );

app.put("/blogs", editBlogs);

app.delete("/blogs", deleteBlogs);

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
