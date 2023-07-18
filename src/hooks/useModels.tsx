import React, { Dispatch, SetStateAction, createContext, useContext, useMemo, useState } from "react";
import { IModel } from "../types/IModel";

interface IModelsContext {
    models: IModel[],
    setModels: Dispatch<SetStateAction<IModel[]>>
}

const ModelsContext = createContext<IModelsContext>({ models: [], setModels: () => null });

export const ModelsProvider = (props: { children: React.ReactNode }) => {
    const [models, setModels] = useState<IModel[]>([]);
    const value = useMemo(() => ({ models, setModels }), [models]);
    
    return <ModelsContext.Provider value={value}>
        {props.children}
    </ModelsContext.Provider>
};

export const useModels = () => {
    const { models, setModels } = useContext(ModelsContext);

    const addModel = (model: IModel) => {
        setModels([...models, model]);
    };

    const clearModels = () => {
        setModels([]);
    };

    return { models, addModel, clearModels };
};