import './App.scss'
import {Joke}  from './components/Joke'
import jokes from './data/data.json'
import { dataJoke } from './types/Alltypes'

function App() {

  return (
    <div>
    {
      jokes && jokes.map((item:dataJoke) => {
        return (
          <Joke key={item.id} id={item.id} joke={item.joke} rating={item.rating} />
        )
      })
    }
    </div>
  )
}

export default App