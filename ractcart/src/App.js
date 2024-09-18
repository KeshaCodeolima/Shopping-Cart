import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AddItems from "./Components/Pages/AddItems";
import HomePage from "./Components/Pages/HomePage";


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/additem" element={<AddItems/>} />
      </Routes>
    </div>
    
  );
}

export default App;
