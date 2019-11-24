import React, { useState } from 'react';
import { Layout } from 'antd';

import MenuItems from './MenuItems';

const { Sider } = Layout;

import './Menu.css';

const Menu = React.memo((props: any) => {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={handleCollapse}>
      <div className="logo" />
      <MenuItems />
    </Sider>
  );
});

export default Menu;
