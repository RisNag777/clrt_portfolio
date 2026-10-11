import { useEffect } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { course } from '../data/portfolio'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export function Layout() {
  return (
    <>
      <ScrollToTop />
      <header className="site-nav">
        <div className="container site-nav__inner">
          <NavLink to="/" className="site-nav__brand" end>
            {course.studentName.split(' ')[0]} · {course.shortTitle}
          </NavLink>
          <nav aria-label="Primary">
            <ul className="site-nav__links">
              <li>
                <NavLink to="/" end>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/artifacts">Artifacts</NavLink>
              </li>
              <li>
                <NavLink to="/grade">Grade</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="site-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container">
          <span>
            {course.studentName} - {course.courseCode} {course.shortTitle}, {course.term}
          </span>
          <span>Culturally and Linguistically Responsive Teaching-I</span>
        </div>
      </footer>
    </>
  )
}
