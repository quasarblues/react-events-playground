import { useState } from "react";
import ColorCube from "./ColorCube";

export default function CubeGrid() {
    const cubes = Array.from({ length: 25 }, (_, i) => {
        return <ColorCube key={i} />
    });

    return (
        <div style={{ width: '500px', height: '500px', display: 'flex', flexWrap: 'wrap' }}>
            {cubes}
        </div>
    )
}