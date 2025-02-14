import { Blog } from "../database/models/blog.js";

//GET all blogs
export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();

    res.status(200).json({
      success: true,
      data: blogs,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed",
    });
  }
};

//POST
export const addBlogs = async (req, res) => {
  try {
    const newBlog = await Blog.create(req.body);

    res.status(200).json({
      success: true,
      message: newBlog,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed",
    });
  }
};

//PUT
export const editBlogs = async (req, res) => {
  try {
    const blogId = req.query.id;

    const article = await Blog.findOneAndUpdate({_id: blogId}, req.body, {
      new: true, //esnure the updated document is returned
    });

    res.status(200).json({
      success: true,
      data: article,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to edit articles",
    });
  }
};

//DELETE
export const deleteBlogs = async (req, res) => {
  try {
    const blogId = req.query.id;

    const removedBlog = await Blog.deleteOne({ _id: blogId });

    res.status(200).json({
      success: true,
      deletedCount: removedBlog.deletedCount,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error!",
    });
  }
};
