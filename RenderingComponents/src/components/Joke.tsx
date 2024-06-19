import { dataJoke } from "../types/Alltypes"
import {ratingFunc} from "../utils/utils"
import './joke.scss'

export const Joke = (data:dataJoke) => {
   
  return (
    <div className='jokes'>
        <h4>Id: {data.id}</h4>
        <p>Joke: {data.joke}</p>
        <p className="rating">Rating: {ratingFunc(data.rating)}</p>
    </div>
  )
}