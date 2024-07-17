import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, AppRootState } from "../redux-toolkit/store"
import { ChangeEvent, useState } from "react";
import { counterActions } from "../redux-toolkit/feature/counter/CounterSlice";

function Counter() {
    const dispatch = useDispatch<AppDispatch>();
    const count = useSelector((state: AppRootState) => state.counter.value)
    const [amount, setAmount] = useState(0);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAmount(+e.target.value);
    }
    const handleSubmit = () => {
      dispatch(counterActions.incrementByAmount(amount))
      setAmount(0);
    }
    return (
    <div>
      <div>
        <button className="border px-[10px] rounded-sm" onClick={() => dispatch(counterActions.increment())}>+</button>
        <h1>{count}</h1>
        <button className="border px-[10px] rounded-sm mb-5" onClick={() => dispatch(counterActions.decrement())}>-</button>
      </div>
      <form action="">
        <input className="border rounded-lg cursor-pointer mr-[50px] px-4 py-1" type="number" value={amount} onChange={handleChange} />
        <button type="button" className="border rounded-md px-4 py-1" onClick={handleSubmit}>Add Amount</button>
      </form>
    </div>
  )
}

export default Counter
