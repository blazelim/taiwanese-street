import React, { useEffect } from "react";
import { useQuery } from '@apollo/client';
import MenuItem from '../components/MenuItem';
import { UPDATE_PRODUCTS } from "../utils/actions";
import { QUERY_PRODUCTS } from "../utils/queries";
import { idbPromise } from "../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { Carousel, Row } from 'antd';
import ribsImg from '../assets/banner-ribs.jpg';
import bbqImg from '../assets/banner-bbq.jpg';
import mealImg from '../assets/banner-meal.jpg';
import chickenImg from '../assets/banner-fried-chicken.jpg';



const contentStyle = {
  margin: '0 auto',
  width: '100%'
};

const bannerImgs = [
  {
    img: {
      src: `${ribsImg}`,
      alt: 'banner ribs'
    }
  },
  {
    img: {
      src: `${bbqImg}`,
      alt: 'banner bbq'
    }
  },
  {
    img: {
      src: `${mealImg}`,
      alt: 'banner meal'
    }
  },
  {
    img: {
      src: `${chickenImg}`,
      alt: 'banner fried chicken'
    }
  }
]


const Home = () => {

  const state = useSelector((state) => {
    return state;
  })

  const dispatch = useDispatch();

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if(data) {
      dispatch({
           type: UPDATE_PRODUCTS,
          products: data.products
        });
        data.products.forEach((product) => {
          idbPromise('products', 'put', product)
      })
    } else if (!loading) {
      idbPromise('products', 'get').then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products
        })
      })
    }


  }, [data, loading, dispatch]);

  function Products() {
      return state.products;
  }
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
        <h1 style={textCenter} className="my-2">Menu</h1>
        <Row justify="center">
        {Products().map(product => (
          <MenuItem
            key= {product._id}
            _id={product._id}
            image={product.image}
            category={product.category}
            name={product.name}
            description={product.description}
            price={product.price}
            />
        ))}
        </Row>
    </div >
  );
}

export default Home;