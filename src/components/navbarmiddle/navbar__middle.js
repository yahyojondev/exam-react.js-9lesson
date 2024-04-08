import React, { memo } from "react";
import { CiSearch } from "react-icons/ci";
import { SlLocationPin } from "react-icons/sl";
import circle from "../../assets/images/navbarcircle.svg";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import navbarlogo from "../../assets/images/navbarlogo.svg";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

function navbar__middle() {
  return (
    <div className="navbar__middle">
      <div className="container">
        <div className="navbar__middle__wrapper">
          <div className="navbar__logos">
            <img src={navbarlogo} alt="" />
            <div className="navbar__logos__wrapper">
              <h3 className="navbar__logo__title">Nest</h3>
              <p className="navbar__logo__text">Mart & Grocery</p>
            </div>
          </div>
          <div className="navbar__search__wrapper">
            <select name="" id="">
              <option value="">All Categories</option>
            </select>
            <div className="navbar__forms">
              <input
                type="text"
                placeholder="Search for items"
                className="navbar__search__input"
              />
              <CiSearch className="navbar__search__svg" />
            </div>
          </div>
          <div className="navbar__location__wrapper">
            <SlLocationPin className="navbar__location__svg" />
            <select name="" id="">
              <option value="">Your location</option>
              <option value="">badamzar</option>
            </select>
          </div>
          <ul className="navbar__middle__list">
            <li className="navbar__middle__list__item">
              <img className="navbar__middle__list__img" src={circle} alt="" />
              <span className="navbar__middle__item__text">Compare</span>
            </li>
            <li className="navbar__middle__list__item">
              <IoIosHeartEmpty className="navbar__middle__list__svg" />
              <span className="navbar__middle__item__text">Wishlist</span>
            </li>
            <li className="navbar__middle__list__item">
              <MdOutlineShoppingCart className="navbar__middle__list__svg" />
              <span className="navbar__middle__item__text">Cart</span>
            </li>
            <li className="navbar__middle__list__item">
              <NavLink to="/login">
                <IoPersonOutline className="navbar__middle__list__svg" />
                <span className="navbar__middle__item__text">Account</span>
              </NavLink>
            </li>
          </ul>
          <GiHamburgerMenu className="navbar__middle__svg" />
        </div>
      </div>
    </div>
  );
}

export default memo(navbar__middle);
