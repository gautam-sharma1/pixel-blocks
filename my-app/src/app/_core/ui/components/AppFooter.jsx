import React from 'react';
import { Layout} from 'antd';
const { Footer } = Layout;
const AppFooter = (props) => (
    <Footer
        style={{
            textAlign: 'center',
        }}
    >
        Visual AI ©{new Date().getFullYear()} Created by Gautam Sharma
    </Footer>

);

export default AppFooter;