import React, { useState, useEffect } from "react";
import axios from "axios";

const Media = () => {
  const [media, setMedia] = useState([]);
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMedia();
  }, []);

  const fetchMedia = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/media");
      setMedia(response.data);
    } catch (error) {
      console.error("Error fetching media:", error);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file || !caption) return alert("Please select a file and add a caption!");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("caption", caption);

    try {
      setLoading(true);
      await axios.post("http://localhost:5000/api/media/upload", formData, {
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

  return (
    <div className="container mt-4">
      <h2 className="text-center ">Media Gallery</h2>

      
      <div className="row">
        {media.map((item) => (
          <div key={item._id} className="col-md-4 mb-4">
            <div className="card shadow-lg">
              {item.fileType === "image" ? (
                <img src={`http://localhost:5000${item.filePath}`} alt={item.caption} className="card-img-top" />
              ) : (
                <video controls className="card-img-top">
                  <source src={`http://localhost:5000${item.filePath}`} type="video/mp4" />
                </video>
              )}
              <div className="card-body">
                <p className="card-text">{item.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Media;
