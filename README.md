<div align="center">
  <img src="docs/screenshots/hero.png" alt="EduNexus Hero" width="100%"/>
  
  <h1>EduNexus</h1>
  
  <p>
    A modern full‑stack Learning Management System (LMS) connecting instructors and students. Create courses, share knowledge, run live lectures, chat, manage assignments, and grow together.
  </p>
  
  <p>
    <a href="#-features">Features</a> ·
    <a href="#-tech-stack">Tech Stack</a> ·
    <a href="#-getting-started">Getting Started</a> ·
    <a href="#-environment-variables">Environment</a> ·
    <a href="#-scripts">Scripts</a> ·
    <a href="#-screenshots">Screenshots</a>
  </p>
</div>

---

## ✨ Features

- **Authentication & Authorization**: JWT‑based auth with roles (student, instructor, admin), protected routes on both backend and frontend.
- **Google Sign‑In**: One‑click login using Google OAuth.
- **Courses**:
  - Create, edit, publish/unpublish courses (instructor)
  - Browse and view published courses (student)
  - Rich course detail view with lectures and chat
- **Lectures**: Upload and manage lectures; video hosting via Cloudinary.
- **Assignments**:
  - Create and assign coursework (instructor)
  - Submit assignments and track status (student)
  - Grade and review submissions (instructor)
- **Enrollments**: Enroll/unenroll students; instructor and admin overview.
- **Interactive Course Chat**: Real‑time discussion per course.
- **Live Sessions (Google Meet‑style)**:
  - Schedule and host live video sessions
  - Join links for students
  - Designed for instructor‑led, synchronous learning
- **Admin Dashboard**: Manage users, courses, and platform policies.
- **Responsive UI**: Polished, dark‑theme interface built with modern React tooling.

> Note: Some features depend on environment variables (Cloudinary, Google OAuth, JWT secrets). See the Environment section.

---

## 🧱 Tech Stack

- **Frontend**: React + Vite, Context API for auth/theme, React Router
- **Backend**: Node.js, Express
- **Database**: MongoDB (via Mongoose)
- **Storage**: Cloudinary for media assets
- **Auth**: JWT + Google OAuth
- **Real‑time/Live**: Custom live session endpoints; course chat

---

## 🚀 Getting Started

### Prerequisites

- Node.js (LTS recommended)
- MongoDB database (local or hosted)
- Cloudinary account
- Google OAuth credentials (for Google Sign‑In)

### Clone

```bash
git clone <your-repo-url> EduNexus
cd EduNexus
```

### Install Dependencies

```bash
# Backend
cd EduNexus-backend
npm install

# Frontend (in a separate shell or after the backend)
cd ../EduNexus-Frontend
npm install
```

### Environment Variables

Create `.env` files as shown below.

#### Backend: `EduNexus-backend/.env`

```env
PORT=5000
MONGODB_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>

# Cloudinary
CLOUDINARY_CLOUD_NAME=<cloud-name>
CLOUDINARY_API_KEY=<api-key>
CLOUDINARY_API_SECRET=<api-secret>

# Google OAuth (server side as needed)
GOOGLE_CLIENT_ID=<client-id>
GOOGLE_CLIENT_SECRET=<client-secret>
GOOGLE_REDIRECT_URI=<server-oauth-redirect-uri>
```

#### Frontend: `EduNexus-Frontend/.env`

```env
VITE_API_BASE_URL=http://localhost:5000
VITE_GOOGLE_CLIENT_ID=<client-id>
```

### Run

```bash
# Terminal 1 — Backend
cd EduNexus-backend
npm run dev

# Terminal 2 — Frontend
cd EduNexus-Frontend
npm run dev
```

Open the frontend URL printed by Vite (usually `http://localhost:5173`).

---

## 📂 Repository Structure

```
EduNexus/
├─ EduNexus-backend/
│  ├─ src/
│  │  ├─ config/         # cloudinary, db
│  │  ├─ controllers/    # auth, admin, course, lecture, chat, live, assignment, enrollment
│  │  ├─ middleware/     # auth, error handlers
│  │  ├─ models/         # User, Course, Lecture, LiveSession, Message, Assignment, Submission, Enrollment
│  │  └─ routes/         # api route modules
│  └─ server.js
└─ EduNexus-Frontend/
   ├─ src/
   │  ├─ components/     # Layout
   │  ├─ context/        # AuthContext, ThemeContext
   │  ├─ lib/            # api.js, upload.js
   │  ├─ pages/          # Home, Courses, CourseDetail, Chat, Auth, Instructor, Admin, etc.
   │  └─ routes/         # ProtectedRoute
   └─ vite.config.js
```

---

## 🔐 Authentication Flow

- Users register or sign in via email/password or Google Sign‑In.
- Backend issues a JWT; frontend stores it securely and attaches it to API requests.
- Role‑based access protects instructor/admin pages and management endpoints.

---

## 📡 Live Sessions (Google Meet‑style)

- Instructors can schedule and manage live sessions from the instructor dashboard.
- Students can join sessions via course pages.
- The backend exposes live session routes, and the UI provides seamless join/host flows.

> If you use a third‑party video provider, configure keys/URLs accordingly and surface them via environment variables.

---

## 🧪 Scripts

### Backend (`EduNexus-backend/package.json`)

- `npm run dev` — start backend in dev (nodemon)
- `npm start` — start backend in production

### Frontend (`EduNexus-Frontend/package.json`)

- `npm run dev` — start Vite dev server
- `npm run build` — production build
- `npm run preview` — preview production build

---

## 📸 Screenshots

Place the screenshots from this README request into `docs/screenshots/` with the following names:

- `hero.png` — Landing page hero
- `features.png` — Features section
- `login.png` — Login page
- `courses.png` — Courses listing

Then the images below will render on GitHub:

<img src="docs/screenshots/features.png" alt="Features" width="100%"/>

<img src="docs/screenshots/login.png" alt="Login" width="100%"/>

<img src="docs/screenshots/courses.png" alt="Courses" width="100%"/>

---

## 📬 API Overview (high level)

Routes are organized under `src/routes/` on the backend:

- `auth.routes.js` — register, login, Google auth
- `course.routes.js` — create, update, list, details, publish
- `lecture.routes.js` — add/update lectures
- `assignment.routes.js` — create assignments, submissions
- `enrollment.routes.js` — enrollments management
- `chat.routes.js` — course chat endpoints
- `live.routes.js` — schedule/join live sessions
- `admin.routes.js` — admin management

> See controllers in `src/controllers/` for specific request/response shapes.

---

## 🛡️ License

This project is licensed under the MIT License. See `LICENSE` if present, or add one to your repository root.

---

## 🙌 Acknowledgements

- Cloudinary for media storage
- Google OAuth for simplified sign‑in
- The open‑source community


