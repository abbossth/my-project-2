import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)
    
    const onPlusClick = () => {
        setCount(count +1)
    }

    const onMinusClick = () => {
        setCount(count-1)        
    }

  return (
    <div>
        <h3>Counter</h3>
        <div className="counter-container">
            <button onClick={onMinusClick} >-</button>
            <span> { count } </span>
            <button onClick={onPlusClick} >+</button>
        </div>
    </div>
  )
}

export default Counter