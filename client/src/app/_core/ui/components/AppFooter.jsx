import React from 'react';
import { Layout } from 'antd';
import Link from 'next/link';
const { Footer } = Layout;
const AppFooter = (props) => (
    <Footer
        style={{
            textAlign: 'center',
        }}
    >
        Pixel Blocks © {new Date().getFullYear()} Created by <Link href={"https://www.gsharma.dev"}>Gautam Sharma</Link>
    </Footer>

);

export default AppFooter;