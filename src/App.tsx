import Addition from "./components/Addition/Addition"
import Header from "./components/Header/Header"

function App() {
  return (
    <>
      <Header title="Header">
        <p>extra element</p>
        <p>one more element</p>
      </Header>
      <Addition />
    </>
  )
}

export default App
