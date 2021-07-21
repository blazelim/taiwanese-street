import React, { useEffect, useState } from "react";
import { Card, Row, Col } from 'antd';
import CardItem from "./../components/CardItem";
import shrimpImg from '../assets/meat/shrimp.jpg';
import crabImg from '../assets/meat/crab-stick.jpg';
import largeSausageImg from '../assets/meat/large-sausage.jpg';
import quailEggImg from '../assets/meat/quail-egg.jpg';
import shortSausageImg from '../assets/meat/short-sausage.jpg';
import friedChickenImg from '../assets/meat/fried-chicken.jpg';
import cilantroImg from '../assets/veges/cilantro.jpg';
import eggplantImg from '../assets/veges/eggplant.jpg';
import lotusRootImg from '../assets/veges/lotus-root.jpg';
import mushroomImg from '../assets/veges/mushroom.jpg';
import pepperImg from '../assets/veges/pepper.jpg';
import potatoImg from '../assets/veges/potato.jpg';

const cardItems = [
  {
    img: {
      src: `${shrimpImg}`,
      alt: 'fried shrimp'
    },
    title: 'shrimp',
    price: '$1.00'
  },
  {
    img: {
      src: `${crabImg}`,
      alt: 'Crab Stick'
    },
    title: 'crab stick',
    price: '$1.00'
  },
  {
    img: {
      src: `${largeSausageImg}`,
      alt: 'Large Sausage'
    },
    title: 'large sausage',
    price: '$1.00'
  },
  {
    img: {
      src: `${quailEggImg}`,
      alt: 'Quail Egg'
    },
    title: 'quail egg',
    price: '$1.00'
  },
  {
    img: {
      src: `${friedChickenImg}`,
      alt: 'Fried Chicken'
    },
    title: 'fried chicken',
    price: '$1.00'
  },
  {
    img: {
      src: `${shortSausageImg}`,
      alt: 'Short Sausage'
    },
    title: 'shrimp',
    price: '$1.00'
  },
  {
    img: {
      src: `${cilantroImg}`,
      alt: 'fried shrimp'
    },
    title: 'shrimp',
    price: '$1.00'
  },
  {
    img: {
      src: `${eggplantImg}`,
      alt: 'Crab Stick'
    },
    title: 'shrimp',
    price: '$1.00'
  },
  {
    img: {
      src: `${lotusRootImg}`,
      alt: 'Large Sausage'
    },
    title: 'shrimp',
    price: '$1.00'
  },
  {
    img: {
      src: `${mushroomImg}`,
      alt: 'Fried Chicken'
    },
    title: 'shrimp',
    price: '$1.00'
  },
  {
    img: {
      src: `${pepperImg}`,
      alt: 'Short Sausage'
    },
    title: 'shrimp',
    price: '$1.00'
  },
  {
    img: {
      src: `${potatoImg}`,
      alt: 'Quail Egg'
    },
    title: 'shrimp',
    price: '$1.00'
  }
]

function Order() {
  document.title = 'Fried Snacks Diner - Order';
  return (
    <div className="container">
      <div className="site-card-wrapper">
        <Row justify="center">
          {cardItems.map(cardItem =>
            <Col xs={{ span: 24 }} lg={{ span: 5, offset: 1 }} className="my-1">
              <CardItem {...cardItem} />
            </Col>)}
        </Row>
      </div>
    </div>
  )
}

export default Order;