import { useEffect, useState } from 'react'

// Camera icon as inline SVG
function CameraIcon() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z"/>
      <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
    </svg>
  )
}

export default function Account() {
  const [user, setUser] = useState({ fullName: '', email: '' })

  useEffect(() => {
    const stored = localStorage.getItem('popx_user')
    if (stored) {
      const parsed = JSON.parse(stored)
      setUser({ fullName: parsed.fullName || '', email: parsed.email || '' })
    }
  }, [])

  // Get initials for avatar placeholder
  const initials = user.fullName
    ? user.fullName
        .split(' ')
        .map((n) => n[0])
        .slice(0, 2)
        .join('')
        .toUpperCase()
    : 'MD'

  const displayName = user.fullName || 'Marry Doe'
  const displayEmail = user.email || 'Marry@Gmail.Com'

  return (
    <div className="page account-page">
      <div className="account-header">
        <h2 className="account-title">Account Settings</h2>

        <div className="account-profile-row">
          <div className="avatar-wrapper">
            <div className="avatar-placeholder">{initials}</div>
            <div className="avatar-camera">
              <CameraIcon />
            </div>
          </div>

          <div className="account-info">
            <p className="account-name">{displayName}</p>
            <p className="account-email">{displayEmail}</p>
          </div>
        </div>
      </div>

      <div className="account-divider" />

      <div className="account-body">
        <p className="account-bio">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing
          Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut
          Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>

      <div className="account-divider" />
    </div>
  )
}
