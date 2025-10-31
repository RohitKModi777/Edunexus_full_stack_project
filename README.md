  
  <h1>EduNexus(Interactive LMS with Live Session)</h1>
  
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
  <img width="1850" height="881" alt="image" src="https://github.com/user-attachments/assets/01cf7fe2-e14e-4dfa-ad2a-16f03d0a4ac7" />

- `features.png` — Features section
  <img width="1812" height="906" alt="image" src="https://github.com/user-attachments/assets/4ebeec35-3575-400b-bfa2-aa973357aa08" />

- `register.png` — Register page
  <img width="1734" height="813" alt="image" src="https://github.com/user-attachments/assets/060fcc3b-56af-47e8-8bcf-2feaef0159d1" />

- `login.png` — Login page
  <img width="1803" height="816" alt="image" src="https://github.com/user-attachments/assets/331598d6-aa6a-48d7-ad0c-328d0c39f8b6" />

- `courses.png` — Courses listing
  <img width="1855" height="758" alt="image" src="https://github.com/user-attachments/assets/333eac5a-0c19-4cab-84b6-59208f666d5d" />
  `instructor.png` — Instructor Dashboard
  <img width="1899" height="592" alt="image" src="https://github.com/user-attachments/assets/b8b0ef0b-63ab-4f34-87cf-33e9fa477e8f" />
  -for student
  <img width="1855" height="834" alt="image" src="https://github.com/user-attachments/assets/21cb815f-1cb1-41ff-bc2d-7e22eda285f7" />
  -Enrollment course
  <img width="1887" height="471" alt="image" src="https://github.com/user-attachments/assets/e03d878b-1b86-4c50-8d0b-3bad38a3ffe5" />
  and other things you can see by going this link
  https://edunexus-full-stack-project.vercel.app


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


