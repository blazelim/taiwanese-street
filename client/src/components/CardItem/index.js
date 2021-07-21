import React from 'react';
import { Card, Row, Col } from 'antd';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import './style.css';

const menu = (
  <Menu>
    <Menu.Item key="0">1</Menu.Item>
    <Menu.Item key="1">2</Menu.Item>
    <Menu.Item key="2">3</Menu.Item>
    <Menu.Item key="3">4</Menu.Item>
    <Menu.Item key="4">5</Menu.Item>
    <Menu.Divider />
    <Menu.Item key="5">5+</Menu.Item>
  </Menu>
);

const CardItem = ({ img: { src, alt }, title, price }) => {
  return (
    <Card className="items">
      <img src={src} alt={alt} />
      <h3>{title}</h3>
      <h3>Price: {price}</h3>
      <Dropdown overlay={menu} trigger={['click']} className="dropdown">
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          1 <DownOutlined />
        </a>
      </Dropdown>
      <Button type="primary">Add to Cart</Button>
    </Card>
  )
}

export default CardItem;