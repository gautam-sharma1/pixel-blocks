import { LaptopOutlined, NotificationOutlined, UserOutlined } from "@ant-design/icons";
import { Menu, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import useStore, { useBlockStore, useGraphStore } from "@/app/_core/lib/State";
import { useReactFlow } from "reactflow";

import ImageInputBlock from "@/app/_core/lib/blocks/input/ImageInputBlock";
import ImageOutputBlock from "@/app/_core/lib/blocks/output/ImageOutputBlock";

import RandomBlockConcrete from "@/app/_core/lib/RandomBlockConcrete";
import SobelFilterBlock from "@/app/_core/lib/blocks/filter/SobelFilterBlock";
import GrayscaleFilterBlock from "@/app/_core/lib/blocks/filter/GrayscaleFilterBlock";
import BlurFilterBlock from "@/app/_core/lib/blocks/filter/BlurFilterBlock";
import CannyEdgeDetectorBlock from "@/app/_core/lib/blocks/detector/CannyEdgeDetectorBlock";

const menuOptions = new Map(
    [
        ["Input", ["Input Image Block"]],
        ["Filter", ["Sobel Filter Block", "Grayscale Filter Block", "Blur Filter Block"]],
        ["Detection", ["Canny Edge Detection Block"]],
        ["Output", ["Display Block"]],
    ])


const toplevelOptions = [...menuOptions.keys()];


const items1 = toplevelOptions.map((option, index) => {
    const key = String(index + 1);
    const subOptions = [...menuOptions.get(option)];
    return {
        key: `sub${key}`,
        // icon: React.createElement(icon),
        label: option,
        children: subOptions.map((subOption, j) => {
            const subKey = index * 4 + j + 1;
            return {
                key: subOption,
                label: subOption,
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


    function handleInputNodeInsert() {
        increaseBlocksFcn();
        const blk = new ImageInputBlock(numBlocks.toString())
        setNodes([...nodes, blk]);
    }

    function handleOutputNodeInsert() {
        increaseBlocksFcn();
        const blk = new ImageOutputBlock(numBlocks.toString())
        setNodes([...nodes, blk]);
    }

    function handleSobelNodeInsert() {
        increaseBlocksFcn();
        const blk = new SobelFilterBlock(numBlocks.toString())
        setNodes([...nodes, blk]);
    }

    function handleGrayscaleNodeInsert() {
        increaseBlocksFcn();
        const blk = new GrayscaleFilterBlock(numBlocks.toString())
        setNodes([...nodes, blk]);
    }

    function handleBlurNodeInsert() {
        increaseBlocksFcn();
        const blk = new BlurFilterBlock(numBlocks.toString())
        setNodes([...nodes, blk]);
    }

    function handleCannyEdgeNodeInsert() {
        increaseBlocksFcn();
        const blk = new CannyEdgeDetectorBlock(numBlocks.toString())
        setNodes([...nodes, blk]);
    }

    function handleRandomNodeInsert() {
        increaseBlocksFcn();
        const img = RandomBlockConcrete(numBlocks.toString())
        setNodes([...nodes, img]);
    }

    // Main Click Dispatcher
    function handleClick(menuName) {
        switch (menuName) {
            case "Input Image Block":
                return handleInputNodeInsert;
            case "Display Block":
                return handleOutputNodeInsert;
            case "Sobel Filter Block":
                return handleSobelNodeInsert;
            case "Grayscale Filter Block":
                return handleGrayscaleNodeInsert;
            case "Blur Filter Block":
                return handleBlurNodeInsert;
            case "Canny Edge Detection Block":
                return handleCannyEdgeNodeInsert;
            default:
                return (<></>);
        }
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
                }}
                items={items1}
            />
        </Sider>
    )
}