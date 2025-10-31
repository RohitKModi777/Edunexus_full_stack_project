import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../lib/api';

function LiveManager() {
  const { id } = useParams();
  const [sessions, setSessions] = useState([]);
  const [title, setTitle] = useState('');
  const [startAt, setStartAt] = useState('');
  const [meetUrl, setMeetUrl] = useState('');
  const [error, setError] = useState('');

  const toLocalInputValue = (d) => {
    const pad = (n) => String(n).padStart(2, '0');
    const yyyy = d.getFullYear();
    const mm = pad(d.getMonth() + 1);
    const dd = pad(d.getDate());
    const hh = pad(d.getHours());
    const mi = pad(d.getMinutes());
    return `${yyyy}-${mm}-${dd}T${hh}:${mi}`;
  };
  const minStart = toLocalInputValue(new Date(Date.now() + 5 * 60 * 1000));

  const load = async () => {
    setError('');
    try {
      const r = await api.get(`/live/${id}`);
      setSessions(r.data.sessions);
    } catch (err) {
      const status = err?.response?.status;
      if (status === 401) setError('Please sign in as instructor/admin to manage live sessions.');
      else if (status === 403) setError('You do not have permission for this course.');
      else setError(err?.response?.data?.message || 'Failed to load sessions.');
    }
  };
  useEffect(() => { load(); }, [id]);

  const schedule = async () => {
    if (!title || !title.trim()) { alert('Please enter a title.'); return; }
    if (!startAt || !startAt.trim()) { alert('Please select a start date & time.'); return; }
    // Normalize to a valid Date
    const when = new Date(startAt);
    if (Number.isNaN(when.getTime())) { alert('Please select a valid date & time.'); return; }
    if (when.getTime() < Date.now() + 60 * 1000) { alert('Start time must be in the future.'); return; }
    const payload = { title, startAt: when };
    if (meetUrl && /^https?:\/\//i.test(meetUrl)) payload.meetUrl = meetUrl;
    try {
      const res = await api.post(`/live/${id}`, payload);
      setTitle(''); setStartAt(''); setMeetUrl('');
      await load();
      alert(`Scheduled. Link: ${res.data.session.meetUrl}`);
    } catch (err) {
      const status = err?.response?.status;
      if (status === 401) {
        alert('Please sign in to schedule sessions.');
        return;
      }
      alert(err?.response?.data?.message || 'Failed to schedule session');
    }
  };

  const cancel = async (sessionId) => {
    await api.delete(`/live/${sessionId}`);
    load();
    alert('Cancelled');
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Live Sessions</h1>
      <div className="card">
        <div className="card-body grid sm:grid-cols-3 gap-3">
          <div>
            <label className="label">Title</label>
            <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div>
            <label className="label">Start At</label>
            <input className="input" type="datetime-local" value={startAt} onChange={(e) => setStartAt(e.target.value)} min={minStart} placeholder={minStart} />
          </div>
          <div>
            <label className="label">Google Meet Link (optional)</label>
            <input className="input" placeholder="https://meet.google.com/..." value={meetUrl} onChange={(e) => setMeetUrl(e.target.value)} />
            <a className="btn-secondary inline-block mt-2 text-sm" href="https://meet.google.com/new" target="_blank" rel="noreferrer">Generate new meet link</a>
          </div>
          
          <div className="sm:col-span-3">
            <button className="btn" onClick={schedule}>Schedule</button>
          </div>
        </div>
      </div>

      {error && <div className="text-sm text-red-600">{error}</div>}
      <div className="space-y-3">
        {sessions.map((s) => (
          <div key={s._id} className="card">
            <div className="card-body flex items-center justify-between">
              <div>
                <div className="font-semibold">{s.title}</div>
                <div className="text-xs text-gray-500">{new Date(s.startAt).toLocaleString()}</div>
                <a className="text-xs text-indigo-600" href={s.meetUrl} target="_blank" rel="noreferrer">Open Link</a>
              </div>
              <button className="btn-secondary" onClick={() => cancel(s._id)}>Cancel</button>
            </div>
          </div>
        ))}
        {sessions.length === 0 && <div className="text-sm text-gray-500">No scheduled sessions.</div>}
      </div>
    </div>
  );
}

export default LiveManager;

