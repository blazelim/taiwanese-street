import React, { useEffect, useState } from "react";
import { Card, Row, Col } from 'antd';
import CardItem from "./../components/CardItem";

function Order() {
  return (
    <>
      <h1>Order Page</h1>
      <div className="site-card-wrapper">
        <Row justify="center">
          <Col xs={{ span: 24 }} lg={{ span: 6, offset: 2 }}>
            <CardItem />
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 6, offset: 2 }}>
            <CardItem />
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 6, offset: 2 }}>
            <CardItem />
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 6, offset: 2 }}>
            <CardItem />
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 6, offset: 2 }}>
            <CardItem />
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 6, offset: 2 }}>
            <CardItem />
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Order;