import React from "react";
import { Carousel, Card, Col, Row } from 'antd';
import HomeCard from "../components/HomeCard";
import shrimpImg from '../assets/meat/shrimp-f.jpg';
import crabImg from '../assets/meat/crab-stick-f.jpg';
import largeSausageImg from '../assets/meat/large-sausage-f.jpg';
import quailEggImg from '../assets/meat/quail-egg-f.jpg';
import shortSausageImg from '../assets/meat/short-sausages-f.jpg';
import friedChickenImg from '../assets/meat/fried-chicken.jpg';
import cilantroImg from '../assets/veges/cilantro-f.jpg';
import eggplantImg from '../assets/veges/eggplant-f.jpg';
import lotusRootImg from '../assets/veges/lotus-root-f.jpg';
import mushroomImg from '../assets/veges/mushroom-f.jpg';
import pepperImg from '../assets/veges/pepper-f.jpg';
import potatoImg from '../assets/veges/potato-f.jpg';

const contentStyle = {
  margin: '0 auto',
  width: '100%'
};

const meatItems = [
  {
    img: {
      src: `${shrimpImg}`,
      alt: 'fried shrimp'
    },
    title: 'Fried Shrimp',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea quo sit voluptatibus repudiandae tempore '
  },
  {
    img: {
      src: `${crabImg}`,
      alt: 'Crab Stick'
    },
    title: 'test2',
    desc: 'iste perspiciatis rerum, quaerat sunt pariatur nihil aliquid nostrum praesentium? Velit minus quia '
  },
  {
    img: {
      src: `${largeSausageImg}`,
      alt: 'Large Sausage'
    },
    title: 'test3',
    desc: 'laborum doloremque aliquid itaque tenetur saepe quas molestias voluptatem, esse est eum deleniti illo aut accusantium '
  },
  {
    img: {
      src: `${friedChickenImg}`,
      alt: 'Fried Chicken'
    },
    title: 'test4',
    desc: 'nihil sapiente, expedita repudiandae, officiis vitae asperiores non? Repudiandae recusandae eaque illum deserunt ea.'
  },
  {
    img: {
      src: `${shortSausageImg}`,
      alt: 'Short Sausage'
    },
    title: 'test5',
    desc: ' Temporibus hic non neque quod dolore tenetur cum nesciunt ut, possimus numquam officia architecto fugiat voluptate eligendi provident'
  },
  {
    img: {
      src: `${quailEggImg}`,
      alt: 'Quail Egg'
    },
    title: 'test6',
    desc: 'labore exercitationem quis velit cumque rerum explicabo, ea quaerat inventore. Possimus eius aliquid maiores accusantium'
  }
];

const vegesItems = [
  {
    img: {
      src: `${cilantroImg}`,
      alt: 'fried shrimp'
    },
    title: 'Fried Shrimp',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea quo sit voluptatibus repudiandae tempore '
  },
  {
    img: {
      src: `${eggplantImg}`,
      alt: 'Crab Stick'
    },
    title: 'test2',
    desc: 'iste perspiciatis rerum, quaerat sunt pariatur nihil aliquid nostrum praesentium? Velit minus quia '
  },
  {
    img: {
      src: `${lotusRootImg}`,
      alt: 'Large Sausage'
    },
    title: 'test3',
    desc: 'laborum doloremque aliquid itaque tenetur saepe quas molestias voluptatem, esse est eum deleniti illo aut accusantium '
  },
  {
    img: {
      src: `${mushroomImg}`,
      alt: 'Fried Chicken'
    },
    title: 'test4',
    desc: 'nihil sapiente, expedita repudiandae, officiis vitae asperiores non? Repudiandae recusandae eaque illum deserunt ea.'
  },
  {
    img: {
      src: `${pepperImg}`,
      alt: 'Short Sausage'
    },
    title: 'test5',
    desc: ' Temporibus hic non neque quod dolore tenetur cum nesciunt ut, possimus numquam officia architecto fugiat voluptate eligendi provident'
  },
  {
    img: {
      src: `${potatoImg}`,
      alt: 'Quail Egg'
    },
    title: 'test6',
    desc: 'labore exercitationem quis velit cumque rerum explicabo, ea quaerat inventore. Possimus eius aliquid maiores accusantium'
  }
];

const bannerImgs = [
  {
    img: {
      src: '../../images/banner/banner-ribs.jpg',
      alt: 'banner ribs'
    }
  },
  {
    img: {
      src: '../../images/banner/banner-bbq.jpg',
      alt: 'banner bbq'
    }
  },
  {
    img: {
      src: '../../images/banner/banner-meal.jpg',
      alt: 'banner meal'
    }
  },
  {
    img: {
      src: '../../images/banner/banner-fried-chicken.jpg',
      alt: 'banner fried chicken'
    }
  }
]

const Home = () => {
  document.title = 'Fried Snacks Diner - Menu';
  const textCenter = {
    textAlign: "center",
    fontSize: "3rem"
  };

  return (
    <div className="container my-2">
      <Carousel autoplay effect="fade">
        {bannerImgs.map(bannerImg =>
          <div>
            <img src={bannerImg.img.src} alt={bannerImg.img.alt} style={contentStyle} />
          </div>
        )}
      </Carousel>
      <div>
        <h1 style={textCenter} className="my-2">Meat Menu</h1>
        <Row justify="center">
          {meatItems.map(meatItem => <HomeCard {...meatItem} />)}
        </Row>
      </div>
      <div>
        <h1 style={textCenter} className="my-2">Vegetables Menu</h1>
        <Row justify="center">
          {vegesItems.map(vegesItem => <HomeCard {...vegesItem} />)}
        </Row>
      </div>
    </div >
  );
};

export default Home;