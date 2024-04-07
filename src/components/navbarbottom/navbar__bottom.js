import React,{memo} from 'react'
import restangle from "../../assets/images/navbarbottomlogo.svg"
import { DiCodeigniter } from "react-icons/di";
import { SlEarphonesAlt } from "react-icons/sl";
import { Routers } from '../../static/Router';
import { NavLink } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";

function navbar__bottom() {
    let navbaritems = Routers?.map(el=>(
                        <li key={el.id} className="navbar__bottom__list__item"><NavLink  className="navbar__bottom__link" to={el.path}>{el.title}<FaAngleDown className='navlink__svg' /></NavLink></li>
    ))
  return (
    <div className='navbar__bottom'>
        <div className="container">
             <div className="navbar__bottom__wrapper">
                <div className="navbar__bottom__wrapper__left">
                    <div className="navbar__bottom__wrapper__left__logo__select">
                        <div className="navbar__bottom__wrapper__logo">
                             <img src={restangle} alt="" className="navbar__bottom__img" />
                             <p className="navbar__bottom__logo__text">Browse</p>
                        </div>
                        <select name="" id="" className="navbar__bottom__select">
                             <option value="">All Categories</option>
                        </select>
                    </div>
                    <div className="navbar__bottom__deals__wrapper">
                          <DiCodeigniter className='navbar__deals__svg'/>
                          <p className="navbar__bottom__deals__text">Deals</p>
                    </div>
                    <ul className="navbar__bottom__list">
                        {navbaritems}
                    </ul>
                </div>
                <div className="navbar__bottom__right__wrapper">
                    <SlEarphonesAlt className='navbar__bottom__right__svg' />
                    <div className="navbar__bottom__right__wrapper__text">
                        <span className="navbar__bottom__right__wrapper__text__one">1900 - 888</span>
                        <span className="navbar__bottom__right__wrapper__text__two">24/7 support Center</span>
                    </div>
                </div>
             </div>
        </div>
    </div>
  )
}

export default memo(navbar__bottom)