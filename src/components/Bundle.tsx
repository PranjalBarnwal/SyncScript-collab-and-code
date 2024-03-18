
import Navbar from './Navbar';
import Space from './Space';
export default function Bundle() {
  return (
    <div className='px-[5rem] h-full w-full'>
      <Navbar/>
      {/* <div className='h-[80vh] flex items-center justify-center'>
      <Home/>
      </div> */}
      <Space/>
    </div>
  );
}
