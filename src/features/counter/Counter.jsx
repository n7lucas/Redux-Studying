import {useSelector, useDispatch} from "react-redux"
import {increment, decrement, reset, incrementByValue} from "../counterSlice"
import { useState } from "react";

const Counter = () => {
    const count =  useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState(0)

    const addValue = Number(incrementAmount) || 0

    const resetAll =  () => {
        setIncrementAmount(0)
        dispatch(reset());
    }
    return (
        <section>
        <p>hi</p>
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
                
            </div>

            <input 
                type="text"
                value={incrementAmount}
                onChange={(e) => setIncrementAmount(e.target.value)} />
            
            <div>
                <button onClick={resetAll}>Reset</button>
                <button onClick={() => dispatch(incrementByValue(addValue))}>Add Amount</button>
            </div>
        </section>
)}

export default Counter