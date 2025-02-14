import express from "express";
import { deleteBlogs, editBlogs, getBlogs,  } from "./controllers/blogs.js";
import { blogRouter } from "./routes/blogRoute.js";
import { getHome } from "./controllers/Home.js";

const app = express();

const PORT = process.env.PORT;

app.get("/", getHome);

app.use("/api", blogRouter)

/*
app.get("/blogs", getBlogs);

app.post("/blogs", );

app.put("/blogs", editBlogs);

app.delete("/blogs", deleteBlogs);
*/

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
