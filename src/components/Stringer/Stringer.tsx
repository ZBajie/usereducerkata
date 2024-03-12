import { useReducer, useRef } from "react"
const ACTION = {
  INITIALTEXT: "Hello",
  ADDLETTER: "addLetter",
  RESET: "reset",
}
type State = {
  textString: string
}
type Action = {
  type: string
  letter: string
}

const stringer = (state: State, action: Action): State => {
  switch (action.type) {
    case ACTION.ADDLETTER:
      return { textString: state.textString + action.letter }
    case ACTION.RESET:
      return { textString: (state.textString = action.letter) }

    default:
      return state
  }
}

function Stringer() {
  const [state, dispatch] = useReducer(stringer, {
    textString: ACTION.INITIALTEXT,
  })
  const textAdd = useRef<HTMLInputElement>(null)
  return (
    <section>
      <h2>Stringer</h2>
      <p>{state.textString}</p>
      <input type="text" ref={textAdd} />
      <button
        onClick={() => {
          if (textAdd.current) {
            dispatch({
              type: ACTION.ADDLETTER,
              letter: textAdd.current.value,
            })
            textAdd.current.value = ""
            textAdd.current.focus()
          }
        }}
      >
        Add letter
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTION.RESET, letter: ACTION.INITIALTEXT })
        }}
      >
        Reset
      </button>
    </section>
  )
}

export default Stringer
