import React from "react";
import { Col } from 'antd';
import './style.css';

function MenuItem(item) {

  const {
    image,
    name,
    price,
    description
  } = item;


  return (
    <Col xs={{ span: 24 }} lg={{ span: 11 }} style={{ boxSizing: "border-box", marginRight: "1rem" }}>
      <div className="home-card-main px-2 py-2 my-1">
        <img src={`/images/${image}`} alt={name} />
        <div className="home-card-content px-2">
          <h2 className="home-card-title">
            {name}
          </h2>
          <p className="home-card-desc">
            {description}
          </p>
          <h3>${price}</h3>
        </div>
      </div>
    </Col>
  )
}

export default MenuItem;