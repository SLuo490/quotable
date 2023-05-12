import { Home, Dashboard, Create, Edit } from './pages';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  // useEffect(() => {
  //   fetch(`/api/quotes`)
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/create' element={<Create />} />
            <Route path='/edit/' element={<Edit />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
