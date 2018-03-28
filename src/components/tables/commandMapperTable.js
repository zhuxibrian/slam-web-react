import { connect } from 'dva';
import { Table, Pagination, Popconfirm, Icon, Card } from 'antd';
import { routerRedux } from 'dva/router';
import styles from './style/commandMapperTable.css';
import { PAGE_SIZE } from '../../services/constants';
import CommandMapperModal from '../modals/commandMapperModal';
import SubmessageModal from '../modals/submessageModal';
import PointModal from '../modals/pointModal';

function CommandMapperTable({ dispatch, list: dataSource, loading, total, page: current }) {
    function deleteHandler(id) {
        dispatch({
            type: 'commandmapper/remove',
            payload: id,
        });
    }

    function pageChangeHandler(page) {
        dispatch(routerRedux.push({
            pathname: '/commandmapper',
            query: { page },
        }));
    }

    function editHandler(id, values) {
        dispatch({
            type: 'commandmapper/put',
            payload: {
                id: id,
                ...values,
            }
        });
    }

    function createHandler(values) {
        dispatch({
            type: 'commandmapper/create',
            payload: values,
        });
    }

    function createSubmessageHandler(id, values) {
        dispatch({
            type: 'commandmapper/createSubmessage',
            payload: { id, values },
        })
    };

    function deleteSubmessageHandler(id) {
        dispatch({
            type: 'commandmapper/removeSubmessage',
            payload: id,
        })
    };

    function createPointHandler(id, values) {
        dispatch({
            type: 'commandmapper/createPoint',
            payload:{id, values},
        })
    };

    function editSubmessageHandler(id, values) {
        dispatch({
            type: 'commandmapper/putSubmessage',
            payload:{
                id: id,
                ...values,
            }
        })
    };

    function deletePointHandler(id) {
        dispatch({
            type: 'commandmapper/removePoint',
            payload: id,
        })
    };

    function editPointHandler(id, values) {
        dispatch({
            type: 'commandmapper/putPoint',
            payload:{
                id:id,
                ...values,
            }
        })
    };

    const pointRowRender = (record) => {
        const pointColumns = [
            { title: 'x', dataIndex: 'x', key: 'x', render: text => <p>{text}</p>, },
            { title: 'y', dataIndex: 'y', key: 'y', render: text => <p>{text}</p>, },
            {
                title: 'Operation', key: 'operation',
                render: (text, record) => (
                    <span className={styles.operation}>
                            <PointModal record={record} onOk={editPointHandler.bind(null, record.id)}>
                                <a>Edit</a>
                            </PointModal>
                            <Popconfirm title="Confirm to delete?" onConfirm={deletePointHandler.bind(null, record.id)}>
                                <a href="">Delete</a>
                            </Popconfirm>
                        </span>
                ),
            },
        ];

        return (
            <Table
                columns={pointColumns}
                dataSource={record.points}
                pagination={false}
            />
        );
    }

    const submessageRowRender = (record) => {
        const submessageColumns = [
            { title: 'submessage', dataIndex: 'submessage', key: 'submessage', render: text => <p>{text}</p>, },
            { title: 'appending', dataIndex: 'appending', key: 'appending', render: text => <p>{text}</p>, },
            { title: 'isMilestone', dataIndex: 'isMilestone', key: 'isMilestone', render: text => <p>{text}</p>, },
            { title: 'serveTime', dataIndex: 'serveTime', key: 'serveTime', render: text => <p>{text}</p>, },
            {
                title: 'Operation',
                key: 'operation',
                render: (text, record) => {
                    return (
                        <span className={styles.operation}>
                            <PointModal record={null} onOk={createPointHandler.bind(null, record.id)}>
                                <a>Create</a>
                            </PointModal>
                            <SubmessageModal record={record} onOk={editSubmessageHandler.bind(null, record.id)}>
                                <a>Edit</a>
                            </SubmessageModal>
                            <Popconfirm title="Confirm to delete?" onConfirm={deleteSubmessageHandler.bind(null, record.id)}>
                                <a href="">Delete</a>
                            </Popconfirm>
                        </span>
                    )
                }
            },
        ];

        return (
            <Table

                loading={loading}
                expandedRowRender={pointRowRender}
                columns={submessageColumns}
                dataSource={record.submessages}
                pagination={false}
            />
        );
    };

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Operation',
            key: 'operation',
            render: (text, record) => (
                <span className={styles.operation}>
                    <SubmessageModal record={null} onOk={createSubmessageHandler.bind(null, record.id)}>
                        <a>Create</a>
                    </SubmessageModal>
                    <CommandMapperModal record={record} onOk={editHandler.bind(null, record.id)}>
                        <a>Edit</a>
                    </CommandMapperModal>
                    <Popconfirm title="Confirm to delete?" onConfirm={deleteHandler.bind(null, record.id)}>
                        <a href="">Delete</a>
                    </Popconfirm>
                </span>
            ),
        },
    ];

    return (
        <div className={styles.normal}>
            <Card title="Command Mapper"
                bordered={false}
                extra={
                    <span className={styles.operation}>
                        <CommandMapperModal record={null} onOk={createHandler.bind(null)}>
                            <Icon type="plus" />
                        </CommandMapperModal>

                    </span>
                }
            >
                <Table
                    loading={loading}
                    columns={columns}
                    dataSource={dataSource}
                    rowKey={record => record.id}
                    pagination={false}
                    expandedRowRender={submessageRowRender}
                />
                <Pagination
                    className="ant-table-pagination"
                    total={total}
                    current={current}
                    pageSize={PAGE_SIZE}
                    onChange={pageChangeHandler}
                />
            </Card>
        </div>
    );
}

function mapStateToProps(state) {
    const { list, total, page } = state.commandmapper;
    return {
        list,
        total,
        page,
        loading: state.loading.models.CommandMapperTable,
    };
}

export default connect(mapStateToProps)(CommandMapperTable);
