import React, { useState } from "react";
import { LuMenu } from 'react-icons/lu';
import { MdOutlineClose } from 'react-icons/md';
import { useModels } from "../hooks/useModels";
import TreeView from "./TreeView";

const Menu = () => {
    const [clicked, setClicked] = useState(true);
    const { addModel, clearModels } = useModels();

    return (
        <div className={`fixed top-4 right-4 bg-slate-500 ${clicked ? 'w-10 h-10' : 'w-80 min-h-72 pb-10 px-2'} transition-all`}>
            {!clicked ? (
                
                // opened menu
                <MenuContent>

                    <MenuHeader>
                        <button onClick={() => setClicked(true)}
                            className="w-10 h-10 flex justify-center items-center text-slate-200 hover:text-white transition-colors">
                            <MdOutlineClose size={25} />
                        </button>
                    </MenuHeader>

                    <MenuElement>
                        <MenuElementLabel>Ajouter un objet:</MenuElementLabel>
                        <input type="file" accept=".gltf" />
                        <MenuElementButton callback={() => addModel({ name: 'newModel', url: 'url' })}>Ajouter</MenuElementButton>
                    </MenuElement>

                    <MenuElement>
                        <MenuElementLabel>Effacer tous les objets:</MenuElementLabel>
                        <MenuElementButton callback={() => clearModels()}>Effacer la scène</MenuElementButton>
                    </MenuElement>
                    
                    <MenuElement>
                        <MenuElementLabel>Liste des modèles:</MenuElementLabel>
                        <TreeView className="w-full" />
                    </MenuElement>

                </MenuContent>
            ) : (
                    
                // closed menu
                <button onClick={() => setClicked(false)}
                    className='w-full h-full flex justify-center items-center text-slate-200 hover:text-white'>
                    <LuMenu size={20} />
                </button>
            )}
        </div>
    );
};

const MenuContent = (props: { children: React.ReactNode }) => {
    return <div className="w-full h-full flex flex-col justify-start items-center gap-4">
        {props.children}
    </div>
};

const MenuHeader = (props: { children: React.ReactNode }) => {
    return <div className="w-full flex justify-end">
        {props.children}
    </div>
};

const MenuElement = (props: { children: React.ReactNode }) => {
    return <div className="w-full flex flex-col justify-start items-start p-4 gap-2 bg-slate-600">
        {props.children}
    </div>
};

const MenuElementLabel = (props: { children: React.ReactNode }) => {
    return <label>{props.children}</label>
};

const MenuElementButton = (props: { children: React.ReactNode, callback: () => void }) => {
    return <button onClick={() => props.callback()} className="bg-black/75 w-full py-2 hover:bg-black/50 transition-colors">
        {props.children}
    </button>
}

export default Menu;