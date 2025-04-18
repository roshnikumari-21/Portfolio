


import React, { useState, useEffect } from "react";
import axios from "axios";

const BlogsAdmin = () => {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({
    title: "",
    content: "",
  });
  const [image, setImage] = useState(null);
  const [editBlog, setEditBlog] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/blogs");
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleAddBlog = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", newBlog.title);
    formData.append("content", newBlog.content);
    if (image) formData.append("image", image);

    try {
      const response = await axios.post("http://localhost:5000/api/blogs", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setBlogs([...blogs, response.data]);
      setNewBlog({ title: "", content: "" });
      setImage(null);
    } catch (error) {
      console.error("Error adding blog:", error);
    }
  };

  const handleUpdateBlog = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", editBlog.title);
    formData.append("content", editBlog.content);
    if (image) formData.append("image", image);

    try {
      const response = await axios.put(`http://localhost:5000/api/blogs/${editBlog._id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setBlogs(blogs.map(blog => blog._id === editBlog._id ? response.data : blog));
      setEditBlog(null);
      setImage(null);
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  const handleDeleteBlog = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/blogs/${id}`);
      setBlogs(blogs.filter(blog => blog._id !== id));
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Manage Blogs</h2>

      <form onSubmit={editBlog ? handleUpdateBlog : handleAddBlog} encType="multipart/form-data">
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          value={editBlog ? editBlog.title : newBlog.title}
          onChange={(e) => (editBlog ? setEditBlog({ ...editBlog, title: e.target.value }) : setNewBlog({ ...newBlog, title: e.target.value }))}
          required
        />
        <textarea
          className="form-control"
          placeholder="Content"
          value={editBlog ? editBlog.content : newBlog.content}
          onChange={(e) => (editBlog ? setEditBlog({ ...editBlog, content: e.target.value }) : setNewBlog({ ...newBlog, content: e.target.value }))}
          required
        />
        <input
          type="file"
          className="form-control"
          accept="image/*"
          onChange={handleImageChange}
        />
        <button type="submit" className="btn btn-primary mt-3">{editBlog ? "Update" : "Add"}</button>
      </form>

      <ul className="list-group mt-4">
        {blogs.map(blog => (
          <li key={blog._id} className="list-group-item">
            <h5 className="fw-bold">{blog.title}</h5>
            <p>{blog.content}</p>
            {blog.image && <img src={blog.image} alt="Blog" className="img-fluid" style={{ maxWidth: "200px", maxHeight: "150px" }} />}
            <button className="btn mx-2 btn-warning btn-sm" onClick={() => setEditBlog(blog)}>Edit</button>
            <button className="btn mx-2 btn-danger btn-sm ml-2" onClick={() => handleDeleteBlog(blog._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogsAdmin;

