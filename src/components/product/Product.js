import React, { memo, useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { productimg, products } from "../../static";
import axios from "axios";
import { LiaStarSolid } from "react-icons/lia";
import { IoCartOutline } from "react-icons/io5";

let API_URL = "https://fakestoreapi.com/products";

function Product() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(API_URL)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <h2 className="loading">loading...</h2>;
  }

  let productdata = data?.map((el) => (
    <div key={el.id} className="product__card">
      <Link to={`/product/${el.id}`}>
        <img
          src={productimg[el.id - 1]?.link}
          alt=""
          className="product__img"
        />
      </Link>
      <div className="product__card__content">
        <h3 className="product__card__title">{el.title}</h3>
        <p className="product__card__category">By {el.category}</p>
        <div className="product__card__rating__wrapper">
          <LiaStarSolid className="product__card__rating__stars" />
          <p className="product__card__rating">({el.rating.rate})</p>
        </div>
        <div className="product__card__btn__price">
          <p className="product__card__price">
            ${el.price}
            <del>${el.price * 2}</del>
          </p>
          <button className="product__card__add">
            <IoCartOutline />
            Add
          </button>
        </div>
      </div>
    </div>
  ));
  let productitem = products?.map((el) => (
    <li key={el.id} className="product__item">
      <NavLink className="product__link">{el.link}</NavLink>
    </li>
  ));
  return (
    <div className="Product">
      <div className="container">
        <div className="product__wrapper">
          <div className="product__wrapper__top">
            <h2 className="product__wrapper__title">Popular Products</h2>
            <ul className="product__wrapper__list">{productitem}</ul>
          </div>
          <div className="product__wrapper__bottom">{productdata}</div>
        </div>
      </div>
    </div>
  );
}

export default Product;
