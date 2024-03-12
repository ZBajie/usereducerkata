import { useEffect, useState } from "react"

export type Root = {
  count: number
  next: string
  previous: unknown
  results: Result[]
}

export type Result = {
  name: string
  url: string
}

function Pokemons() {
  const [data, setData] = useState({
    count: 0,
    next: "",
    previous: null,
    results: [],
  } as Root)

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon/"

    const getPokemons = async () => {
      const result = await fetch(url)
      const resultData = await result.json()
      console.log("Pokemons", resultData)
      setData(resultData)
    }
    getPokemons()
  }, [])
  return (
    <section className="pokemons">
      <h2>Pokemons</h2>
      <div>
        {data.results &&
          data.results.map((item, i) => {
            return <p key={i}>{item.name}</p>
          })}
      </div>
    </section>
  )
}

export default Pokemons
