import { Link, useLocation } from 'react-router-dom';
import '../styles/nav.css';

export default function Nav() {
  const location = useLocation();

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-snowWhite'>
      <div className='container-fluid py-1'>
        <a className='navbar-brand ml-200 fw-bold' href='/'>
          Quotable
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0 mr-200'>
            <li className='nav-item pr-32'>
              {location.pathname === '/' ? (
                <Link className='nav-link active' to='/'>
                  Home
                </Link>
              ) : (
                <Link className='nav-link' to='/'>
                  Home
                </Link>
              )}
            </li>
            <li className='nav-item pr-32'>
              {location.pathname === '/dashboard' ? (
                <Link className='nav-link active' to='/dashboard'>
                  Dashboard
                </Link>
              ) : (
                <Link className='nav-link' to='/dashboard'>
                  Dashboard
                </Link>
              )}
            </li>
            <li className='nav-item'>
              {location.pathname === '/create' ? (
                <Link className='nav-link active' to='/create'>
                  Create
                </Link>
              ) : (
                <Link className='nav-link' to='/create'>
                  Create
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
