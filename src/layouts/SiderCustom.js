import { connect } from 'dva';
import { Layout, Menu, Icon } from 'antd';
import Link from 'umi/link';
import styles from './SiderCustom.css';
const { Sider } = Layout;
const SubMenu = Menu.SubMenu;


function SiderCustom({ location, collapsed }) {
    return (
        <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
        >
            <div className={styles.logo} />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <Link to="/">
                        <Icon type="home" />
                        <span>首页</span>
                    </Link>
                </Menu.Item>
                <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>配置</span></span>}>
                    <Menu.Item key="5">
                        <Link to="/terminal">
                            <span>终端配置</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="6">
                        <Link to="/commandmapper">
                            <span>命令配置</span>
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <Menu.Item key="3">
                    <Icon type="upload" />
                    <span>统计</span>
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

function mapStateToProps(state) {
    const { collapsed } = state.layout;
    return {
        collapsed,
    };
}

export default connect(mapStateToProps)(SiderCustom);