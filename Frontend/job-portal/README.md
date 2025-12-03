# Job Portal Application

A full‑stack Job Portal application built using **React (Frontend)** and **Node.js/Express (Backend)**. The platform enables two main user roles — **Job Seekers** and **Employers** — to interact through job postings, applications, and profile management.

---

## 🚀 Features

### 👤 Authentication & Authorization

* Login and Sign‑up for both Job Seekers and Employers
* Context API‑based authentication (`AuthContext.jsx`)
* Protected routes for restricted pages

### 🧑‍💼 Employer Features

* Employer Dashboard
* Create, edit, and delete job postings
* Manage and view posted jobs
* Profile management (edit employer details)

### 👨‍💻 Job Seeker Features

* View job listings
* View job details
* Save jobs
* Apply for jobs
* Manage personal profile

### 🖼️ Image Upload Support

* Image upload utility via `uploadImage.js`
* Integrated with profile creation/update

### 🛠️ Utility & API Layer

* Centralized Axios instance (`axiosInstance.js`)
* API endpoint management (`apiPaths.js`)
* Helper functions & data configs

### 🧩 Reusable UI Components

* Cards
* Input fields
* Layout wrappers
* Landing Page components

---

## 📦 Project Structure

```
JOBFINDING/
├── Backend/
│   └── (Node.js + Express server)
└── Frontend/job-portal/
    ├── public/
    └── src/
        ├── assets/
        ├── components/
        │   ├── Cards/
        │   ├── Input/
        │   └── layout/
        ├── context/
        │   └── AuthContext.jsx
        ├── pages/
        │   ├── Auth/
        │   │   ├── Login.jsx
        │   │   └── SignUp.jsx
        │   ├── Employer/
        │   │   ├── ApplicationViewer.jsx
        │   │   ├── EditProfileDetails.jsx
        │   │   ├── EmployerDashboard.jsx
        │   │   ├── EmployerProfilePage.jsx
        │   │   ├── JobPostingForm.jsx
        │   │   └── ManageJobs.jsx
        │   ├── JobSeeker/
        │   │   ├── components/
        │   │   │   └── JobDetails.jsx
        │   │   ├── JobSeekerDashboard.jsx
        │   │   ├── SavedJobs.jsx
        │   │   └── UserProfile.jsx
        │   └── LandingPage/
        │       ├── components/
        │       └── LandingPage.jsx
        ├── utils/
        │   ├── apiPaths.js
        │   ├── axiosInstance.js
        │   ├── data.js
        │   ├── helper.js
        │   └── uploadImage.js
        ├── routes/
        │   └── ProtectedRoute.jsx
        └── App.jsx
```

---

## 🛠️ Technologies Used

### Frontend

* **React.js**
* React Router
* Context API
* Axios
* Custom components & layouts

### Backend

* **Node.js**
* Express.js
* MongoDB (if applicable)
* Multer / Cloudinary (for image upload)

---

## ▶️ Getting Started

### 1. Clone the repository

```bash
git clone <repo-url>
cd JOBFINDING
```

### 2. Install dependencies

#### Frontend

```bash
cd Frontend/job-portal
npm install
```

#### Backend

```bash
cd Backend
npm install
```

### 3. Environment Variables

Create a `.env` file in both **Frontend** and **Backend** as required.

Example Backend `.env`:

```
PORT=5000
MONGODB_URI=your_mongo_uri
JWT_SECRET=your_secret
CLOUDINARY_KEY=xxx
CLOUDINARY_SECRET=xxx
```

---

## ▶️ Run the Application

### Start Backend

```bash
cd Backend
npm start
```

### Start Frontend

```bash
cd Frontend/job-portal
npm run dev
```

Frontend runs on: `http://localhost:5173` (or Vite default)
Backend runs on: `http://localhost:5000`

---

## 📌 Protected Routes

Routes requiring authentication are wrapped using:

```
<ProtectedRoute>
   <Dashboard />
</ProtectedRoute>
```

---

## 🏗️ Image Upload Flow

* Uses `uploadImage.js` utility
* Compresses/validates the image
* Sends to backend or cloud storage
* Returns final image URL

---

## 🤝 Contribution Guidelines

1. Create a new branch
2. Commit with meaningful messages
3. Open a Pull Request

---

## 📄 License

This project is open-source and free to use.

---

## ✨ Author

Developed by **Gehan Chamikara Liyanage**

For educational and portfolio purposes.
