import { Link, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

export default function Layout() {
  const { user, logout } = useAuth();
  const { theme, toggle } = useTheme();
  const location = useLocation();

  // Set page-specific gradient key on html[data-bg]
  const path = location.pathname;
  const bgKey =
    path.startsWith('/courses') ? 'courses' :
    path.startsWith('/admin') ? 'admin' :
    path.startsWith('/instructor') ? 'instructor' :
    path.startsWith('/login') || path.startsWith('/register') ? 'auth' :
    path === '/' ? 'home' : 'default';
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-bg', bgKey);
    const allowAnim = (path === '/' || path.startsWith('/login') || path.startsWith('/register')) ? 'on' : 'off';
    document.documentElement.setAttribute('data-anim', allowAnim);
  }
  return (
    <div>
      <header className="header-glass sticky top-0">
        <nav className="nav">
          <Link to="/" className="brand" style={{ display:'inline-flex', alignItems:'center', gap:8 }}>
            <svg width="60" height="55" viewBox="0 0 24 24" fill="none" aria-hidden>
              
              <path d="M3.5 6.5c0-.83.67-1.5 1.5-1.5h6c.83 0 1.5.67 1.5 1.5v11c0-.83-.67-1.5-1.5-1.5H5c-.83 0-1.5.67-1.5 1.5v-11Z" stroke="#5b6bff" strokeWidth="1.6"/>
              <path d="M11 6.5c0-.83.67-1.5 1.5-1.5H19c.83 0 1.5.67 1.5 1.5v11c0-.83-.67-1.5-1.5-1.5h-6.5c-.83 0-1.5.67-1.5 1.5v-11Z" stroke="#10b981" strokeWidth="1.6"/>
            </svg>
            EduNexus
          </Link>
          <div className="flex-1" />
          <div className="flex items-center gap-4 text-sm">
            <button aria-label="Toggle theme" className="linklike" onClick={toggle} title={theme === 'dark' ? 'Switch to light' : 'Switch to dark'}>
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            {user ? (
              <>
                <Link className="linklike" to="/courses">Courses</Link>
                {user.role === 'student' && (
                  <Link className="linklike" to="/me/enrollments">Enrollments</Link>
                )}
                {(user.role === 'instructor' || user.role === 'admin') && (
                  <Link className="linklike" to="/instructor">Instructor</Link>
                )}
                {user.role === 'admin' && <Link className="linklike" to="/admin">Admin</Link>}
                <button className="linklike" onClick={logout}>Logout</button>
              </>
            ) : (
              <>
                <a className="linklike" href="/#features">About</a>
                <Link className="linklike" to="/login?next=/courses">Courses</Link>
                <Link className="linklike" to="/login">Sign In</Link>
                <Link className="btn" to="/register">Get Started</Link>
              </>
            )}
          </div>
        </nav>
      </header>
      <main className="container py-6">
        <Outlet />
      </main>
    </div>
  );
}

