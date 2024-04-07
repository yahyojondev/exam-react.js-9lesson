import React, { memo, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { IoStarSharp } from "react-icons/io5";

let API_URL = "https://fakestoreapi.com/products";

function SingleRoute() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [count, setcount] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_URL}/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
  if (loading) {
    return <h2>loading....</h2>;
  }
  return (
    <div className="singleRoute">
      <div className="container">
        <div className="singleRooute__wrapper">
          <div className="singleRoute__wrapper__left">
            <div className="singleRoute__wrapper__left__top">
              <div className="single__wrapper__left__top__left">
                <div className="single__wrapper__left__top__left__img__wrapper">
                  <img
                    src={product?.image}
                    alt=""
                    className="singleRoute__img"
                  />
                </div>
                <div className="singleRoutes__wrapper__top__left__images">
                  <img src={product?.image} alt="" />
                  <img src={product?.image} alt="" />
                  <img src={product?.image} alt="" />
                  <img src={product?.image} alt="" />
                </div>
              </div>
              <div className="single__wrapper__left__top__right">
                <button className="single__wrapper__top__right__btn">
                  Sale off
                </button>
                <h1 className="single_wrapper__top__right__title">
                  {product?.title}
                </h1>
                <div className="single__top__right__wrapper">
                  <IoStarSharp />
                  <p className="rewiev__count">({product?.rating.count})</p>
                </div>
                <div className="single__price__wrapper">
                  <p className="single__price">${product?.price}</p>
                  <del className="single__pricedel">${product?.price * 2}</del>
                </div>
                <p className="single__top__left__description">
                  {product?.description}
                </p>
                <p className="single__top__left__category">
                  category:{product?.category}
                </p>
              </div>
            </div>
          </div>
          <div className="singleRoute__wrapper__right"></div>
        </div>
      </div>
    </div>
  );
}

export default SingleRoute;
