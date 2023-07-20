import React, { Dispatch, SetStateAction, createContext, createRef, useContext, useMemo, useState } from "react";
import Scene from '../scenes/main';
import { IModel } from "../types/IModel";

interface ISceneContext {
    scene: Scene | null,
    setScene: Dispatch<SetStateAction<Scene | null>>,
    canvasRef: React.RefObject<HTMLCanvasElement>
}

const canvasRef = createRef<HTMLCanvasElement>();

const SceneContext = createContext<ISceneContext>({ scene: null, setScene: () => null, canvasRef });

export const SceneProvider = (props: { children: React.ReactNode }) => {
    const [scene, setScene] = useState<Scene | null>(null);
    const value = useMemo(() => ({ scene, setScene, canvasRef }), [scene]);

    return <SceneContext.Provider value={value}>
        {props.children}
    </SceneContext.Provider>;
};

export const useScene = () => {
    const { scene, setScene, canvasRef } = useContext(SceneContext);

    const setCanvas = () => {
        if (canvasRef.current)
            setScene(new Scene(canvasRef.current));
    }

    const addSceneModel = (model: IModel) => {
        if (scene)
            scene.addModel(model);
    }

    return { scene, canvasRef, setCanvas, addSceneModel };
};