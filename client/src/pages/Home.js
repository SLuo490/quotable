import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div>
      <Nav />
      <div className='row'>
        <div className='col-sm'>
          <Sidebar />
        </div>
        <div className='col-sm'>
          <h1>Content</h1>
        </div>
      </div>
    </div>
  );
}
