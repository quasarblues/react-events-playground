// Combine Multiplier.jsx and Divide.jsx 
import { useState } from "react"

export default function Calculator() {
    const [product, setProduct] = useState(2);
    const [quotient, setQuotient] = useState(150);
    return (
        <>
            <div>
                <h2>Multiplier</h2>
                <h3>{product}</h3>
                <button onClick={() => {
                    setProduct(product * 1.5)
                }}>X 1.5</button>
                <button onClick={() => {
                    setProduct(Math.floor(product * 1.5))
                }}>Math.floor X 1.5</button>
            </div>
            <div>
                <h2>Divider</h2>
                <h3>{quotient}</h3>
                <button onClick={
                    () => {
                        setQuotient(quotient / 3)
                    }}> / 3
                </button>
                <button onClick={
                    () => {
                        setQuotient(quotient / 0.33)
                    }
                }> / 0.33
                </button>
                <button onClick={
                    () => {
                        setQuotient(Math.floor(quotient))
                    }
                }>Floor It</button>
            </div>
        </>
    )
}