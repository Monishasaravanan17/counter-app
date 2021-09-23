import React, { useState, useReducer } from "react";

const initialState = {
    firstCounter: 0,
    secondCounter: 0,
    thirdCounter: 0,
    fourthCounter: 0
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment1':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement1':
            return { ...state, firstCounter: state.firstCounter - action.value }
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value }
        case 'increment3':
            return { ...state, thirdCounter: state.thirdCounter + action.value }
        case 'decrement3':
            return { ...state, thirdCounter: state.thirdCounter - action.value }
        case 'increment4':
            return { ...state, fourthCounter: state.fourthCounter + action.value }
        case 'decrement4':
            return { ...state, fourthCounter: state.fourthCounter - action.value }
        case 'reset':
            return initialState
        default:
            return state
    }
}
function Counter() {
    const [Count, setCount] = useState(0)
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>item{Count}</div>
            <div>
                <button>{count.firstCounter === 0 ? "zero" : count.firstCounter}</button>
                <button onClick={() => {
                    dispatch({ type: 'increment1', value: 1 });
                    setCount(Count + 1)
                }}>+</button>
                <button onClick={() => {
                    if (count.firstCounter > 0)
                        dispatch({ type: 'decrement1', value: 1 })
                    if (Count > 0)
                        setCount(Count - 1)
                }}>-</button>
                <button>delete</button>
            </div>
            <div>
                <button>{count.secondCounter === 0 ? "zero" : count.secondCounter}</button>
                <button onClick={() => {
                    dispatch({ type: 'increment2', value: 1 })
                    setCount(Count + 1)
                }}>+</button>
                <button onClick={() => {
                    if (count.secondCounter > 0)
                        dispatch({ type: 'decrement2', value: 1 })
                    if (Count > 0)
                        setCount(Count - 1)
                }}>-</button>
                <button>delete</button>
            </div>
            <div>
                <button>{count.thirdCounter === 0 ? "zero" : count.thirdCounter}</button>
                <button onClick={() => {
                    dispatch({ type: 'increment3', value: 1 })
                    setCount(Count + 1)

                }}>+</button>
                <button onClick={() => {
                    if (count.thirdCounter > 0)
                        dispatch({ type: 'decrement3', value: 1 })
                    if (Count > 0)
                        setCount(Count - 1)
                }}>-</button>
                <button>delete</button>
            </div>
            <div>
                <button>{count.fourthCounter === 0 ? "zero" : count.fourthCounter}</button>
                <button onClick={() => {
                    dispatch({ type: 'increment4', value: 1 })
                    setCount(Count + 1)
                }}>+</button>
                <button onClick={() => {
                    if (count.fourthCounter > 0)
                        dispatch({ type: 'decrement4', value: 1 })
                    if (Count > 0)
                        setCount(Count - 1)
                }}>-</button>
                <button>delete</button>
            </div>
            <button onClick={() => {
                dispatch({ type: 'reset' })
                setCount(0)
            }}>RESET</button>
        </div >
    )
}
export default Counter;