import './App.css';
import { useEffect, useState } from 'react'
import Pokemon from './Pokemon'

function App() {
  const [existe, setExiste] = useState(false)
  const [buscar, setBuscar] = useState('')
  const [image, setImage] = useState('')
    const cambiarBuscar = (e) => {
        setBuscar(e.target.value)
    }
    const formSubmit = (e) => {
      e.preventDefault()
        if(buscar) {
          searchPokemon(buscar)
        }
    }
  const [name, setName] = useState('')
  const searchPokemon = (pokemonName) => {
  let url = 'https://pokeapi.co/api/v2/'
  url += `/pokemon/${buscar}`
  fetch(url).then((result) => {
    if(result.status === 200) {
      result.json().then((data) => {
      console.log(data)
      setImage(data['sprites']['other']['official-artwork']['front_default'])}
    )
    setExiste(true)
    } else if (result.status === 404) {
      return (
      setExiste(false)
      )
    }
    
    })
  }
  useEffect((e) => {
    if(buscar) { 
      searchPokemon(buscar)
  }}, [buscar]) 
  return (
    <> 
    <h1>PokeList</h1>
    <form method="get" onSubmit={formSubmit}>
    <div className="buscador">
    <input onChange={cambiarBuscar} className="buscador" value={buscar} placeholder="Buscar" /> <button id="buscar" type="submit"><i class='bx bx-search-alt-2'></i></button>
    </div>
    {existe && <Pokemon pokemon={buscar.toUpperCase().charAt(0) + buscar.slice(1)} img={image} />}
    </form>
    </>
  );
  }
  


export default App;
