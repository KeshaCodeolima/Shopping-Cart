import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AddItems from "./Components/Pages/AddItems";
import HomePage from "./Components/Pages/HomePage";
import Register from "./Components/Pages/Register";
import SigninPage from "./Components/Pages/SigninPage";
import { Provider } from "react-redux";
import Store from "./Components/Store/Store";
import Cart from "./Components/Store/Cart";
import Footer from "./Components/Footer";


function App() {
  return (
    <div>
      <Provider store={Store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/additem" element={<AddItems />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
        <Footer/>
      </Provider>
    </div>

  );
}

export default App;
