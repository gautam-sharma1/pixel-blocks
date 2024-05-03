import { useEffect, memo } from 'react';
import { Handle, Position, NodeResizer, useUpdateNodeInternals } from 'reactflow';
const handleStyleLeft = { left: "15%" };
const handleStyleRight = { left: "85%" };
const Resizable2InputNode = ({ id, data, selected, isConnectable }) => {
    const updateNodeInternals = useUpdateNodeInternals();
    useEffect(() => {
    }, [id, updateNodeInternals]);
    return (
        <>
            <NodeResizer color="#ff0071" isVisible={selected} minWidth={100} minHeight={50} isConnectable={isConnectable} />
            <Handle type="target" id="a" position={Position.Top} style={handleStyleLeft} isConnectable={isConnectable} />
            <Handle type="target" id="b" position={Position.Top} style={handleStyleRight} isConnectable={isConnectable} />
            <div style={{ padding: 10, }}>{data.label}</div>
            <Handle type="source" position={Position.Bottom} />
        </>
    );
};

export default memo(Resizable2InputNode);
