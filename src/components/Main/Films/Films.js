import style from '../Main.module.css';
import {data} from '../../data'
import play from '../../images/play.png'
import {Link} from 'react-router-dom'
import Like from '..//..//images/like.png'
import FilmsPage from '../FilmsPage/FilmsPage';
export let x=(item)=>{
  console.log(item.id)
}
export function Films (){

    return(
        <div className={style.films}>
        {data.map((item,index)=>{
            return(
                <Link to={'film/'+item.id} className={style.film}>
                    <div className={style.upDiv}>
                      <a href=''>
                         <img src={play}/>
                         </a>
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
                </Link>
            )
        })}
      </div>
    )
}