import React from "react";
import { Collapse, List, Button, Input, Switch } from "antd";
import {
  CaretRightOutlined,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import "./index.scss";
const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const genExtra = () => (
  <CaretRightOutlined
    onClick={(event) => {
      // If you don't want click extra trigger collapse, you can prevent this:
      event.stopPropagation();
    }}
  />
);
class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        // { title: "待办事项1", edit: false, complete: false },
        // { title: "待办事项2", edit: false, complete: false },
        // { title: "待办事项3", edit: false, complete: true },
      ],
    };
  }

  componentDidUpdate(){
    localStorage.setItem('todoList',JSON.stringify(this.state.todoList))
  }

  componentDidMount(){
    this.setState({
      todoList:JSON.parse(localStorage.getItem('todoList')) || []
    })
  }

  handleDelete(index) {
    this.state.todoList.splice(index, 1);
    this.setState({
      todoList: this.state.todoList,
    });
  }

  handleEdit(editStatus, index) {
    this.setState({
      todoList: this.state.todoList.map((item, _index) =>
        _index === index ? { ...item, edit: !editStatus } : item
      ),
    });
  }

  handleInputChange(e, index) {
    let inputValue = e.target.value;
    this.setState({
      todoList: this.state.todoList.map((item, _index) =>
        _index === index ? { ...item, title: inputValue } : item
      ),
    });
  }

  handleAdd() {
    this.state.todoList.push({ title: "", complete: false, edit: true });
    this.setState({
      todoList: this.state.todoList,
    });
  }

  handleSwitch(status, index) {
    this.setState({
      todoList: this.state.todoList.map((item, _index) =>
        _index === index ? { ...item, complete: !status } : item
      ),
    });
  }

  render() {
    return (
      <>
        <div className="operation">
          <Button
            type="primary"
            size="small"
            onClick={this.handleAdd.bind(this)}
          >
            添加
          </Button>
        </div>
        <List
          size="small"
          bordered
          dataSource={this.state.todoList}
          renderItem={(item, index) => (
            <List.Item
              actions={[
                <Switch
                  checkedChildren={<CheckOutlined />}
                  unCheckedChildren={<CloseOutlined />}
                  defaultChecked={item.complete}
                  onChange={(status) => this.handleSwitch(status, index)}
                />,
                <a key="del" onClick={this.handleDelete.bind(this, index)}>
                  删除
                </a>,
                <a
                  key="edit"
                  onClick={this.handleEdit.bind(this, item.edit, index)}
                >
                  {item.edit === true ? "确认" : "编辑"}
                </a>,
              ]}
            >
              {item.edit === true ? (
                <Input
                  type="text"
                  value={item.title}
                  placeholder="请输入"
                  onChange={(e) => this.handleInputChange(e, index)}
                />
              ) : (
                item.title
              )}
            </List.Item>
          )}
        />
      </>
    );
  }
}

export default Todo;
