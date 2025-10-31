import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../lib/api';

export default function InstructorSubmissions() {
  const { assignmentId } = useParams();
  const [subs, setSubs] = useState([]);
  const [saving, setSaving] = useState(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const load = async () => {
    setError('');
    try {
      const r = await api.get(`/assignments/submissions/${assignmentId}`);
      setSubs(r.data.submissions);
    } catch (err) {
      setError(err?.response?.data?.message || 'Failed to load submissions');
    }
  };
  useEffect(() => { load(); }, [assignmentId]);

  const grade = async (id, gradeVal, feedbackVal) => {
    setSaving(id);
    setMessage('');
    try {
      const payload = { grade: Number(gradeVal), feedback: feedbackVal };
      await api.post(`/assignments/grade/${id}`, payload);
      await load();
      setMessage('Grade saved');
    } catch (err) {
      setError(err?.response?.data?.message || 'Failed to save grade');
    } finally {
      setSaving(null);
    }
  };

  return (
    <div className="space-y-6 no-anim">
      <h1 className="text-2xl font-bold">Submissions</h1>
      {message && <div className="text-sm text-green-700">{message}</div>}
      {error && <div className="text-sm text-red-600">{error}</div>}
      <div className="space-y-3">
        {subs.map((s) => (
          <SubmissionRow key={s._id} sub={s} onGrade={grade} saving={saving === s._id} />
        ))}
        {subs.length === 0 && <div className="text-sm text-gray-500">No submissions yet.</div>}
      </div>
    </div>
  );
}

function SubmissionRow({ sub, onGrade, saving }) {
  const [gradeVal, setGradeVal] = useState(sub.grade ?? '');
  const [feedbackVal, setFeedbackVal] = useState(sub.feedback ?? '');
  const handleSave = () => {
    if (Number(gradeVal) > 10) {
      alert('Grade must be at most 10.');
      return;
    }
    onGrade(sub._id, gradeVal, feedbackVal).then(() => {
      // no-op; parent shows message
    });
  };
  return (
    <div className="card">
      <div className="card-body grid sm:grid-cols-5 gap-3 items-center">
        <div className="sm:col-span-1">
          <div className="font-semibold">{sub.student?.name}</div>
          <div className="text-xs text-gray-500">{sub.student?.email}</div>
          <a className="text-xs text-indigo-600" href={sub.fileUrl} target="_blank" rel="noreferrer">View Submission</a>
        </div>
        <div className="sm:col-span-1">
          <label className="label">Grade</label>
          <input className="input" type="number" value={gradeVal} onChange={(e) => setGradeVal(e.target.value)} max={10} min={0} />
        </div>
        <div className="sm:col-span-3">
          <label className="label">Feedback</label>
          <input className="input" value={feedbackVal} onChange={(e) => setFeedbackVal(e.target.value)} />
        </div>
        <div className="sm:col-span-5">
          <button className="btn" disabled={saving} onClick={handleSave}>{saving ? 'Saving...' : 'Save Grade'}</button>
        </div>
      </div>
    </div>
  );
}

