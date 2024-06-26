import React, { memo, useState, useEffect } from "react";
import { useParams, Link, NavLink } from "react-router-dom";
import axios from "axios";
import { IoStarSharp } from "react-icons/io5";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart, FaFilter } from "react-icons/fa";
import { newproducts, singleRouteproduct } from "../../static/Router";
import { FaRegStar } from "react-icons/fa";
import singleright from "../../assets/images/adminsectionimg.png";
import singleimg from "../../assets/images/heocarouselimages.png";

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

  let singleRouteitem = singleRouteproduct?.map((el) => (
    <div className="singRoute__right__card">
      <div key={el.id} className="img__text__wrapper">
        <img src={el.img} alt="" />
        <p>{el.title}</p>
      </div>
      <span>{el.number}</span>
    </div>
  ));
  let newitem = newproducts?.map((el) => (
    <div key={el.id} className="single__right__newproduct__list">
      <img src={el.img} alt="" />
      <div className="newproduct__right">
        <h3>{el.title}</h3>
        <p>{el.price}</p>
        <FaRegStar />
      </div>
      <hr />
    </div>
  ));
  return (
    <div className="singleRoute">
      <div className="container">
        <div className="singleRoute__wrapper">
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
          <div className="singleRoute__wrapper__right">
            <div className="singleRoute__wrapper__right__category">
              <h2 className="singleRoute__wrapper__right__title">Category</h2>
              <hr />
              <div className="singleRoute__right__category__cards">
                {singleRouteitem}
              </div>
            </div>
            <div className="singleRoute__wrapper__right__category">
              <h2 className="singleRoute__wrapper__right__title">
                Fill by price
              </h2>
              <hr />
              <input type="range" />
              <ul className="single__right__list">
                <li>
                  from: <span>$500</span>
                </li>
                <li>
                  To: <span>$1,000</span>
                </li>
              </ul>
              <h3 className="single__right__title">Color</h3>
              <ul className="single__right__checkbox__list">
                <li>
                  <input type="checkbox" />
                  Red(56)
                </li>
                <li>
                  <input type="checkbox" />
                  Green(78)
                </li>
                <li>
                  <input type="checkbox" />
                  Blue(54)
                </li>
              </ul>
              <h3 className="single__right__title">Item Condition</h3>
              <ul className="single__right__checkbox__list">
                <li>
                  <input type="checkbox" />
                  New(1506)
                </li>
                <li>
                  <input type="checkbox" />
                  Refurbished(27)
                </li>
                <li>
                  <input type="checkbox" />
                  Used(45)
                </li>
              </ul>
              <div className="single__right__btn__img__wrapper">
                <button>
                  <FaFilter />
                  Filter
                </button>
                <img src={singleright} alt="" />
              </div>
            </div>
            <div className="singleRoute__wrapper__right__category">
              <h2 className="singleRoute__wrapper__right__title">
                New products
              </h2>
              <hr />
              {newitem}
            </div>
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
                src={singleimg}
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

export default SingleRoute;
