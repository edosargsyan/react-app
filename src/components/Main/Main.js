import React from "react"
// import {data} from '../data'
import style from '../Main/Main.module.css'
import {NavLink, Route, Routes} from 'react-router-dom'
import Films from "./Films/Films"
import Recommendation from "./Recommendation/Recommendation"
import Categories from "./Categories/Categories"
import {BrowserRouter} from 'react-router-dom';
import MainPage from "./MainPage/MainPage"
import FilmsPage from "./FilmsPage/FilmsPage"
import FilmCategoriesPage from "./Categories/FIlmCategoriesPage"

function Main(){
    return(
      <div className={style.main}>
          <Routes>
              <Route path="/" element={<MainPage/>}/>
              <Route path='film/:id' element={<FilmsPage/>}/>
              <Route path='filmm/:title' element={<FilmCategoriesPage/>}/>
          </Routes>
       </div>
    )

}

export default Main;