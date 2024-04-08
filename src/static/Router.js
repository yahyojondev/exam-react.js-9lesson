import Home from "../Pages/home/Home";
import About from "../Pages/about/About";
import Blog from "../Pages/blog/Blog";
import Menu from "../Pages/menu/Menu";
import SHop from "../Pages/shop/SHop";
import Vendors from "../Pages/vendors/Vendors";
import card1 from "../assets/images/card1.svg";
import card2 from "../assets/images/card2.svg";
import card3 from "../assets/images/card3.svg";
import card4 from "../assets/images/card4.svg";
import card5 from "../assets/images/card5.svg";
import card6 from "../assets/images/card6.svg";
import card7 from "../assets/images/card7.svg";
import card8 from "../assets/images/card8.svg";
import card9 from "../assets/images/card9.svg";
import card10 from "../assets/images/card10.svg";
import box1 from "../assets/images/box1.png";
import box2 from "../assets/images/box2.png";
import box3 from "../assets/images/box3.png";
import singleRoute1 from "../assets/images/singleRouterightcategorry1.svg";
import singleRoute2 from "../assets/images/singleRoutecategory2.svg";
import singleRoute3 from "../assets/images/singleRoutecategory3.svg";
import singleRoute4 from "../assets/images/singleRoutecategory4.svg";
import singleRoute5 from "../assets/images/singleRoutecategory5.svg";
import newproduct1 from "../assets/images/newproduct1.png";
import newproduct2 from "../assets/images/newproduct2.png";
import newproduct3 from "../assets/images/newproduct3.png";
export const Routers = [
  {
    id: 1,
    title: "Home",
    path: "/",
    element: <Home />,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    element: <About />,
  },
  {
    id: 3,
    title: "Blog",
    path: "/blog",
    element: <Blog />,
  },
  {
    id: 4,
    title: "Menu",
    path: "/menu",
    element: <Menu />,
  },
  {
    id: 5,
    title: "SHop",
    path: "/shop",
    element: <SHop />,
  },
  {
    id: 6,
    title: "Vendors",
    path: "/vendors",
    element: <Vendors />,
  },
];

export const navbartoplinks = [
  {
    id: 1,
    link1: "About Us",
    link2: "Wishlist",
    link3: "My Account",
    link4: "Order Tracking",
    title: "Need help? Call Us:",
    link5: " +998 90 853 39 52",
  },
];

export const categoryproduct = [
  {
    id: 2,
    title: "Cake & Milk",
  },
  {
    id: 3,
    title: "Coffes & Teas",
  },
  {
    id: 4,
    title: "Pet Foods",
  },
  {
    id: 5,
    title: "Vegetables",
  },
];

export const cardsproduct = [
  {
    id: 1,
    img: card1,
    title: "Cake & Milk",
    text: "items",
    bg: "rgb(242, 252, 228)",
  },
  {
    id: 2,
    img: card2,
    title: "Oganic Kiwi",
    text: "items",
    bg: "rgb(255, 252, 235)",
  },
  {
    id: 3,
    img: card3,
    title: "Peach",
    text: "items",
    bg: "rgb(236, 255, 236)",
  },
  {
    id: 4,
    img: card4,
    title: "Red Apple",
    text: "items",
    bg: "rgb(254, 239, 234)",
  },
  {
    id: 5,
    img: card5,
    title: "Snack",
    text: "items",
    bg: "rgb(255, 243, 235)",
  },
  {
    id: 6,
    img: card6,
    title: "Vegetables",
    text: "items",
    bg: "rgb(255, 243, 255)",
  },
  {
    id: 7,
    img: card7,
    title: "Strawberry",
    text: "items",
    bg: "rgb(242, 252, 228)",
  },
  {
    id: 8,
    img: card8,
    title: "Black plum",
    text: "items",
    bg: "rgb(254, 239, 234)",
  },
  {
    id: 9,
    img: card9,
    title: "Custard apple",
    text: "items",
    bg: "rgb(255, 252, 235)",
  },
  {
    id: 10,
    img: card10,
    title: "Coffe & Tea",
    text: "items",
    bg: "rgb(254, 239, 234)",
  },
];

export const boxproduct = [
  {
    id: 1,
    title: "Everyday Fresh & Clean with Our Products",
    btn: "Shop Now ",
    bg: box1,
  },
  {
    id: 2,
    title: "Make your Breakfast Healthy and Easy",
    btn: "Shop Now ",
    bg: box2,
  },
  {
    id: 3,
    title: "The best Organic Products Online",
    btn: "Shop Now ",
    bg: box3,
  },
];

export const mapproduct = [
  {
    id: 1,
    title: "Office",
    link1: "205 North Michigan Avenue, Suite 810",
    link2: "Chicago, 60601, USA",
    link3: "Phone: (123) 456-7890",
    link4: "Email: contact@Evara.com",
    btn: "Wiew map",
  },
  {
    id: 2,
    title: "Studio",
    link1: "205 North Michigan Avenue, Suite 810",
    link2: "Chicago, 60601, USA",
    link3: "Phone: (123) 456-7890",
    link4: "Email: contact@Evara.com",
    btn: "Wiew map",
  },
  {
    id: 3,
    title: "Shop",
    link1: "205 North Michigan Avenue, Suite 810",
    link2: "Chicago, 60601, USA",
    link3: "Phone: (123) 456-7890",
    link4: "Email: contact@Evara.com",
    btn: "Wiew map",
  },
];

export const singleRouteproduct = [
  {
    img: singleRoute1,
    title: "Milks & Dairies",
    number: "5",
  },
  {
    img: singleRoute2,
    title: "Clothing",
    number: "6",
  },
  {
    img: singleRoute3,
    title: "Pet Foods",
    number: "7",
  },
  {
    img: singleRoute4,
    title: "Baking material",
    number: "12",
  },
  {
    img: singleRoute5,
    title: "Fresh Fruit",
    number: "16",
  },
];

export const newproducts = [
  {
    id: 1,
    img: newproduct1,
    title: "Chen Cardigan",
    price: "$99.5",
  },
  {
    id: 2,
    img: newproduct2,
    title: "Chen Sweater",
    price: "$89.50",
  },
  {
    id: 1,
    img: newproduct3,
    title: "Colorful Jacket",
    price: "$25",
  },
];
