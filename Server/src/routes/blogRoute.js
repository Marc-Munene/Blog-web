import { Router } from "express";
import {
  addBlogs,
  deleteBlogs,
  editBlogs,
  getBlogs,
} from "../controllers/blogs.js";

const blogRouter = Router();

blogRouter
  .route("/blogs")
  .get(getBlogs)
  .post(addBlogs)
  .put(editBlogs)
  .delete(deleteBlogs);

  export {blogRouter}
