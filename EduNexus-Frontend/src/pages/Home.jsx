import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="fade-in" style={{ minHeight: '80vh' }}>
      {/* HERO */}
      <section className="hero" style={{
        padding: '4.2rem 1rem 1.6rem',
      }}>
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
          gap: '1.6rem',
          alignItems: 'center'
        }}>
          <div style={{ gridColumn: 'span 6 / span 6' }}>
            <h1 className="brand" style={{ fontSize: '3.2rem', lineHeight: 1.1 }}>
              Transform Your Learning Journey with <span style={{color:'var(--primary)'}}>EduNexus</span>
            </h1>
            <p className="text-gray-600" style={{ fontSize: '1.12rem', marginTop: '0.9rem' }}>
              A comprehensive Learning Management System connecting instructors and students. Create courses, share knowledge, and grow together.
            </p>
            <div style={{ marginTop: 22, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link to="/register" className="btn">Get Started Free</Link>
              <Link to="/login?next=/courses" className="btn-secondary">Browse Courses</Link>
            </div>
          </div>
          <div style={{ gridColumn: 'span 6 / span 6' }}>
            <div style={{ position: 'relative', borderRadius: 18, overflow: 'hidden', boxShadow: '0 16px 50px #3038a81f' }}>
              <img
                src="https://cdn.pixabay.com/photo/2024/12/28/01/27/ai-generated-9295105_1280.jpg"
                alt="Students learning"
                style={{ width: '100%', height: 380, objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" style={{ maxWidth: 1100, margin: '0 auto', padding: '1.2rem 1rem 2.6rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.1rem', fontWeight: 800, marginBottom: 6 }}>Everything You Need to Learn & Teach</h2>
        <p className="text-gray-600" style={{ textAlign: 'center', marginBottom: 24 }}>Powerful tools for instructors and engaging experiences for students</p>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(12, minmax(0, 1fr))', gap: '1.2rem' }}>
          {features.map((f) => (
            <div key={f.title} className="card" style={{ gridColumn: 'span 3 / span 3' }}>
              <div className="card-body">
                <div style={{ display:'inline-flex', alignItems:'center', justifyContent:'center', width:56, height:56, borderRadius:14, background: f.bg }}>
                  {f.icon}
                </div>
                <h3 className="font-semibold" style={{ fontSize:'1.2rem', marginTop: 12 }}>{f.title}</h3>
                <p className="text-sm text-gray-600" style={{ marginTop: 6 }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ROLE CARDS */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '0 1rem 2rem' }}>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(12, minmax(0, 1fr))', gap: '1.2rem' }}>
          {cards.map((c) => (
            <div key={c.title} className="card" style={{ gridColumn: 'span 4 / span 4' }}>
              <div className="card-body">
                <div style={{ position: 'relative', borderRadius: 14, overflow: 'hidden', marginBottom: 14 }}>
                  <img src={c.image} alt={c.title} style={{ width: '100%', height: 180, objectFit: 'cover', display: 'block' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, #0000 30%, #00000055 100%)' }} />
                </div>
                <h3 className="font-semibold text-lg mb-1" style={{ fontSize: '1.25rem' }}>{c.title}</h3>
                <p className="text-sm text-gray-600" style={{ minHeight: 44 }}>{c.subtitle}</p>
                <ul className="text-sm" style={{ color: '#48507a', marginTop: 8, marginBottom: 12 }}>
                  {c.points.map((p) => (
                    <li key={p} style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6 }}>
                      <span style={{ width: 8, height: 8, borderRadius: 999, background: 'var(--primary-light)' }} />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link className={c.ctaStyle} to={`/login?role=${c.role}`} style={{ width: '85%' }}>{c.cta}</Link>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 36 }}>
          <p className="text-gray-600">Don't have an account?</p>
          <Link to="/register" className="btn-secondary" style={{ marginTop: 10, display: 'inline-block' }}>
            Create Account
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ textAlign: 'center', padding: '1.6rem 0 2.4rem', color: '#6c74a0' }}>
        © 2025 EduNexus. Building the future of education.
      </footer>
    </div>
  );
}

const cards = [
  {
    title: 'For Instructors',
    subtitle: 'Create and manage courses',
    points: [
      'Upload videos and materials',
      'Create assignments and quizzes',
      'Track student progress',
    ],
    cta: 'Start Teaching',
    ctaStyle: 'btn',
    role: 'instructor',
    image: 'https://media.istockphoto.com/id/1231898401/vector/%C3%B0%C3%B1%C3%B0%C3%B0%C3%B0%C3%B0%C3%B1%C3%B0%C2%B5-rgb.jpg?s=612x612&w=0&k=20&c=OpAH1-b7qULawK00Kia-uB9Y8IjBdQ9SuZ_hMph4VS4=',
  },
  {
    title: 'For Students',
    subtitle: 'Learn and grow',
    points: [
      'Enroll in curated courses',
      'Watch lectures anywhere',
      'Complete and submit assignments',
    ],
    cta: 'Start Learning',
    ctaStyle: 'btn',
    role: 'student',
    image: 'https://cdn.pixabay.com/photo/2018/05/21/23/32/education-3420037_1280.png',
  },
  {
    title: 'For Admins',
    subtitle: 'Manage the platform',
    points: [
      'Oversee users and courses',
      'Set policies and permissions',
      'Maintain content standards',
    ],
    cta: 'Admin Access',
    ctaStyle: 'btn',
    role: 'admin',
    image: 'https://media.istockphoto.com/id/1147500946/vector/businessman-holding-magnifying-glass-looking-for-documents.jpg?s=612x612&w=0&k=20&c=fG2rPB7UvQn-6v5SvzDnSJhEd600sTbMb2HvdAPijak=',
  },
];

const features = [
  { title: 'Course Management', desc: 'Create, organize, and manage your courses with ease', bg: '#eaf0ff', icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6.5C4 5.119 5.119 4 6.5 4h11A2.5 2.5 0 0 1 20 6.5v10.75c0 .69-.56 1.25-1.25 1.25H6.5A2.5 2.5 0 0 1 4 16.5V6.5Z" stroke="#5b6bff" strokeWidth="1.6"/>
      <path d="M8 9h8M8 12h5" stroke="#5b6bff" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  ) },
  { title: 'Video Lectures', desc: 'Upload and stream high-quality video content', bg: '#e8fbf6', icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3.5" y="5.5" width="13" height="13" rx="2" stroke="#10b981" strokeWidth="1.6"/>
      <path d="M16.5 9.5 21 7.5v9l-4.5-2v-5Z" stroke="#10b981" strokeWidth="1.6" fill="none"/>
    </svg>
  ) },
  { title: 'Interactive Chat', desc: 'Real-time communication between students and instructors', bg: '#fff4e9', icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v6A2.5 2.5 0 0 1 17.5 15H9l-4 4v-4.5Z" stroke="#f59e0b" strokeWidth="1.6"/>
    </svg>
  ) },
  { title: 'Assignments', desc: 'Create, submit, and grade assignments efficiently', bg: '#eef3ff', icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 4.5h7.5L19 9v8.5c0 .83-.67 1.5-1.5 1.5H7A1.5 1.5 0 0 1 5.5 17.5v-12C5.5 5.17 6.17 4.5 7 4.5Z" stroke="#6366f1" strokeWidth="1.6"/>
      <path d="M8.5 13.5h7M8.5 10.5h5" stroke="#6366f1" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  ) },
];


