import React, { memo, useState, useEffect } from "react";
import { useParams, Link, NavLink } from "react-router-dom";
import axios from "axios";
import { IoStarSharp } from "react-icons/io5";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

let API_URL = "https://fakestoreapi.com/products";

function SingleRoute() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [count, setcount] = useState(1);
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState(false);

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
                <button className="single__wrapper__left__top__right__btn">
                  Sale off
                </button>
                <h1 className="single__wrapper__left__top__right__title">
                  {product?.title}
                </h1>
                <div className="single__top__right__wrapper">
                  <IoStarSharp />
                  <p className="rewiev__count">({product?.rating.count})</p>
                </div>
                <div className="single__price__wrapper">
                  <p className="single__price">
                    ${Math.ceil(product?.price * count)}
                  </p>
                  <del className="single__pricedel">${product?.price * 2}</del>
                </div>
                <p className="single__top__left__description">
                  {product?.description}
                </p>
                <p className="single__top__left__category">
                  category:{product?.category}
                </p>
                <div className="buy__wrapper">
                  <div className="count__wrapper">
                    <span>{count}</span>
                    <button className="nav__images">
                      <div onClick={() => setcount((p) => p + 1)}>
                        <AiOutlineUp />
                      </div>
                      <button
                        disabled={count === 1}
                        onClick={() => setcount((p) => p - 1)}
                      >
                        <AiOutlineDown x />
                      </button>
                    </button>
                  </div>
                  <button className="single__btn__add">
                    <IoCartOutline />
                    Add to cart
                  </button>
                  <div className="heart">
                    <FaRegHeart />
                  </div>
                </div>
              </div>
            </div>
            <div className="singleRoute__wrapper__left__bottom">
              <ul className="singleRoute__wrapper__left__bottom__list">
                <li className="singleRoute__wrapper__left__bottom__list__item">
                  <NavLink className="singleRoute__link">Description</NavLink>
                </li>
                <li className="singleRoute__wrapper__left__bottom__list__item">
                  <NavLink className="singleRoute__link">
                    Additional info
                  </NavLink>
                </li>
                <li className="singleRoute__wrapper__left__bottom__list__item">
                  <NavLink className="singleRoute__link">Vendor</NavLink>
                </li>
                <li className="singleRoute__wrapper__left__bottom__list__item">
                  <NavLink className="singleRoute__link">Reviews (3)</NavLink>
                </li>
              </ul>
              <p className="singleRoute__wrapper__bottom__text">
                Uninhibited carnally hired played in whimpered dear gorilla
                koala depending and much yikes off far quetzal goodness and from
                for grimaced goodness unaccountably and meadowlark near
                unblushingly crucial scallop tightly neurotic hungrily some and
                dear furiously this apart. Spluttered narrowly yikes left moth
                in yikes bowed this that grizzly much hello on spoon-fed that
                alas rethought much decently richly and wow against the frequent
                fluidly at formidable acceptably flapped besides and much circa
                far over the bucolically hey precarious goldfinch mastodon
                goodness gnashed a jellyfish and one however because.
              </p>
              <ul className="single__wrapper__bottom__list">
                <li className="single__wrapper___bottom__item">
                  <span>Type Of Packing</span> <span>Bottle</span>
                </li>
                <li className="single__wrapper___bottom__item">
                  <span> Color</span>
                  <span>Green, Pink, Powder Blue, Purple</span>
                </li>
                <li className="single__wrapper___bottom__item">
                  <span> Color</span> <span>100ml</span>
                </li>
                <li className="single__wrapper___bottom__item">
                  <span>Ethyl Alcohol</span> <span>70%</span>
                </li>
                <li className="single__wrapper___bottom__item">
                  <span> Piece In One</span> <span>Carton</span>
                </li>
              </ul>
              <hr />
              <p className="singleRoute__wrapper__bottom__text">
                Laconic overheard dear woodchuck wow this outrageously taut
                beaver hey hello far meadowlark imitatively egregiously hugged
                that yikes minimally unanimous pouted flirtatiously as beaver
                beheld above forward energetic across this jeepers beneficently
                cockily less a the raucously that magic upheld far so the this
                where crud then below after jeez enchanting drunkenly more much
                wow callously irrespective limpet.
              </p>
              <h2 className="singleRoute__wrapper__bottom__title">
                Packaging & Delivery
              </h2>
              <hr />
              <p className="singleRoute__wrapper__bottom__text">
                Less lion goodness that euphemistically robin expeditiously
                bluebird smugly scratched far while thus cackled sheepishly
                rigid after due one assenting regarding censorious while
                occasional or this more crane went more as this less much amid
                overhung anathematic because much held one exuberantly sheep
                goodness so where rat wry well concomitantly. Scallop or far
                crud plain remarkably far by thus far iguana lewd precociously
                and and less rattlesnake contrary caustic wow this near alas and
                next and pled the yikes articulate about as less cackled
                dalmatian in much less well jeering for the thanks blindly
                sentimental whimpered less across objectively fanciful grimaced
                wildly some wow and rose jeepers outgrew lugubrious luridly
                irrationally attractively dachshund.
              </p>
              <h2 className="singleRoute__wrapper__bottom__title">
                Suggested Use
              </h2>
              <ul className="singleRoute__bottom__list">
                <li>Refrigeration not necessary.</li>
                <li>Stir before serving</li>
              </ul>
              <h2 className="singleRoute__wrapper__bottom__title">
                Other Ingredients
              </h2>
              <ul className="singleRoute__bottom__list">
                <li>Refrigeration not necessary.</li>
                <li>
                  This butter was produced using a LTG (Low Temperature
                  Grinding) process
                </li>
                <li>
                  Made in machinery that processes tree nuts but does not
                  process peanuts, gluten, dairy or soy
                </li>
              </ul>
              <h2 className="singleRoute__wrapper__bottom__title">Warnings</h2>
              <ul className="singleRoute__bottom__list">
                <li>
                  Oil separation occurs naturally. May contain pieces of shell.
                </li>
              </ul>
            </div>
          </div>
          <div className="singleRoute__wrapper__right">hello</div>
        </div>
      </div>
    </div>
  );
}

export default SingleRoute;
