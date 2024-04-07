import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import loginlogo from "../../assets/images/navbarlogo.svg";
import { FaRegEye } from "react-icons/fa";

const API_URL = "https://fakestoreapi.com/auth/login";

function Login() {
  const [username, setUsername] = useState("johnd");
  const [password, setPassword] = useState("m38rmF$");
  const navigate = useNavigate();
  const [see, setSee] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = { username, password };
    axios
      .post(API_URL, user)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        toast.success("Welcome to Admin panel");
        navigate("/admin");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Ma'lumot yoki password xato");
      });
  };
  return (
    <div className="login">
      <div className="container">
        <div className="login__wrapper">
          <div className="login__title__wrapper">
            <img src={loginlogo} alt="" />
            <div className="login__title__text">
              <h2 className="login__title">Nest</h2>
              <p className="login__text">Mart & Grocery</p>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input__wrapper">
              <p className="input__wrapper__text">Email Address*</p>
              <input
                className="input__wrapper__input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                required
              />
            </div>
            <div className="input__wrapper">
              <p className="input__wrapper__text">Password*</p>
              <div className="input__wrapper__password__wrapper">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  required
                />
                <FaRegEye />
              </div>
            </div>
            <ul className="login__forgot__list">
              <li className="login__forgot__list__item__one">
                <span></span>
                Remember Me
              </li>
              <li className="login__forgot__list__item__two">
                Forgot Password?
              </li>
            </ul>
            <div className="login__btn__wrapper">
              <button>submit</button>
              <NavLink className="login__wrapper__signup">Sign up?</NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
