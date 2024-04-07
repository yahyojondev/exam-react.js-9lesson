import React, { memo } from "react";
import adminmap from "../../assets/images/admin.map.png";
import { IoLocationOutline } from "react-icons/io5";
import { mapproduct } from "../../static/Router";
import Confetti from "react-confetti";
import adminformsimg from "../../assets/images/formsimg.png";
import adminsectionimg from "../../assets/images/adminsectionimg.png";

function Admin() {
  let mapitem = mapproduct?.map((el) => (
    <div key={el.id} className="map__card">
      <h4 className="map__card__title">{el.title}</h4>
      <ul className="map__card__list">
        <li className="map__card__list__item">{el.link1}</li>
        <li className="map__card__list__item">{el.link2}</li>
        <li className="map__card__list__item">{el.link3}</li>
        <li className="map__card__list__item">{el.link4}</li>
      </ul>
      <button className="map__card__btn">
        <IoLocationOutline />
        {el.btn}
      </button>
    </div>
  ));
  return (
    <div className="Admin">
      <Confetti width={window.innerWidth - 100} />
      <div className="container">
        <div className="container__login">
          <div className="admin__wrapper">
            <h3 className="admin__title">How can help you?</h3>
            <div className="admin__cards">
              <div className="admin__cards__card card__one">
                <h1 className="admin__cards__card__title title__one">
                  Adimin panel
                </h1>
                <p className="admin__cards__card__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
                <p className="admin__cards__card__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
              <div className="admin__cards__card ">
                <h3 className="admin__cards__card__title">Adimin panel</h3>
                <p className="admin__cards__card__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
                <h3 className="admin__cards__card__title title__three">
                  Adimin panel
                </h3>
                <p className="admin__cards__card__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
              <div className="admin__cards__card">
                <h3 className="admin__cards__card__title">Adimin panel</h3>
                <p className="admin__cards__card__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
                <h3 className="admin__cards__card__title">Adimin panel</h3>
                <p className="admin__cards__card__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="admin__map">
          <img src={adminmap} className="admin__map__img" />
        </div>
        <div className="container__login">
          <div className="map__cards">{mapitem}</div>
          <div className="admin__forms">
            <div className="admin__forms__left">
              <h3 className="admin__forms__left__title__little">
                Contact form
              </h3>
              <h2 className="admin__forms__left__title">Drop Us a Line</h2>
              <p className="admin__forms__left__text">
                Your email address will not be published. Required fields are
                marked *
              </p>
              <form>
                <div className="input__forms">
                  <input placeholder="First Name" type="text" />
                  <input placeholder="Your Email" type="text" />
                  <input placeholder="Your phone" type="number" />
                  <input placeholder="Subject" type="text" />
                </div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button className="admin__forms__btn">Send message</button>
              </form>
            </div>
            <img src={adminformsimg} alt="" className="admin__froms__right" />
          </div>
        </div>
        <section id="tovar">
          <div className="container">
            <div className="hero__carousel__swipper__two admin__swipper__wrapper">
              <div className="carousel__wrapper">
                <h1 className="hero__carousel__title">
                  Fresh Vegetables Big discount
                </h1>
                <p className="hero__carousel__text">
                  Save up to 50% off on your first order
                </p>
                <form action="" className="input__btn">
                  <input type="text" placeholder="Your email address" />
                  <button className="hero__carousel__btn admin__swipper__btn">
                    Subscribe
                  </button>
                </form>
              </div>
              <img
                src={adminsectionimg}
                alt=""
                className="hero__carousel__images admin__swipper__img"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default memo(Admin);
