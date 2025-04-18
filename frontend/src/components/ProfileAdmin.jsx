

import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    about: "",
    password: "",
  });

  const [profilePicture, setProfilePicture] = useState(null); // for uploading new pic
  const [profilePicName, setProfilePicName] = useState(""); // to display current pic
  const [userExists, setUserExists] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch existing user
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/user`);
        const data = res.data;

        setFormData({
          name: data.name || "",
          email: data.email || "",
          phone: data.phone || "",
          position: data.position || "",
          about: data.about || "",
          password: data.adminPassword || "",
        });

        setProfilePicName(data.profilePicture || ""); // set only the name/path for display
        setUserExists(true);
      } catch (err) {
        console.error("Error fetching user:", err);
        setUserExists(false);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfilePicture(file);
      console.log("✅ Selected profile picture:", file.name);
    } else {
      console.warn("⚠️ No file selected.");
    }
  };
  

  const handleSubmit = async (field) => {
    const data = new FormData();

    if (field === "profilePicture" && profilePicture) {
      data.append("profilePicture", profilePicture);
    } else {
      const key = field === "password" ? "adminPassword" : field;
      data.append(key, formData[field]);
    }

    console.log("Sending data:", data); 

    try {
      await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/user`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert(`${field} updated successfully`);

      if (field === "profilePicture") {
        setProfilePicName(profilePicture.name); // update UI with new filename
      }
    } catch (err) {
      console.error(`Error updating ${field}:`, err);
      alert("Update failed");
    }
  };

  const handleCreateUser = async () => {
    const data = new FormData();

    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("position", formData.position);
    data.append("about", formData.about);
    data.append("adminPassword", formData.password);

    if (profilePicture) {
      data.append("profilePicture", profilePicture);
    }

    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Admin user created!");
      setUserExists(true);
    } catch (err) {
      console.error("Error creating user:", err);
      alert("User creation failed");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-lg space-y-6">
      <h1 className="text-2xl font-semibold text-center mb-4">
        {userExists ? "Admin Profile Settings" : "Create Admin User"}
      </h1>

      {/* Show current profile picture */}
      {userExists && profilePicName && (
        <div className="flex justify-center">
          <img
  src={profilePicName}
  alt="Profile"
  className="w-24 h-24 rounded-full object-cover mb-4"
/>

        </div>
      )}

      {/* If no user exists, show Create User Form */}
      {!userExists ? (
        <>
          {["name", "email", "phone", "position", "about", "password"].map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium mb-1 capitalize">{field}</label>
              <input
                type={field === "password" ? "password" : "text"}
                className="input input-bordered w-full"
                value={formData[field]}
                onChange={handleChange(field)}
              />
            </div>
          ))}

          {/* Profile Picture for First User Creation */}
          <div>
            <label className="block text-sm font-medium mb-1">Profile Picture</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="file-input file-input-bordered w-full"
            />
          </div>

          <button onClick={handleCreateUser} className="btn btn-primary w-full mt-4">
            Create Admin User
          </button>
        </>
      ) : (
        <>
          {/* Update Forms (existing user) */}
          {["name", "email", "phone", "position", "about", "password"].map((field) => (
            <form
              key={field}
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(field);
              }}
            >
              <label className="block text-sm font-medium mb-1 capitalize">{field}</label>
              {field === "about" ? (
                <textarea
                  className="textarea textarea-bordered w-full"
                  value={formData[field]}
                  onChange={handleChange(field)}
                />
              ) : (
                <input
                  type={field === "password" ? "text" : "text"}
                  className="input input-bordered w-full"
                  value={formData[field]}
                  onChange={handleChange(field)}
                />
              )}
              <button type="submit" className="btn btn-primary mt-2">
                Update {field}
              </button>
            </form>
          ))}

          {/* Profile Picture Update */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit("profilePicture");
            }}
          >
            <label className="block text-sm font-medium mb-1">Update Profile Picture</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="file-input file-input-bordered w-full"
            />
            <button type="submit" className="btn btn-primary mt-2">
              Update Picture
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default AdminProfile;
