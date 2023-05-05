import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div>
      <Nav />
      <div className='d-flex'>
        <div className=''>
          <Sidebar />
        </div>
        <div className=''>
          <h1>Content</h1>
        </div>
      </div>
    </div>
  );
}
