import { useState } from "react"

export default function Multiplier() {
    const [product, setProduct] = useState(1);
    return (
        <div>
            <h2>{product}</h2>
            <button onClick={() => {
                setProduct(product * 1.5)
            }}>X 1.5</button>
            <button onClick={() => {
                setProduct(Math.floor(product * 1.5))
            }}>Math.floor X 1.5</button>
        </div>
    )
}