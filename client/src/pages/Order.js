import React from "react";
import ProductList from '../components/ProductList';
import { Row } from 'antd';

function Order() {
  document.title = 'Fried Snacks Diner - Order';
  return (
    <div className="container">
      <div className="site-card-wrapper">
        <Row justify="left">
              <ProductList />
        </Row>
          </div>
    </div>
  )
}

export default Order;