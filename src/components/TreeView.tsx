import { useModels } from '../hooks/useModels';

const TreeView = (props: { className?: string }) => {
    const { models } = useModels();

    return (
        <div className={props.className}>
            <div className='w-full flex flex-col justify-start items-start'>
                {models.map((model, index) => (
                    <TreeViewElement key={index}>{model.name}</TreeViewElement>
                ))}
            </div>
        </div>
    );
};

const TreeViewElement = (props: { children: React.ReactNode }) => <div >{props.children}</div>


export default TreeView;