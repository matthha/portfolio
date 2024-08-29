import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Anchor, Layout, Menu, theme } from 'antd';
const { Header, Content, Sider } = Layout;

// This is the Header options
const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

// The Sidebar Options
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
   //  children: new Array(4).fill(null).map((_, j) => {
   //    const subKey = index * 4 + j + 1;
   //    return {
   //      key: subKey,
   //      label: `option${subKey}`,
   //    };
   //  }),
  };
});

const Temp = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          // display: 'flex',
          // alignItems: 'center',
          
            position: 'sticky',
            top: 0,
            zIndex: 1,
            width: '100%',
            display: 'flex',

        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items1}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Layout >
        <Sider
          width={200}
          theme="dark"
          style={{
            // overflow: 'auto',
            // height: '100vh',
            position: 'fixed',
            left: -5,
            top: 60,
            bottom: 0,
            borderRadius:40
          }}
        >
          <Anchor  items={[
          {
            key: 'part-1',
            href: '#part-1',
            title: 'Part 1',
          },
          {
            key: 'part-2',
            href: '#part-2',
            title: 'Part 2',
          },
          {
            key: 'part-3',
            href: '#part-3',
            title: 'Part 3',
          },
        ]}/>
          {/* <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={items2}
          /> */}
        </Sider>
        
        <Layout
          style={{
            padding: '0 5px 5px',
          }}
        >
          {/* <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <div
        id="part-1"
        style={{
          height: '100vh',
          background: 'rgba(255,0,0,0.02)',
        }}
      />
      <div
        id="part-2"
        style={{
          height: '100vh',
          background: 'rgba(0,255,0,0.02)',
        }}
      />
      <div
        id="part-3"
        style={{
          height: '100vh',
          background: 'rgba(0,0,255,0.02)',
        }}
      />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default Temp;