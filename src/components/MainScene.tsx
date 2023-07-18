import React, { useEffect, useRef, useState } from 'react';
import Scene from '../scenes/main';

const MainScene = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [scene, setScene] = useState<Scene|null>(null);

    useEffect(() => {
        if (!canvasRef.current)
            return
        
        setScene(new Scene(canvasRef.current))
    }, []);

    return (
        <div>
            <canvas ref={canvasRef} />
        </div>
    );
};

export default MainScene;