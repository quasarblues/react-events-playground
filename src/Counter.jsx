import { useState, useEffect } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);
    function increaseCount() {
        setCount(count + 1);
    }

    const decreaseCount = () => {
        setCount(count - 1);
    }

    useEffect(() => {
        console.log(count);
    })

    return (
        <div>
            <p>The count is: {count}</p>
            <button onClick={increaseCount}>Add 1</button>
            <button onClick={decreaseCount} disabled={count < 1 ? true : false}>Minus 1</button>

        </div>
    )
}