import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const [error, setError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await register({ name, email, password, role });
      navigate('/');
    } catch (err) {
      setError(err?.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="auth-wrap">
      <div className="auth-grid">
        <div className="auth-left">
          <h2 className="auth-title">Create your account</h2>
          <p className="text-gray-600">Join EduNexus and start teaching or learning today.</p>
          <div className="auth-illustration">
            <img src="https://th.bing.com/th/id/OIP.ZVdjT86vcoz-86XUuSLpvAHaEK?w=316&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="Instructor" />
          </div>
        </div>
        <div className="auth-right">
          <div className="card w-full max-w-md auth-card">
            <div className="card-body">
              <h3 className="text-xl font-semibold mb-4" style={{textAlign:'center'}}>Create an account</h3>
              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label className="label">Name</label>
                  <input className="input" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                  <label className="label">Email</label>
                  <input className="input" value={email} onChange={(e) => setEmail(e.target.value)} type="email" required />
                </div>
                <div>
                  <label className="label">Password</label>
                  <input className="input" value={password} onChange={(e) => setPassword(e.target.value)} type="password" required />
                </div>
                <div>
                  <label className="label">Role</label>
                  <select className="input" value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="student">Student</option>
                    <option value="instructor">Instructor</option>
                  </select>
                </div>
                {error && <p className="text-sm text-red-600">{error}</p>}
                <button type="submit" className="btn w-full">Register</button>
              </form>
              <p className="text-sm text-gray-600 mt-4" style={{textAlign:'center'}}>Already have an account? <Link className="text-indigo-600" to="/login">Sign in</Link></p>
            </div>
          </div>
        </div>
      </div>
      <div className="blob b1" />
      <div className="blob b2" />
      <div className="blob b3" />
    </div>
  );
}

