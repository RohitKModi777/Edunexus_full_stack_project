import { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(email, password);
      const params = new URLSearchParams(location.search);
      const next = params.get('next') || '/courses';
      navigate(next);
    } catch (err) {
      setError(err?.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="auth-wrap">
      <div className="auth-grid">
        <div className="auth-left">
          <h2 className="auth-title">Welcome back</h2>
          <p className="text-gray-600">Sign in to continue your learning journey.</p>
          <div className="auth-illustration">
            <img src="https://th.bing.com/th/id/OIP.ZVdjT86vcoz-86XUuSLpvAHaEK?w=316&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="Learning" />
          </div>
        </div>
        <div className="auth-right">
          <div className="card w-full max-w-md auth-card">
            <div className="card-body">
              <h3 className="text-xl font-semibold mb-4" style={{textAlign:'center'}}>Sign In</h3>
              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label className="label">Email</label>
                  <input className="input" value={email} onChange={(e) => setEmail(e.target.value)} type="email" required />
                </div>
                <div>
                  <label className="label">Password</label>
                  <input className="input" value={password} onChange={(e) => setPassword(e.target.value)} type="password" required />
                </div>
                {error && <p className="text-sm text-red-600">{error}</p>}
                <button type="submit" className="btn w-full">Login</button>
              </form>
              <p className="text-sm text-gray-600 mt-4" style={{textAlign:'center'}}>New here? <Link className="text-indigo-600" to="/register">Create account</Link></p>
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

