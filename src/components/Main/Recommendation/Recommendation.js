import style  from "../Main.module.css";
import {Recdata} from "../../data"
import {Link} from 'react-router-dom'
function Recommendation (){
    return(
        <div className={style.recommendation}>
            <h3>РЕКОМЕНДУЕМЫЕ</h3>
            return(
                <div className={style.RecFilms}>
                {Recdata.map((item,index)=>{
                    return(
                        
                        <Link to={"film/"+item.id}>
                        <div className={style.film} key={item.key}>
                              <div className={style.imgArea}>
                                 <img src = {item.img}/>
                              </div>
                              <div className={style.textArea}>
                                <span>{item.title}</span> <span>{item.rating}</span>
                              </div>
                        </div>
                        </Link>
                    )
                })}
              </div>
            )
        </div>
    )
}
export default Recommendation;