import React, { useState } from "react";
import Board from "@/views/board/";
import Todo from "@/views/todo/";
import { Layout, Menu, Breadcrumb } from "antd";
import { FormOutlined, DashboardOutlined } from "@ant-design/icons";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curTab: "board",
    };
  }

  handleClick = (e) => {
    this.setState({ curTab: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Router>
        <Layout className="layout" id="layout">
          <Header>
            <div className="logo" />
            <Menu
              onClick={this.handleClick}
              selectedKeys={[current]}
              mode="horizontal"
              theme="dark"
            >
              <Menu.Item key="board" icon={<DashboardOutlined />}>
                <Link to="/board">看板</Link>
              </Menu.Item>
              <Menu.Item key="todo" icon={<FormOutlined />}>
                <Link to="/todo">待办</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: "0 50px" }}>
            {/* <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
            <div className="site-layout-content">
              <Route path="/board" component={Board}></Route>
              <Route path="/todo" component={Todo}></Route>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Router>
    );
  }
}

export default Tabs;
