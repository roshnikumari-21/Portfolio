import React, { useState, useEffect } from "react";
import axios from "axios";

const MediaAdmin = () => {
  const [media, setMedia] = useState([]);
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMedia();
  }, []);

  const fetchMedia = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/media`);
      setMedia(response.data);
    } catch (error) {
      console.error("Error fetching media:", error);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file || !caption)
      return alert("Please select a file and add a caption!");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("caption", caption);

    try {
      setLoading(true);
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/media/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setFile(null);
      setCaption("");
      fetchMedia();
    } catch (error) {
      console.error("Error uploading media:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this media?")) return;

    try {
      console.log(`Attempting to delete media with ID: ${id}`);
      const response = await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/media/${id}`
      );
      console.log("Delete response:", response.data);

      setMedia(media.filter((item) => item._id !== id)); // Update UI
    } catch (error) {
      console.error(
        "Error deleting media:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Media Gallery</h2>

      <form onSubmit={handleUpload} className="mb-4">
        <input
          type="text"
          placeholder="Caption"
          className="form-control mb-2"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          required
        />
        <input
          type="file"
          className="form-control mb-2"
          onChange={(e) => setFile(e.target.files[0])}
          accept="image/*,video/*"
          required
        />
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Uploading..." : "Upload"}
        </button>
      </form>

      {/* Display Media */}
      <div className="row">
        {media.map((item) => (
          <div key={item._id} className="col-md-4 mb-4">
            <div className="card">
              {item.fileType === "video" ? (
                <video controls className="card-img-top">
                  <source src={item.filePath} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={item.filePath}
                  alt={item.caption}
                  className="card-img-top"
                />
              )}
              <div className="card-body">
                <p className="card-text">{item.caption}</p>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaAdmin;
