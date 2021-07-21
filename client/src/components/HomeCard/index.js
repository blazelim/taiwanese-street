import React from 'react';
import { Col } from 'antd';
import './style.css';

const HomeCard = ({ img: { src, alt }, title, desc }) => {
  return (
    <Col xs={{ span: 24 }} lg={{ span: 11 }} style={{ boxSizing: "border-box", marginRight: "1rem" }}>
      <div className="home-card-main px-2 py-2 my-1">
        <img src={src} alt={alt} />
        <div className="home-card-content px-2">
          <h2 className="home-card-title">
            {title}
          </h2>
          <p className="home-card-desc">
            {desc}
          </p>
        </div>
      </div>
    </Col>
  )
}

export default HomeCard;
