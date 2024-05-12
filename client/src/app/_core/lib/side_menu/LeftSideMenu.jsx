import { LaptopOutlined, NotificationOutlined, UserOutlined } from "@ant-design/icons";
import { Menu, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import useStore, { useBlockStore, useGraphStore } from "@/app/_core/lib/State";
import { useReactFlow } from "reactflow";

import ImageInputBlock from "@/app/_core/lib/blocks/input/ImageInputBlock";
import ImageOutputBlock from "@/app/_core/lib/blocks/output/ImageOutputBlock";
import SobelFilterBlock from "@/app/_core/lib/blocks/filter/SobelFilterBlock";
import GrayscaleFilterBlock from "@/app/_core/lib/blocks/filter/GrayscaleFilterBlock";
import BlurFilterBlock from "@/app/_core/lib/blocks/filter/BlurFilterBlock";
import CannyEdgeDetectorBlock from "@/app/_core/lib/blocks/detector/CannyEdgeDetectorBlock";
import HoughLineDetectorBlock from "@/app/_core/lib/blocks/detector/HoughLineDetectorBlock";
import NotOperationBlock from "@/app/_core/lib/blocks/operation/NotOperationBlock";
import AndOperationBlock from "@/app/_core/lib/blocks/operation/AndOperationBlock";
import SecondaryImageInputBlock from "@/app/_core/lib/blocks/input/SecondaryImageInputBlock";
import KmeansDetectorBlock from "../blocks/detector/KmeansDetectorBlock";

import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import TvOutlinedIcon from '@mui/icons-material/TvOutlined';
import ContrastOutlinedIcon from '@mui/icons-material/ContrastOutlined';
import BlurCircularOutlinedIcon from '@mui/icons-material/BlurCircularOutlined';
import BlurOffOutlinedIcon from '@mui/icons-material/BlurOffOutlined';
import Grid4x4OutlinedIcon from '@mui/icons-material/Grid4x4Outlined';
import SsidChartOutlinedIcon from '@mui/icons-material/SsidChartOutlined';
import InputOutlinedIcon from '@mui/icons-material/InputOutlined';
import OutputOutlinedIcon from '@mui/icons-material/OutputOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import CalculateIcon from '@mui/icons-material/Calculate';
import FlipIcon from '@mui/icons-material/Flip';
import AddIcon from '@mui/icons-material/Add';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import WorkspacesIcon from '@mui/icons-material/Workspaces';

const menuIcons = new Map(
    [
        ["Input", { icon: <InputOutlinedIcon /> }],
        ["Operation", { icon: <CalculateIcon /> }],
        ["Filter", { icon: <AutoAwesomeOutlinedIcon /> }],
        ["Detection", { icon: <TuneOutlinedIcon /> }],
        ["Output", { icon: <OutputOutlinedIcon /> }],
    ]);

const menuOptions = new Map(
    [
        ["Input", [{ name: "Input Image Block", icon: <InsertPhotoOutlinedIcon /> }, { name: "Secondary Input Image Block", icon: <InsertPhotoOutlinedIcon /> }]],
        ["Operation", [{ name: "Bitwise Not Image Block", icon: <InvertColorsIcon /> }, { name: "Bitwise And Image Block", icon: <AddIcon /> }]],
        ["Filter", [{ name: "Sobel Filter Block", icon: <BlurOffOutlinedIcon /> }, { name: "Grayscale Filter Block", icon: <ContrastOutlinedIcon /> }, { name: "Blur Filter Block", icon: <BlurCircularOutlinedIcon /> }]],
        ["Detection", [{ name: "K Means Detection Block", icon: <WorkspacesIcon /> }, { name: "Canny Edge Detection Block", icon: <Grid4x4OutlinedIcon /> }, { name: "Hough Line Detection Block", icon: <SsidChartOutlinedIcon /> },]],
        ["Output", [{ name: "Display Block", icon: <TvOutlinedIcon /> }]],
    ])


const toplevelOptions = [...menuOptions.keys()];


const items1 = toplevelOptions.map((option, index) => {
    const key = String(index + 1);
    const subOptions = [...menuOptions.get(option)];
    return {
        key: `sub${key}`,
        icon: menuIcons.get(option).icon,
        label: option,
        children: subOptions.map((subOption, j) => {
            const subKey = index * 4 + j + 1;
            return {
                key: subOption.name,
                label: subOption.name,
                icon: subOption.icon,
            };
        }),
    };
});

export default function LeftSideMenu() {
    const setNodes = useStore((s) => s.setNodes)
    const nodes = useStore((s) => s.nodes);
    const setEdges = useStore((s) => s.setEdges)
    const edges = useStore((s) => s.edges);
    const reactFlow = useReactFlow();

    const numBlocks = useBlockStore((state) => state.numBlocks)
    const increaseBlocksFcn = useBlockStore((state) => state.increaseBlocks)


    const nodeInsertionHandlers = {
        "Input Image Block": ImageInputBlock,
        "Secondary Input Image Block": SecondaryImageInputBlock,
        "Display Block": ImageOutputBlock,
        "Sobel Filter Block": SobelFilterBlock,
        "Grayscale Filter Block": GrayscaleFilterBlock,
        "Blur Filter Block": BlurFilterBlock,
        "Canny Edge Detection Block": CannyEdgeDetectorBlock,
        "Hough Line Detection Block": HoughLineDetectorBlock,
        "Bitwise Not Image Block": NotOperationBlock,
        "Bitwise And Image Block": AndOperationBlock,
        "K Means Detection Block": KmeansDetectorBlock,
    };

    function handleNodeInsert(blockType) {
        return () => {
            increaseBlocksFcn();
            const blk = new blockType(numBlocks.toString());
            setNodes([...nodes, blk]);
        };
    }

    const nodeInsertionFunctions = {};
    for (const [menuName, blockType] of Object.entries(nodeInsertionHandlers)) {
        nodeInsertionFunctions[menuName] = handleNodeInsert(blockType);
    }



    // Main Click Dispatcher
    function handleClick(menuName) {
        return nodeInsertionFunctions[menuName] || (() => { });
    }

    function onClick({ item, key, keyPath, domEvent }) {
        const menuName = keyPath[0];
        const fcn = handleClick(menuName);
        fcn();
    }

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Sider
            style={{
                background: colorBgContainer,
            }}
            width={250}
        >
            <Menu
                onClick={onClick}
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{
                    height: '100%',
                    fontSize: "10px",
                }}
                items={items1}
            />
        </Sider>
    )
}