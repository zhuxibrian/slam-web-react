import { Component } from 'react';
import { Modal, Form, Input } from 'antd';
const FormItem = Form.Item;


class submessageModal extends Component {

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
    const { record } = this.props;
    const { getFieldDecorator } = this.props.form;
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
              label="submessage"
            >
              {
                getFieldDecorator('submessage', {
                  initialValue: record === null ? '' : record.submessage,
              })(<Input />)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="appending"
            >
              {
                getFieldDecorator('appending', {
                  initialValue: record === null ? '' : record.appending,
              })(<Input />)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="isMilestone"
            >
              {
                getFieldDecorator('isMilestone', {
                  initialValue: record === null ? '' : record.isMilestone,
              })(<Input />)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="serveTime"
            >
              {
                getFieldDecorator('serveTime', {
                  initialValue: record === null ? '' : record.serveTime,
              })(<Input />)
              }
            </FormItem>
          </Form>
        </Modal>
      </span>
    );
  }
}

export default Form.create()(submessageModal);
