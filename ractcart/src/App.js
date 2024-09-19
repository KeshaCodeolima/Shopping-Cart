import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AddItems from "./Components/Pages/AddItems";
import HomePage from "./Components/Pages/HomePage";
import Register from "./Components/Pages/Register";


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/additem" element={<AddItems/>} />
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
