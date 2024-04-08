import React from "react";
import Hero from "../../components/hero/Hero";
import Categoriy from "../../components/categories/categoriy";
import Product from "../../components/product/Product";
import heroimg from "../../assets/images/heocarouselimages.png";
import { manycardproduct } from "../../static";

function Home() {
  return (
    <div>
      <Hero />
      <Categoriy />
      <Product />
      <section id="tovar">
        <div className="container">
          <div className="hero__carousel__swipper__two">
            <div className="carousel__wrapper">
              <h1 className="hero__carousel__title">
                Fresh Vegetables Big discount
              </h1>
              <p className="hero__carousel__text">
                Save up to 50% off on your first order
              </p>
              <form action="" className="input__btn">
                <input type="text" placeholder="Your email address" />
                <button className="hero__carousel__btn">Subscribe</button>
              </form>
            </div>
            <img src={heroimg} alt="" className="hero__carousel__images" />
          </div>
        </div>
      </section>
      <section className="many__cards">
        <div className="container">
          <div className="many__cards__wrapper">
            {manycardproduct?.map((el) => (
              <div key={el.id} className="many__card">
                <img src={el.img} alt="" className="many__card__img" />
                <div className="many__card__text__wrapper">
                  <h5 className="many__card__title">{el.title}</h5>
                  <p className="many__card__text">{el.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
