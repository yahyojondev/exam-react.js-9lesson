import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Routers } from "./static/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/navigation";
import Home from "./Pages/home/Home";
import Footer from "./components/footer/footer";
import Admin from "./Pages/admin/Admin";
import Auth from "./Pages/auth/Auth";
import Login from "./Pages/login/Login";
import Navbar from "./components/navbar/Navbar";
import SingleRoute from "./Pages/singleRoute/SingleRoute";
// import Navigate from "./components/navigate/Navigate";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Navigate /> */}
      <Routes>
        {Routers?.map((el) => (
          <Route key={el.id} path={el.path} element={el.element} />
        ))}
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<SingleRoute />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Auth />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
