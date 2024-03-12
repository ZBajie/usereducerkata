import Addition from "./components/Addition/Addition"
import Header from "./components/Header/Header"
import Stringer from "./components/Stringer/Stringer"
import UseEffectHook from "./components/UseEffectHook/UseEffectHook"

function App() {
  return (
    <>
      <Header title="Header">
        <p>extra element</p>
        <p>one more element</p>
      </Header>
      <UseEffectHook />
      <Stringer />
      <Addition />
    </>
  )
}

export default App
