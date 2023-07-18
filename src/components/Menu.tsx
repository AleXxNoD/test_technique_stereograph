import { useState } from "react";
import { LuMenu } from 'react-icons/lu';
import { MdOutlineClose } from 'react-icons/md';

const Menu = () => {
    const [clicked, setClicked] = useState(true);

    return (
        <div className={`fixed top-4 right-4 bg-slate-500 ${clicked ? 'w-10 h-10' : 'w-72 min-h-72'} transition-all pb-10`}>
            {!clicked ? (
                
                // opened menu
                <div className="w-full h-full flex flex-col justify-start items-center gap-4">
                    <div className="w-full flex justify-end">
                        <button onClick={() => setClicked(true)}
                            className="w-10 h-10 flex justify-center items-center text-slate-200 hover:text-white transition-colors">
                            <MdOutlineClose size={25} />
                        </button>
                    </div>
                    <div className="w-full flex flex-col justify-start items-center p-4 gap-2 bg-slate-600">
                        <label>Ajouter un objet:</label>
                        <input type="file" accept=".gltf" />
                        <button className="bg-black/75 px-16 py-2 hover:bg-black/50 transition-colors">Ajouter</button>
                    </div>
                    <div className="w-full flex flex-col justify-start items-center p-4 gap-2 bg-slate-600">
                        <button className="bg-black/75 px-16 py-2 hover:bg-black/50 transition-colors">Effacer la scène</button>
                    </div>
                </div>
            ) : (
                    
                // closed menu
                <button onClick={() => setClicked(false)}
                    className='w-10 h-10 flex justify-center items-center text-slate-200 hover:text-white'>
                    <LuMenu />
                </button>
            )}
        </div>
    );
};

export default Menu;