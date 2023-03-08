import style from "../Inputs/Input.module.css"
import {serialCategory} from '../Header'

function Input(){

  return(
     <div class={style.Header__Inputs}>
        <form action="" method="">
        <input type='text' placeholder="Название" className={style.firstInput}/>
        <input type='text' placeholder="Дата,с" className={style.secondInput}/>
        <input type='text' placeholder="До" className={style.thirdInput}/>
        <select>
            <option>Тип</option>
            <option>ФИЛЬМЫ</option>
            <option>СЕРИАЛЫ</option>
        </select>
           <input type="text" list="t" className={style.dataListInput}/>
          <datalist id='t'>
            {serialCategory.map(item=><option value={item.title}></option>)}
          </datalist>
        <button>
            ПОИСК
        </button>
        </form>
     </div>
  )
}
export default Input;