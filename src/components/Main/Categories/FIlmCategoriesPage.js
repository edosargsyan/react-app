import { useParams } from "react-router-dom";
import {data} from '../../data'
import style from '../../Main/Main.module.css'
import {NavLink} from 'react-router-dom'
import play from '../../images/play.png'
import { Films } from "../Films/Films";
function FilmCategoriesPage(){
    const{id} = useParams()
    const{title} = useParams()

    return(
        <div className={style.FilmCategoriesPage}>
             {data.map(item=>{
                if(title == item.genre){
                    return(
                        <NavLink to={"film/"+item.id} className={style.film}>
                        <div className={style.upDiv}>
                             <img src={play}/>
                        </div>
                          <div className={style.imgArea}>
                            <a href={"film"+item.id}>
                             <img src = {item.img}/>
                             </a>
                          </div>
                          <div className={style.textArea}>
                            <span>{item.title}</span> 
                            <span>{item.rating}</span>
                          </div>
                    </NavLink>
                    )
                }
                
                })}
        </div>
    )
}
export default FilmCategoriesPage;