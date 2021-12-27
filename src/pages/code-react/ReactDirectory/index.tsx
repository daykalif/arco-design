import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Message, Button } from '@arco-design/web-react';
import { IconHome, IconCalendar } from '@arco-design/web-react/icon';
import useLocale from '../../../utils/useLocale';
import style from './index.module.less';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

const Sider = Layout.Sider;
const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;

function BaseMenu(props) {
  return (
    <Menu defaultOpenKeys={['0_1']} defaultSelectedKeys={['0_1_1']} {...props}>
      <SubMenu
        key="0_1"
        title={
          <span>
            <IconHome />
            理念篇
          </span>
        }
      >
        <SubMenu
          key="0_1_0"
          title={
            <span>
              <IconCalendar />
              第一章 React理念
            </span>
          }
        >
          <SubMenu key="0_1_0" title="1.React理念">
            <MenuItem key="0_1_0_0">React理念</MenuItem>
            <MenuItem key="0_1_0_1">CPU的瓶颈</MenuItem>
            <MenuItem key="0_1_0_2">IO的瓶颈</MenuItem>
          </SubMenu>
          <SubMenu key="0_1_2" title="2.老的react架构">
            <MenuItem key="0_1_2_0">React15架构</MenuItem>
            <MenuItem key="0_1_2_1">React15架构的缺点</MenuItem>
          </SubMenu>
          <SubMenu key="0_1_3" title="3.新的react架构">
            <MenuItem key="0_1_3_0">React16架构</MenuItem>
            <MenuItem key="0_1_3_1">总结</MenuItem>
            <MenuItem key="0_1_3_2">参考资料</MenuItem>
          </SubMenu>
          <SubMenu key="0_1_4" title="4.Fiber架构的心智模型">
            <MenuItem key="0_1_4_0">什么是代数效应</MenuItem>
            <MenuItem key="0_1_4_1">代数效应在React中的应用</MenuItem>
            <MenuItem key="0_1_4_2">代数效应与Generator</MenuItem>
            <MenuItem key="0_1_4_2">代数效应与Fiber</MenuItem>
          </SubMenu>
          <SubMenu key="0_1_5" title="5.Fiber架构的实现原理">
            <MenuItem key="0_1_5_0">Fiber的起源</MenuItem>
            <MenuItem key="0_1_5_1">Fiber的含义</MenuItem>
            <MenuItem key="0_1_5_2">Fiber的结构</MenuItem>
            <MenuItem key="0_1_5_3">总结</MenuItem>
            <MenuItem key="0_1_5_4">参考资料</MenuItem>
          </SubMenu>
          <SubMenu key="0_1_6" title="6.Fiber架构的工作原理">
            <MenuItem key="0_1_6_0">什么是“双缓存”</MenuItem>
            <MenuItem key="0_1_6_1">双缓存Fiber树</MenuItem>
            <MenuItem key="0_1_6_2">mount时</MenuItem>
            <MenuItem key="0_1_6_3">update时</MenuItem>
            <MenuItem key="0_1_6_4">总结</MenuItem>
            <MenuItem key="0_1_6_5">参考资料</MenuItem>
          </SubMenu>
        </SubMenu>
        <SubMenu
          key="0_2_0"
          title={
            <span>
              <IconCalendar />
              第二章 前置知识
            </span>
          }
        >
          <MenuItem key="0_2_1">源码的文件结构</MenuItem>
          <MenuItem key="0_2_2">调试源码</MenuItem>
          <MenuItem key="0_2_3">深入理解JSX</MenuItem>
        </SubMenu>
      </SubMenu>
    </Menu>
  );
}

const ReactDirectory = () => {
  const locale = useLocale();
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onCollapse = (collapsed, type) => {
    const content = type === 'responsive' ? '触发响应式收缩' : '点击触发收缩';
    Message.info({
      content,
      duration: 2000,
    });
    setCollapsed(collapsed);
  };

  return (
    <Layout className={style['layout-collapse-demo']}>
      <Sider
        theme="dark"
        onCollapse={onCollapse}
        collapsed={collapsed}
        trigger={null}
        collapsible
        style={{ minWidth: 250, maxWidth: 500 }}
        resizeDirections={['right']}
        breakpoint="xl"
      >
        <div className={style.logo} />
        <BaseMenu
          onClickMenuItem={(key) => Message.info({ content: `You select ${key}`, showIcon: true })}
          theme="dark"
          style={{ width: '100%' }}
        />
      </Sider>
      <Layout>
        <Header>
          <BaseMenu mode="horizontal" />
        </Header>
        <Layout style={{ padding: '0 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>理念篇</Breadcrumb.Item>
            <Breadcrumb.Item>第一章</Breadcrumb.Item>
            <Breadcrumb.Item>React理念</Breadcrumb.Item>
          </Breadcrumb>
          <Content>
            <span>react源码</span>
            <Button key="react" type="primary">
              {locale['menu.code.react']}
            </Button>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default ReactDirectory;
