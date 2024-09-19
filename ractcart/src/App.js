import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AddItems from "./Components/Pages/AddItems";
import HomePage from "./Components/Pages/HomePage";
import Register from "./Components/Pages/Register";
import SigninPage from "./Components/Pages/SigninPage";


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/additem" element={<AddItems/>} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/signin" element={<SigninPage/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
