import '../styles/nav.css';

export default function Nav() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-snowWhite'>
      <div className='container-fluid py-1'>
        <a className='navbar-brand ml-200' href='/'>
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
              <a className='nav-link active' aria-current='page' href='/'>
                Home
              </a>
            </li>
            <li className='nav-item pr-32'>
              <a className='nav-link' href='/dashboard'>
                Dashboard
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/create'>
                Create
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
