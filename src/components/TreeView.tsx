import { useModels } from '../hooks/useModels';

const TreeView = (props: { className?: string }) => {
    const { models } = useModels();

    return (
        <div className={props.className}>
            <p>Liste des modèles:</p>
            <div className='w-full flex flex-col justify-start items-start'>
                {models.map((model, index) => (
                    <div key={index}>{model.name}</div>
                ))}
            </div>
        </div>
    );
};

export default TreeView;