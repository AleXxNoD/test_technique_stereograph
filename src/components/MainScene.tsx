import { useEffect, useRef } from 'react';
import { useScene } from '../hooks/useScene';

const MainScene = () => {
    const { canvasRef, setCanvas } = useScene();

    useEffect(() => {
        if (!canvasRef.current)
            return

        setCanvas()
    }, [canvasRef.current]);

    return (
        <div>
            <canvas ref={canvasRef} />
        </div>
    );
};

export default MainScene;