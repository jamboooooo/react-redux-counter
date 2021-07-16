import { useDispatch, useSelector } from "react-redux"

function Counter() {

    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter)

    const handlePlus = () => {
        dispatch({
            type: "counter/plus"
        })
    }
    
    const handleMinus = () => {
        dispatch({
            type: "counter/minus"
        })
    }

    const handleReset = () => {
        dispatch({
            type: "counter/reset"
        })
    }

    return <>
        <div>
            <h2>{counter}</h2>
        </div>
        <div className='buttons'>
            <button
                onClick={handlePlus}
            >
                Plus
            </button>
            <button
                onClick={handleMinus}
            >
                Minus
            </button>
            <button
                onClick={handleReset}
            >
                Reset
            </button>
        </div>
    </>
}

export default Counter