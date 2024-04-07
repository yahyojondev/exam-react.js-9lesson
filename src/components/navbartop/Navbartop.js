import React,{memo,useState} from 'react'
import { NavLink } from 'react-router-dom'

import { navbartoplinks } from '../../static/Router'

function Navbartop() {
    let navbartopitems = navbartoplinks?.map(el=>(
         <div key={el.id} className="navbartop__wrapper">
              <ul className="navbartop__wrapper__list">
                <li className="navbartop__wrapper__item">
                    <NavLink className="navbartop__wrapper__link">{el.link1}</NavLink>
                    
                </li>
                <li className="navbartop__wrapper__item">
                    <NavLink className="navbartop__wrapper__link"> { el.link2}</NavLink>
                    
                </li>
                <li className="navbartop__wrapper__item">
                    <NavLink className="navbartop__wrapper__link">{el.link3}</NavLink>
                    
                </li>
                <li className="navbartop__wrapper__item">
                    <NavLink className="navbartop__wrapper__link">{el.link4}</NavLink>
                    
                </li>
              </ul>
              <div className="navbartop__wrapper__right">
                 <ul className="navbartop__wrapper__right__list">
                    <li className="navbartop__wrapper__right__item">
                        <NavLink className="navbartop__wrapper__link">{el.title}<span className='navbartop__wrapper__span'>{el.link5}</span></NavLink>
                    </li>
                 </ul>
                 <div className="navbar__selection">
                    <select name="" id="">
                        <option value=""><a href="#">USD</a></option>
                        <option value=""><a href="#">UZ</a></option>
                    </select>
                    <select name="" id="">
                         <option value=""><a href="#">English</a></option>
                        <option value=""><a href="#">UZ</a></option>
                    </select>
                 </div>
              </div>
          </div>
    ))
  return (
    <div className="navbartop">
       <div className="container">
         {navbartopitems}
       </div>
    </div>
  )
}

export default memo(Navbartop)