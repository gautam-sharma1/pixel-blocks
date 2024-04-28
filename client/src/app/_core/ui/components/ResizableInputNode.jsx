import { useEffect, memo } from 'react';
import { Handle, Position, NodeResizer, useUpdateNodeInternals } from 'reactflow';

const ResizableInputNodeSelected = ({ id, data, selected, isConnectable }) => {
    const updateNodeInternals = useUpdateNodeInternals();
    useEffect(() => {
    }, [id, updateNodeInternals]);
    return (
        <>
            <NodeResizer color="#ff0071" isVisible={selected} minWidth={100} minHeight={50} isConnectable={isConnectable} />
            <div style={{ padding: 10, }}>{data.label}</div>
            <Handle id={id} type="source" position={Position.Bottom} isConnectable={isConnectable} />
        </>
    );
};

export default memo(ResizableInputNodeSelected);
