import {filmCategory} from '../../Header/Header'
import { filledInputClasses } from '@mui/material'
import style from '../Main.module.css'
import {Link} from 'react-router-dom'
import {data} from '../../data'
import {useParams} from 'react-router-dom'
function Categories (){
    return(
        <div className={style.Categories}>
            {filmCategory.map(item=>
                {
               return <Link to={'filmm/'+item.title} className={style.Categories__box} >{item.title}</Link>
                })}
        </div>
    )
}
export default Categories