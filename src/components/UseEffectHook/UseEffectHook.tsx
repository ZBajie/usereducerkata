import { useEffect, useState } from "react"

type PokemonDataProps = {
  forms: {
    url: string
    name: string
  }[]
}

function UseEffectHook() {
  const [name, setName] = useState("")
  const [imgUrl, setImgUrl] = useState("")
  const [pokemonData, setPokemonData] = useState({} as PokemonDataProps)

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon/1/"

    const fetchPokemon = async () => {
      const response = await fetch(url)
      const data = await response.json()
      //console.log(data)
      //console.log(data.sprites.back_default)
      if (!ignore) {
        setName(data.forms[0].name)
        setPokemonData(data)
        setImgUrl(data.sprites.back_default)
      }
    }
    let ignore = false
    fetchPokemon()
    return () => {
      ignore = true
    }
  }, [])
  return (
    <section className="use-effect-hook">
      <h2>UseEffect Hook</h2>
      <p>{name}</p>
      {pokemonData.forms && pokemonData.forms[0] && (
        <>
          <p>{pokemonData.forms[0].name}</p>

          <p>{pokemonData.forms[0].url}</p>
        </>
      )}
      <img src={imgUrl} alt="Pokemon image" />
    </section>
  )
}

export default UseEffectHook
