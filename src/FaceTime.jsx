import { useState } from "react"
export default function FaceTime() {
    const [face, setFace] = useState('😑')
    return (
        <>
            <h2>FaceTime</h2>
            <h3 style={{ fontSize: '3rem' }}>{face}</h3>
            <button onClick={() => {
                setFace('😀')
            }}>😀</button>
            <button onClick={() => {
                setFace('😭')
            }}>😭</button>
            <button onClick={() => {
                setFace('😡')
            }}>😡</button>
            <button onClick={() => {
                setFace('😑')
            }}>Reset</button>
        </>
    )
}