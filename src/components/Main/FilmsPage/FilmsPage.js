import { useParams } from 'react-router-dom'
import {data} from '../../data'

function FilmsPage(){
    const{id} = useParams()
    return(
        <div className='FilmsPage'>
            <div className='firstContainer'>
               <img src={data[id-1].img}/>
            </div>
            <div className='aboutFilm'>
                <div className='filmTitle'>
                    <b>Название</b> <p>{data[id-1].title}</p>
                </div>
                <div className='filmTitle filmRating'>
                <b>IMBD</b> <p>{data[id-1].rating}</p>
                </div>
                <div className='filmYear filmTitle'>
                    <b>Год</b> <p>{data[id-1].year}</p>
                </div>
                <div className='filmRating filmCountry filmTitle'>
                    <b>Страна</b><p>{data[id-1].coutry}</p>
                </div>
            </div>
            <div className='filmVideo'>
            </div>
        </div>
    )
}

export default FilmsPage
