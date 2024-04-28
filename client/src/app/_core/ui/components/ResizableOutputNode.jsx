import { useEffect, memo } from 'react';
import { Handle, Position, NodeResizer, useUpdateNodeInternals } from 'reactflow';

const ResizableOutputNodeSelected = ({ id, data, selected, isConnectable }) => {
    const updateNodeInternals = useUpdateNodeInternals();
    useEffect(() => {
    }, [id, updateNodeInternals]);
    return (
        <>
            <NodeResizer color="#ff0071" isVisible={selected} minWidth={100} minHeight={50} isConnectable={isConnectable} />
            <div style={{ padding: 10, }}>{data.label}</div>
            <Handle id={id} type="target" position={Position.Top} isConnectable={isConnectable} />
        </>
    );
};

export default memo(ResizableOutputNodeSelected);
