import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Message, Button } from '@arco-design/web-react';
import { DiretoryProp } from './interface';
import { DirectoryList, DirectoryLevelIcon } from './constant';
import useLocale from '../../../utils/useLocale';
import style from './index.module.less';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

const Sider = Layout.Sider;
const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;

const getDirectory = (dir) => {
  if (dir?.children) {
    return (
      <SubMenu
        key={dir?.rootId}
        title={
          <span>
            {DirectoryLevelIcon[dir?.level]} {dir?.title}
          </span>
        }
      >
        {dir?.children?.map((item) => getDirectory(item))}
      </SubMenu>
    );
  }
  return <MenuItem key={dir?.key}>{dir?.title}</MenuItem>;
};

function BaseMenu(props) {
  return (
    <Menu defaultOpenKeys={['0_1']} defaultSelectedKeys={['0_1_1']} {...props}>
      {DirectoryList.map((list) => {
        return getDirectory(list);
      })}
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
