import React from "react";
import { idbPromise, pluralize } from "../../utils/helpers"
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../../utils/actions'
import { useDispatch, useSelector } from "react-redux";
import { DownOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Card } from 'antd';
import { Menu, Dropdown } from 'antd';
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

function ProductItem(item) {

  const state = useSelector((state) => {
    return state
  })

  const dispatch = useDispatch()

  const {
    image,
    name,
    _id,
    price,
    quantity
  } = item;

  const { cart } = state;

  const addToCart = () => {
    // find the cart item with the matching id
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);

    //if there was a match, call update with a new purchase quantity
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) +1
      });

      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) +1
      })
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1}
      })

      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 })
    }


  }
  return (
      <Card className="items">
      <img
          alt={name}
          src={`/images/${image}`}
        />
      <h3>{name}</h3>
      <h3>Price: {price}</h3>
      <Dropdown overlay={menu} trigger={['click']} className="dropdown">
        <a className="ant-dropdown-link">
          1 <DownOutlined />
        </a>
      </Dropdown>
      <Button type="primary" onClick={addToCart}>Add to Cart</Button>
    </Card>
  );
}

export default ProductItem;