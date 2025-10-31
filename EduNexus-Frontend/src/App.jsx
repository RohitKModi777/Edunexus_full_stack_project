import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { ThemeProvider } from './context/ThemeContext'
// import ProtectedRoute from './routes/ProtectedRoute'
import Layout from './components/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import Assignments from './pages/Assignment'
import Enrollments from './pages/Enrollment'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminUsers from './pages/admin/AdminUsers'
import AdminCourses from './pages/admin/AdminCourses'
import AdminContent from './pages/admin/AdminContent'
import InstructorDashboard from './pages/instructor/InstructorDashboard'
import CourseEditor from './pages/instructor/CourseEditor'
import LectureManager from './pages/instructor/LectureManager'
import AssignmentManager from './pages/instructor/AssignmentManager'
import InstructorSubmissions from './pages/instructor/InstructorSubmission'
import CourseChat from './pages/CourseChat'
import LiveManager from './pages/instructor/LiveManager'
import InstructorCourseSubmissions from './pages/instructor/InstructorCourseSubmission'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route element={<Layout />}>
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<CourseDetail />} />
            <Route path="/assignments/:courseId" element={<Assignments />} />
            <Route path="/chat/:courseId" element={<CourseChat />} />
            <Route path="/me/enrollments" element={<Enrollments />} />
          </Route>

          <Route element={<Layout />}>
            <Route path="/instructor" element={<InstructorDashboard />} />
            <Route path="/instructor/courses/:id/edit" element={<CourseEditor />} />
            <Route path="/instructor/courses/new" element={<CourseEditor />} />
            <Route path="/instructor/courses/:id/lectures" element={<LectureManager />} />
            <Route path="/instructor/courses/:id/assignments" element={<AssignmentManager />} />
            <Route path="/instructor/courses/:id/live" element={<LiveManager />} />
            <Route path="/instructor/courses/:id/submissions" element={<InstructorCourseSubmissions />} />
            <Route path="/instructor/assignments/:assignmentId/submissions" element={<InstructorSubmissions />} />
          </Route>

          <Route element={<Layout />}>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/courses" element={<AdminCourses />} />
            <Route path="/admin/content" element={<AdminContent />} />
          </Route>
        </Routes>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App