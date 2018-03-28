import { Component } from 'react';
import { Modal, Form, Input } from 'antd';
const FormItem = Form.Item;


class commandMapperModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }

    showModelHandler = (e) => {
        if (e) e.stopPropagation();
        this.setState({
            visible: true,
        });
    };

    hideModelHandler = () => {
        this.setState({
            visible: false,
        });
    };

    okHandler = () => {
        const { onOk } = this.props;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                onOk(values);
                this.props.form.resetFields();
                this.hideModelHandler();
            }
        });
    };


    render() {
        const { children } = this.props;
        const { getFieldDecorator } = this.props.form;
        const { record } = this.props;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };

        return (
            <span>
                <span onClick={this.showModelHandler}>
                    {children}
                </span>

                <Modal
                    title="Create Submessage"
                    visible={this.state.visible}
                    onOk={this.okHandler}
                    onCancel={this.hideModelHandler}
                >
                    <Form horizontal>
                        <FormItem
                            {...formItemLayout}
                            label="name"
                        >
                            {
                                getFieldDecorator('name', {
                                    initialValue: record === null ? '' : record.name,
                                })(<Input />)
                            }
                        </FormItem>
                    </Form>
                </Modal>
            </span>
        );
    }
}

export default Form.create()(commandMapperModal);
