import { useReducer, useRef } from "react"

const ACTION = {
  INITIALVALUE: 0,
  ADD: "add",
}

type State = {
  result: number
}
type Action = {
  type: string
  num: number
}

const addition = (state: State, action: Action): State => {
  switch (action.type) {
    case ACTION.ADD: {
      return {
        result: state.result + action.num,
      }
    }
    default: {
      return state
    }
  }
}

function Addition() {
  const refNumberOne = useRef<HTMLInputElement>(null)

  const [state, dispatch] = useReducer(addition, {
    result: ACTION.INITIALVALUE,
  })
  return (
    <section>
      <h2>Addition</h2>
      <input type="number" ref={refNumberOne} />
      <p>{state.result}</p>

      <button
        onClick={() => {
          if (refNumberOne.current) {
            dispatch({
              type: ACTION.ADD,
              num: parseInt(refNumberOne.current.value, 10),
            })
          }
        }}
      >
        Sum
      </button>
    </section>
  )
}

export default Addition
