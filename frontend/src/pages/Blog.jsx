import React, { useState, useEffect } from "react";
import axios from "axios";

const Blog = () => {
  const [Blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/blogs");
        setBlog(response.data);
      } catch (err) {
        setError("Failed to fetch Blog");
        console.error("Error fetching Blog:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, []);

  if (loading) return <p>Loading Blog...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="container mt-4">
      <h2>Blog Posts</h2>
      <div className="row">
        {Blog.length === 0 ? (
          <p>No Blog available.</p>
        ) : (
          Blog.map((blog) => (
            <div key={blog._id} className="col-md-4 mb-4">
              <div className="card h-100">
                {blog.image && (
                  <img
                    src={`http://localhost:5000/${blog.image.replace(/\\/g, '/')}`}
                    alt={blog.title}
                    className="card-img-top"
                    style={{ maxHeight: "200px", objectFit: "cover" }}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text">{blog.content.substring(0, 100)}...</p>
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
