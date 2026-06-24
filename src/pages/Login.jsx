import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleLogin = () => {
    // In a real app, validate credentials here
    // For this demo, navigate directly to Account Settings
    navigate('/account')
  }

  const isReady = form.email.trim() && form.password.trim()

  return (
    <div className="page auth-page">
      <h1 className="auth-heading">
        Signin to your<br />PopX account
      </h1>
      <p className="auth-subtext">
        Lorem ipsum dolor sit amet,<br />
        consectetur adipiscing elit,
      </p>

      <div className="auth-form">
        <div className="field-group">
          <label className="field-label" htmlFor="login-email">Email Address</label>
          <input
            id="login-email"
            className="field-input"
            type="email"
            name="email"
            placeholder="Enter email address"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className="field-group">
          <label className="field-label" htmlFor="login-password">Password</label>
          <input
            id="login-password"
            className="field-input"
            type="password"
            name="password"
            placeholder="Enter password"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        <div className="form-footer">
          <button
            className="btn-primary"
            onClick={handleLogin}
            disabled={!isReady}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}
