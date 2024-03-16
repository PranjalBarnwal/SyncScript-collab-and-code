import Home from './Home';
import Navbar from './Navbar';

export default function Bundle() {
  return (
    <div>
      <Navbar/>
      <div className='h-[80vh] flex items-center justify-center'>
      <Home/>
      </div>
      
    </div>
  );
}
