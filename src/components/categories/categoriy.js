import React, { memo } from "react";
import { categoryproduct } from "../../static/Router";
import { cardsproduct } from "../../static/Router";
import { NavLink } from "react-router-dom";
import { boxproduct } from "../../static/Router";

function categoriy() {
  let categoryitem = categoryproduct?.map((el) => (
    <li key={el.id} className="category__list__item ">
      <NavLink className={el.class}>{el.title}</NavLink>
    </li>
  ));
  let carditem = cardsproduct?.map((el) => (
    <div
      key={el.id}
      style={{ backgroundColor: `${el.bg}` }}
      className="category__cards__card"
    >
      <img className="category__card__img" src={el.img} alt="" />
      <div className="card__text__wrapper">
        <h4 className="category__card__title">{el.title}</h4>
        <p className="category__card__text">{el.text}</p>
      </div>
    </div>
  ));
  let boxitem = boxproduct?.map((el) => (
    <div
      key={el.id}
      style={{
        background: `url(${el.bg}) no-repeat center`,
        backgroundSize: "contain",
      }}
      className="box"
    >
      <h3 className="box__title">{el.title}</h3>
      <button className="box__btn">{el.btn}</button>
    </div>
  ));

  return (
    <div className="categoriy">
      <div className="container">
        <div className="category__wrapper">
          <ul className="category__list">{categoryitem}</ul>
          <div className="category__cards">{carditem}</div>
          <div className="boxs">{boxitem}</div>
        </div>
      </div>
    </div>
  );
}

export default memo(categoriy);
