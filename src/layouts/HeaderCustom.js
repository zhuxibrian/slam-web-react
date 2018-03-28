import { connect } from 'dva';
import { Layout, Icon } from 'antd';
import styles from './HeaderCustom.css';
const { Header } = Layout;

function HeaderCustom({ dispatch, collapsed }) {

    function toggle() {
        dispatch({
            type: 'layout/switch',
            payload: collapsed,
        });
    }

    return (
        <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
                className={styles.trigger}
                type={collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={toggle}
                style={{ padding: '0 8px' }}
            />
        </Header>
    )
}

function mapStateToProps(state) {
    const { collapsed } = state.layout;
    return {
        collapsed,
    };
}

export default connect(mapStateToProps)(HeaderCustom);