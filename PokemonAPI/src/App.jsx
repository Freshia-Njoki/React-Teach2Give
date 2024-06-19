import { useState, useEffect } from 'react'
import './App.scss'
import PokemonList from "./components/pokemon/PokemonList"
import axios from 'axios'
import Pagination from './components/Pagination';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setcurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [PrevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(
      res => {
        setLoading(false)
        setPrevPageUrl(res.data.previous)
        setPokemon(res.data.results.map(p => p.name))
        setNextPageUrl(res.data.next)
      }
    )
    //cleaning up prev calls
    return () => cancel()

  }, [currentPageUrl])

  const gotoNextPage = () => {
    setcurrentPageUrl(nextPageUrl)
  }

  const gotoPrevPage = () => {
    setcurrentPageUrl(PrevPageUrl)
  }

  if(loading) return "loading..."
  
  return (
    <>
    <h3>Pokemon API</h3>
     <PokemonList pokemon={pokemon} />
     <Pagination gotoNextPage={nextPageUrl ? gotoNextPage : null} gotoPrevPage={PrevPageUrl ? gotoPrevPage : null}/>
    </>
  )
}

export default App
