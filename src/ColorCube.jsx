import { useState } from "react"

export default function ColorCube() {
    const colors = [
        "#FF6F61",
        "#6B5B95",
        "#88B04B",
        "#F7CAC9",
        "#92A8D1",
        "#955251",
        "#B565A7",
        "#009B77",
        "#DD4124",
        "#45B8AC",
        "#EFC050",
        "#5B5EA6"
    ];

    const setColor = () => {
        const randNum = Math.floor(Math.random() * colors.length);
        setBgColor(colors[randNum]);
    }

    const [bgColor, setBgColor] = useState(colors[Math.floor(Math.random() * colors.length)]);

    return (
        <div style={
            {
                width: '100px',
                height: '100px',
                backgroundColor: bgColor
            }} onClick={setColor}>
        </div>
    )
}