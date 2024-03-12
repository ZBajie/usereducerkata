import { useReducer, useRef } from "react"

const ACTION = {
  INITIALTEXT: "Hello world!",
  RESET: "reset",
  ADD: "add",
}

type State = {
  textString: string
}
type Action = {
  type: string
  textToAdd: string
}

const addText = (state: State, action: Action) => {
  switch (action.type) {
    case ACTION.ADD:
      return {
        textString: state.textString + action.textToAdd,
      }
    case ACTION.RESET:
      return {
        textString: (state.textString = ACTION.INITIALTEXT),
      }

    default:
      return state
  }
}

function AddText() {
  const [state, dispatch] = useReducer(addText, {
    textString: ACTION.INITIALTEXT,
  })
  const textInput = useRef<HTMLInputElement>(null)

  return (
    <section className="add-text">
      <h2>Add Text</h2>
      <p>{state.textString}</p>
      <input type="text" ref={textInput} />
      <button
        onClick={() => {
          if (textInput.current) {
            dispatch({ type: ACTION.ADD, textToAdd: textInput.current.value })
            textInput.current.value = ""
            textInput.current.focus()
          }
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTION.RESET, textToAdd: "" })
        }}
      >
        Reset
      </button>
    </section>
  )
}

export default AddText
