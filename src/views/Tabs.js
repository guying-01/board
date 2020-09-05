import React from 'react'
import { Menu } from "antd";
import Board from '@/views/board/'
import Todo from '@/views/todo/'

import {
  FormOutlined,
  DashboardOutlined
} from "@ant-design/icons";

const { SubMenu } = Menu;

class Tabs extends React.Component {
  state = {
    current: "mail",
  };

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[current]}
        mode="horizontal"
      >
        <Menu.Item key="board" icon={<DashboardOutlined />}>
          看板
        </Menu.Item>
        <Menu.Item key="todo" icon={<FormOutlined />}>
          待办
        </Menu.Item>
      </Menu>
    );
  }
}

export default Tabs;
