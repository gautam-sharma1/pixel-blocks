import React from 'react';
import { Layout } from 'antd';
import Link from 'next/link';
const { Footer } = Layout;
import themeConstant from '../../themeConstants';
const AppFooter = (props) => (
    <Footer
        style={{
            textAlign: 'center',
            backgroundColor: themeConstant.color_bg_navbar,
            color: themeConstant.color_text_navbar,
        }}
    >
        Pixel Blocks © {new Date().getFullYear()} Created by <Link href={"https://www.gsharma.dev"}>Gautam Sharma</Link>
    </Footer>

);

export default AppFooter;