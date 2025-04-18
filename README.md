# 👨‍🏫 Professor Portfolio - Admin Dashboard & Public Website

A full-stack portfolio application for academic professionals to showcase projects, awards, conferences, publications, fundings, and media gallery with an integrated admin panel to manage content efficiently.

---

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Tailwind CSS
- Framer Motion (for animations)
- Axios

**Backend:**
- Node.js
- Express.js
- MongoDB (via Mongoose)
- Multer (for file/image uploads)
- Dotenv

**Deployment:**
- Render (Frontend & Backend)
- MongoDB Atlas (Database)

---

## 📁 Folder Structure

project-root/ ├── client/ # React frontend │ └── src/ │ ├── components/ │ ├── pages/ │ └── App.jsx ├── server/ # Express backend │ ├── models/ │ ├── routes/ │ ├── uploads/ # For profile/media images │ └── index.js

markdown
Copy
Edit

---

## ✨ Features

### 📌 Public Site
- 📄 **About/Profile Page** – Displays admin's profile, photo, and bio.
- 🧪 **Projects & Awards** – Timeline-styled grouped display.
- 📚 **Blogs** – Readable blog posts.
- 📢 **Conferences** – Details like name, date, co-authors, and summary.
- 💰 **Fundings** – Grouped by year with descriptions and sponsors.
- 🖼️ **Media Gallery** – Showcases photos & videos with captions.
- 🧠 **Patents** – Statistics + year-wise collapsible listing.

### 🔐 Admin Panel
- 🔧 Update profile details (name, email, phone, position, about, password)
- 🖼️ Upload/update profile picture
- ➕ Add, update, and delete:
  - Projects
  - Awards
  - Blogs
  - Conferences
  - Fundings
  - Patents
  - Media files (image/video + caption)

---

## 🚀 Deployment on Render

### Backend Setup
- Set root directory to `/server`
- Add env variable:
- Build command: `npm install`
- Start command: `npm start`
- Enable static file serving for `/uploads`:
```js
app.use("/uploads", express.static("uploads"));
