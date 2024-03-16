import Bundle from "./components/Navbar";
import waves from "./assets/waves.png";
import Home from "./components/Home";

function App() {
  return (
    <div className="h-screen w-screen bg-gradient-to-br from-gradient1 to-gradient2">
       <img src={waves} alt="Background" className="absolute object-cover w-full h-full opacity-[1%]" />
      <Bundle/>
      {/* <Home/> */}
    </div>
  );
}

export default App;
