import React from 'react'
import style from '../Header/Header.module.css'
import logo from '../images/logo1.png'
import Input from './Inputs/input'
import background from '../images/background.jpg'
import {Link} from 'react-router-dom'
import { Routes,Route } from 'react-router-dom'

export let serialCategory = [
    {title:"БОЕВИК И ПРИКЛЮЧЕНИЯ"},
    {title:"МУЛЬТФИЛЬМ"},
    {title:"КОМЕДИЯ"},
    {title:"КРИМИНАЛ"},
    {title:"ДОКУМЕНТАЛЬНЫЙ"},
    {title:"ДРАМА"},
    {title:"СЕМЕЙНЫЙ"},
    {title:"ДЕТСКИЙ"},
    {title:"ДЕТЕКТИВ"},
    {title:"НОВОСТИ"},
    {title:"РЕАЛИТИ-ШОУ"},
    {title:"НФ И ФЭНТЕЗИ"},
    {title:"МЫЛЬНАЯ ОПЕРА"},
    {title:"ТОК-ШОУ"},
    {title:"ВОЙНА И ПОЛИТИКА"},
    {title:"ВЕСТЕРН"}
 ] 
 export let filmCategory = [
   {title:"БОЕВИК"},
   {title:"ПРИКЛЮЧЕНИЯ"},
   {title:"МУЛЬТФИЛЬМ"},
   {title:"КОМЕДИЯ"},
   {title:"КРИМИНАЛ"},
   {title:"ДОКУМЕНТАЛЬНЫЙ"},
   {title:"ДРАМА"},
   {title:"СЕМЕЙНЫЙ"},
   {title:"ФЭНТЕЗИ"},
   {title:"ИСТОРИЯ"},
   {title:"УЖАСЫ"},
   {title:"МУЗЫКА"},
   {title:"ДЕТЕКТИВ"},
   {title:"МЕЛОДРАМА"},
   {title:"ФАНТАСТИКА"},
   {title:"ТЕЛЕВИЗИОННЫЙ"},
   {title:"ТРИЛЛЕР"},
   {title:"ВОЕННЫЙ"},
]
function Header(){
    return(
       <header>
        <div className={style.Header__firstBlock}>
            <div className={style.Header__firstContainer}>
         <div className={style.Header__logo}>
          <img src={logo}/>
          </div>
          <ul>
            <li className={style.dropdown__li1}><Link to='/'>ФИЛЬМЫ</Link>
              <div className={style.Header__firstDropdown}>
               {filmCategory.map(item=><Link key={item.title} to={'filmm/'+item.title}>{item.title}</Link>)}
              </div>
            </li>
            <li className={style.dropdown__li2}><Link to='/'>СЕРИАЛИ</Link>
               <div className={style.Header__secondDropdown}>
                {serialCategory.map(item=><a key={item.title} href='#'>{item.title}</a>)}
               </div>
            </li>
          </ul>
          </div>
          <div className={style.Header__secondContainer}>
          <button>LIVE TV(COMMING SOON)</button>

          </div>
          </div>
          
          <Input/>

       </header>
       
     )
    
}
export default Header