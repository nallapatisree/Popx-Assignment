import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const INITIAL = {
  fullName: '',
  phone: '',
  email: '',
  password: '',
  company: '',
  isAgency: 'yes',
}

export default function Register() {
  const navigate = useNavigate()
  const [form, setForm] = useState(INITIAL)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    // Store user details in localStorage
    localStorage.setItem(
      'popx_user',
      JSON.stringify({
        fullName: form.fullName,
        email: form.email,
        phone: form.phone,
        company: form.company,
        isAgency: form.isAgency,
      })
    )
    navigate('/account')
  }

  const isReady =
    form.fullName.trim() &&
    form.phone.trim() &&
    form.email.trim() &&
    form.password.trim()

  return (
    <div className="page auth-page">
      <h1 className="auth-heading">
        Create your<br />PopX account
      </h1>

      <div className="auth-form">
        <div className="field-group">
          <label className="field-label" htmlFor="reg-name">
            Full Name<span style={{ color: '#6C3AFF' }}>*</span>
          </label>
          <input
            id="reg-name"
            className="field-input"
            type="text"
            name="fullName"
            placeholder="Marry Doe"
            value={form.fullName}
            onChange={handleChange}
          />
        </div>

        <div className="field-group">
          <label className="field-label" htmlFor="reg-phone">
            Phone number<span style={{ color: '#6C3AFF' }}>*</span>
          </label>
          <input
            id="reg-phone"
            className="field-input"
            type="tel"
            name="phone"
            placeholder="+91 98765 43210"
            value={form.phone}
            onChange={handleChange}
          />
        </div>

        <div className="field-group">
          <label className="field-label" htmlFor="reg-email">
            Email address<span style={{ color: '#6C3AFF' }}>*</span>
          </label>
          <input
            id="reg-email"
            className="field-input"
            type="email"
            name="email"
            placeholder="marry@example.com"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className="field-group">
          <label className="field-label" htmlFor="reg-password">
            Password<span style={{ color: '#6C3AFF' }}>*</span>
          </label>
          <input
            id="reg-password"
            className="field-input"
            type="password"
            name="password"
            placeholder="Create a password"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        <div className="field-group">
          <label className="field-label" htmlFor="reg-company">
            Company name
          </label>
          <input
            id="reg-company"
            className="field-input"
            type="text"
            name="company"
            placeholder="Your company"
            value={form.company}
            onChange={handleChange}
          />
        </div>

        <div className="field-group">
          <p className="radio-label">
            Are you an Agency?<span>*</span>
          </p>
          <div className="radio-group">
            <label className="radio-option">
              <input
                type="radio"
                name="isAgency"
                value="yes"
                checked={form.isAgency === 'yes'}
                onChange={handleChange}
              />
              Yes
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="isAgency"
                value="no"
                checked={form.isAgency === 'no'}
                onChange={handleChange}
              />
              No
            </label>
          </div>
        </div>

        <div className="form-footer">
          <button
            className="btn-primary"
            onClick={handleSubmit}
            disabled={!isReady}
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  )
}
