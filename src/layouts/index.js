import React from 'react';
import { Layout } from 'antd';
import SiderCustom from './SiderCustom'
import HeaderCustom from './HeaderCustom'
import withRouter from 'umi/withRouter';
const { Content, Footer } = Layout;

function App({ children, location }) {
    return (
        <Layout style={{ height: '100%' }}>
            <SiderCustom />
            <Layout style={{ flexDirection: 'column' }}>
                <HeaderCustom />
                <Content style={{ margin: '0 16px', overflow: 'initial' }}>
                    {children}
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    RuiWei System ©2018 Created by RuiWei
            </Footer>
            </Layout>
        </Layout>
    );
}

export default withRouter(App);