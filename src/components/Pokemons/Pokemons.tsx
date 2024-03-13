import { useEffect, useState } from "react"

export type Root = {
  count: number
  next: string
  previous: string
  results: Result[]
}

export type Result = {
  name: string
  url: string
}

function Pokemons() {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState({
    count: 0,
    next: "",
    previous: "",
    results: [],
  } as Root)

  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")

  useEffect(() => {
    let isMounted = true

    const getPokemons = async () => {
      try {
        setIsLoading(true)
        const result = await fetch(url)
        const resultData = await result.json()
        console.log("Pokemons", resultData)
        console.log("next", resultData.next)
        if (isMounted) {
          setData(resultData)
        }
      } catch (error) {
        if (isMounted) {
          console.log(error)
        }
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }
    getPokemons()

    return () => {
      isMounted = false
    }
  }, [url])
  return (
    <section className="pokemons">
      <h2>Pokemons</h2>
      <div>
        {isLoading ? (
          <p>loading...</p>
        ) : (
          data.results &&
          data.results.map((item, i) => {
            return <p key={i}>{item.name}</p>
          })
        )}
      </div>
      <button
        onClick={() => {
          setUrl(data.previous)
        }}
      >
        Previous
      </button>
      <button
        onClick={() => {
          setUrl(data.next)
        }}
      >
        Next
      </button>
    </section>
  )
}

export default Pokemons
