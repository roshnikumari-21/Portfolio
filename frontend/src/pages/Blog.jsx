


import React, { useState, useEffect } from "react";
import axios from "axios";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
           `http://localhost:5000/api/blogs?search=${searchTerm || ""}`
        );
        setBlogs(response.data);
      } catch (err) {
        setError("Failed to fetch Blogs");
        console.error("Error fetching Blogs:", err);
        console.error("Error details:", err.response ? err.response.data : err.message);
    
      
      } finally {
        setLoading(false);
      }
    };

    // Debounce effect to reduce API calls while typing
    const delaySearch = setTimeout(() => {
      fetchBlogs();
    }, 500);

    return () => clearTimeout(delaySearch);
  }, [searchTerm]);

  if (loading) return <p className="text-center mt-3">Loading Blogs...</p>;
  if (error) return <p className="text-danger text-center">{error}</p>;

  return (
    <div className="container mt-4">
      <h1 className="text-center my-3">Blog Posts</h1>

      {/* Search Input */}
      <div className="mb-3 input-group">
        <span className="input-group-text">
          <i className="fas fa-search"></i>
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Search by title or content..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="row">
        {blogs.length === 0 ? (
          <p className="text-center">No Blogs available.</p>
        ) : (
          blogs.map((blog) => (
            <div key={blog._id} className="col-md-4 mb-4">
              <div className="card shadow-lg h-100">
                {blog.image && (
                  <img
                    src={blog.image} // Cloudinary URL should be directly used here
                    alt={blog.title}
                    className="card-img-top"
                    style={{ maxHeight: "200px", objectFit: "cover" }}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{blog.title}</h5>
                  <hr />
                  <p className="card-text">
                    {blog.content.length > 150
                      ? blog.content.substring(0, 150) + "..."
                      : blog.content}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Blog;
