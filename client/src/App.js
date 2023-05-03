import { Home, Dashboard, Create } from './pages';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  // const [data, setData] = useState('');
  // const [category, setCategory] = useState('abc');

  // fetch data from server
  // useEffect(() => {
  //   fetch(`/api/quotes/${category}`)
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, [category]);

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
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
