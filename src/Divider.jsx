import { useState } from "react";

export default function Divider() {
    const [quotient, setQuotient] = useState(150);
    return (
        <>
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
        </>
    )
}