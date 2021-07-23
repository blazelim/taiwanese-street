import React from 'react';
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';

const CartItem = ({ item }) => {
  const state = useSelector((state) => {
    return state;
  })
  const dispatch = useDispatch()

  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    })
    idbPromise('cart', 'delete', { ...item})
  }

  const onChange = (e) => {
    const value = e.target.value;

    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id
      });
    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value)
      })

      idbPromise('cart', 'put', {...item, purchaseQuantity: parseInt(value)})
    }
  }

  return (
    <div className="cart-container">
      <div>
        <img
          className="cart-image"
          src={`/images/${item.image}`}
          alt=""
        />
      </div>
      <div>
        <div className="cart-item">{item.name}, ${item.price}</div>
        <div>
          <span className="quantity">Qty:</span>
          <input
            type="number"
            placeholder="1"
            value={item.purchaseQuantity}
            onChange={onChange}
          />
          <span
            role="img"
            aria-label="trash"
            onClick={()=> removeFromCart(item)}
          >
            [Remove]
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;