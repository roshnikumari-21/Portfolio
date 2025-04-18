


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
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/media`);
      setMedia(response.data);
    } catch (error) {
      console.error("Error fetching media:", error);
    }
  };



  return (
    <div className="container mt-4">
      <h1 className="text-center">Media Gallery</h1>

     

      {/* Media display */}
      <div className="row mt-4">
        {media.length === 0 ? (
          <p className="text-center">No media available.</p>
        ) : (
          media.map((item) => (
            <div key={item._id} className="col-md-4 mb-4">
              <div className="card shadow-lg border-dark border-2 h-100">
                {item.fileType === "image" ? (
                  <img
                    src={item.filePath}
                    alt={item.caption}
                    className="card-img-top"
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                ) : (
                  <video
                    controls
                    className="card-img-top"
                    style={{ height: "250px", objectFit: "cover" }}
                  >
                    <source src={item.filePath} type="video/mp4" />
                  </video>
                )}
                <div className="card-body">
                  <p className="card-text">{item.caption}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Media;
