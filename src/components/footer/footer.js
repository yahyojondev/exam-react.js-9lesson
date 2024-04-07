import React, { memo } from "react";
import footerlogo from "../../assets/images/navbarlogo.svg";
import { FaLocationDot } from "react-icons/fa6";
import { SlEarphonesAlt } from "react-icons/sl";
import { LiaTelegramPlane } from "react-icons/lia";
import { BiTimer } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import itemimg1 from "../../assets/images/footerplaymarket.jpg";
import itemimg2 from "../../assets/images/footerplayapp.jpg";
import itemimg3 from "../../assets/images/footerfullimg.png";
import { FaPhone } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import { TbBrandPicsart } from "react-icons/tb";

function footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__wrapper__top">
            <div className="footer__wrapper__top__left">
              <div className="top__left__one">
                <ul className="footer__wrapper__top__left__top__list">
                  <li className="footer__wrapper__top__left__item">
                    <img
                      src={footerlogo}
                      alt="logo"
                      className="footer__wrapper__top__left__img"
                    />
                    <div className="footer__wrapper__top__left__text__wrapper">
                      <h2 className="footer__wrapper__top__left__title">
                        Nest
                      </h2>
                      <p className="footer__wrapper__top__left__text">
                        Mart & Grocery
                      </p>
                    </div>
                  </li>
                  <li className="footer__wrapper__top__left__item">
                    Awesome grocery store website template
                  </li>
                </ul>
                <ul className="footer__wrapper__top__left__bottom__list">
                  <li className="footer__wrapper__top__left__bottom__item">
                    <FaLocationDot />
                    <NavLink className="footer__wrapper__top__left__link">
                      <span>Address:</span>
                      Awesome grocery store website template
                    </NavLink>
                  </li>
                  <li className="footer__wrapper__top__left__bottom__item">
                    <SlEarphonesAlt />
                    <NavLink className="footer__wrapper__top__left__link">
                      <span>Call Us:</span>
                      (+91) - 540-025-124553
                    </NavLink>
                  </li>
                  <li className="footer__wrapper__top__left__bottom__item">
                    <LiaTelegramPlane />
                    <NavLink className="footer__wrapper__top__left__link">
                      <span>Email:</span>
                      sale@Nest.com
                    </NavLink>
                  </li>
                  <li className="footer__wrapper__top__left__bottom__item">
                    <BiTimer />
                    <NavLink className="footer__wrapper__top__left__link">
                      <span>Hours</span>
                      10:00 - 18:00, Mon - Sat
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="top__left__two">
                <p className="footer__wrapper__top__right__text">Company</p>
                <ul className="footer__wrapper__top__right__list">
                  <li className="footer__wrapper__top__right__item">
                    <NavLink className="footer__wrapper__top__right__link">
                      About Us
                    </NavLink>
                  </li>
                  <li className="footer__wrapper__top__right__item">
                    <NavLink className="footer__wrapper__top__right__link">
                      Delivery Information
                    </NavLink>
                  </li>
                  <li className="footer__wrapper__top__right__item">
                    <NavLink className="footer__wrapper__top__right__link">
                      Privacy Policy
                    </NavLink>
                  </li>
                  <li className="footer__wrapper__top__right__item">
                    <NavLink className="footer__wrapper__top__right__link">
                      Terms & Conditions
                    </NavLink>
                  </li>
                  <li className="footer__wrapper__top__right__item">
                    <NavLink className="footer__wrapper__top__right__link">
                      Contact Us
                    </NavLink>
                  </li>
                  <li className="footer__wrapper__top__right__item">
                    <NavLink className="footer__wrapper__top__right__link">
                      Support Center
                    </NavLink>
                  </li>
                  <li className="footer__wrapper__top__right__item">
                    <NavLink className="footer__wrapper__top__right__link">
                      Careers
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <ul className="footer__wrapper__top__right">
              <li className="footer__wrapper__top__right__item">
                <h3 className="footer__wrapper__top__right__item__title">
                  Account
                </h3>
                <ul className="footer__wrapper__top__right__item__list">
                  <li className="footer__wrapper__right__item__list__item">
                    <NavLink>Sign In</NavLink>
                  </li>
                  <li className="footer__wrapper__right__item__list__item">
                    <NavLink>View Cart</NavLink>
                  </li>
                  <li className="footer__wrapper__right__item__list__item">
                    <NavLink>My Wishlist</NavLink>
                  </li>
                  <li className="footer__wrapper__right__item__list__item">
                    <NavLink>Track My Order</NavLink>
                  </li>
                  <li className="footer__wrapper__right__item__list__item">
                    <NavLink>Help Ticket</NavLink>
                  </li>
                  <li className="footer__wrapper__right__item__list__item">
                    <NavLink>Shipping Details</NavLink>
                  </li>
                  <li className="footer__wrapper__right__item__list__item">
                    <NavLink>Compare products</NavLink>
                  </li>
                </ul>
              </li>
              <li className="footer__wrapper__top__right__item">
                <h3 className="footer__wrapper__top__right__item__title">
                  Corporate
                </h3>
                <ul className="footer__wrapper__top__right__item__list">
                  <li className="footer__wrapper__right__item__list__item">
                    <NavLink>Become a Vendor</NavLink>
                  </li>
                  <li className="footer__wrapper__right__item__list__item">
                    <NavLink>Affiliate Program</NavLink>
                  </li>
                  <li className="footer__wrapper__right__item__list__item">
                    <NavLink>Farm Business</NavLink>
                  </li>
                  <li className="footer__wrapper__right__item__list__item">
                    <NavLink>Farm Careers</NavLink>
                  </li>
                  <li className="footer__wrapper__right__item__list__item">
                    <NavLink>Our Suppliers</NavLink>
                  </li>
                  <li className="footer__wrapper__right__item__list__item">
                    <NavLink>Accessibility</NavLink>
                  </li>
                  <li className="footer__wrapper__right__item__list__item">
                    <NavLink>Promotions</NavLink>
                  </li>
                </ul>
              </li>
              <li className="footer__wrapper__top__right__item">
                <h3 className="footer__wrapper__top__right__item__title">
                  Popular
                </h3>
                <ul className="footer__wrapper__top__right__item__list">
                  <li className="footer__wrapper__right__item__list__item">
                    <NavLink>Milk & Flavoured Milk</NavLink>
                  </li>
                  <li className="footer__wrapper__right__item__list__item">
                    <NavLink>Butter and Margarine</NavLink>
                  </li>
                  <li className="footer__wrapper__right__item__list__item">
                    <NavLink>Eggs Substitutes</NavLink>
                  </li>
                  <li className="footer__wrapper__right__item__list__item">
                    <NavLink>Marmalades</NavLink>
                  </li>
                  <li className="footer__wrapper__right__item__list__item">
                    <NavLink>Sour Cream and Dips</NavLink>
                  </li>
                  <li className="footer__wrapper__right__item__list__item">
                    <NavLink>Tea & Kombucha</NavLink>
                  </li>
                  <li className="footer__wrapper__right__item__list__item">
                    <NavLink>Cheese</NavLink>
                  </li>
                </ul>
              </li>
              <li className="footer__wrapper__top__right__item">
                <h3 className="footer__wrapper__top__right__item__title">
                  Install App
                </h3>
                <ul className="footer__wrapper__top__right__item__list">
                  <li className="footer__wrapper__right__item__list__item">
                    <NavLink>From App Store or Google Play</NavLink>
                  </li>
                  <li className="footer__wrapper__right__item__list__item">
                    <NavLink>
                      <img
                        src={itemimg1}
                        alt=""
                        className="footer__wrapper__right__item__img"
                      />
                      <img
                        src={itemimg2}
                        alt=""
                        className="footer__wrapper__right__item__img"
                      />
                    </NavLink>
                  </li>
                  <li className="footer__wrapper__right__item__list__item">
                    <NavLink>Secured Payment Gateways</NavLink>
                  </li>
                  <li className="footer__wrapper__right__item__list__item">
                    <NavLink>
                      <img
                        src={itemimg3}
                        alt=""
                        className="footer__wrapper__right__item__imgfull"
                      />
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <hr className="footer__line" />
          <div className="footer__wrapper__bottom">
            <ul className="footer__bottom__list">
              <li className="footer__bottom__list__item item__left">
                © 2022, <span>Nest</span> - HTML Ecommerce Template All rights
                reserved
              </li>
              <li className="footer__bottom__list__item item__center">
                <div className="footer__bottom__list__item__center">
                  <FaPhone />
                  <div className="footer__bottom__list__item__text__wrapper">
                    <NavLink className=" footer__bottom__list__item__text__one">
                      1900 - 6666
                    </NavLink>
                    <NavLink className="footer__bottom__list__item__text__two">
                      Working 8:00 - 22:00
                    </NavLink>
                  </div>
                </div>
                <div className="footer__bottom__list__item__center">
                  <FaPhone />
                  <div className="footer__bottom__list__item__text__wrapper">
                    <NavLink className=" footer__bottom__list__item__text__one">
                      1900 - 6666
                    </NavLink>
                    <NavLink className="footer__bottom__list__item__text__two">
                      Working 8:00 - 22:00
                    </NavLink>
                  </div>
                </div>
              </li>
              <li className="footer__bottom__list__item item__right">
                <div className="footer__bottom__text__img">
                  <p className="footer__bottom__text__img__text">Follow Us</p>
                  <div className="footer__bottom__images">
                    <div>
                      <FaFacebookF />
                    </div>
                    <div>
                      <FaTwitter />
                    </div>
                    <div>
                      <FaInstagram />
                    </div>
                    <div>
                      <CiYoutube />
                    </div>
                    <div>
                      <TbBrandPicsart />
                    </div>
                  </div>
                </div>
                <p className="footer__bottom__text">
                  Up to 15% discount on your first subscribe
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(footer);
