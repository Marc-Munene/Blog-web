

export const getBlogs = (req, res) => {
  res.json({
    message: "This is getting blogs",
  });
};

export const addBlogs = (req, res) => {
  res.json({
    message: "This is posting blogs",
  });
};

export const editBlogs = (req, res) => {
  res.json({
    message: "This is editing blogs",
  });
};

export const deleteBlogs = (req, res) => {
  res.json({
    message: "This is deleting blogs",
  });
};
