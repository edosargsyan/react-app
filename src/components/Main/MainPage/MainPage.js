import Categories from "../Categories/Categories"
import {Films} from "../Films/Films"
import Main from "../Main"
import Recommendation from "../Recommendation/Recommendation"
import style from '../../Main/Main.module.css'
function MainPage(){
    return(
        <>
        <Categories/>
        <div className={style.recommendationFilms}>
        <Films/>
        <Recommendation/>
        </div>
        </>
    )
}

export default MainPage