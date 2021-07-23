import React, { useEffect } from "react";
import { useQuery } from '@apollo/client';
import './style.css';
import ProductItem from "../ProductItem";
import { UPDATE_PRODUCTS } from "../../utils/actions";
import { QUERY_PRODUCTS } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import { useDispatch, useSelector } from "react-redux";

function ProductList() {

  const state = useSelector((state) => {
    return state
  })

  const dispatch = useDispatch()

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    // if theres data to be storesd
    if(data) {
      // lets store it in the global state object
      dispatch({
           type: UPDATE_PRODUCTS,
          products: data.products
        });
            // but lets also take each product and sve it to indexed db using the helper
        data.products.forEach((product) => {
          idbPromise('products', 'put', product)
      })
    } else if (!loading) {
      // since we're offline, get all of the data from the `products` store
      idbPromise('products', 'get').then((products) => {
        // use retrieved data to set global state
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products
        })
      })
    }


  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(product => product.category._id === currentCategory);
  }

  return (
      <div className="product-container"> 
      <h2 className="product-title">Our Products</h2>
      {state.products.length ? (
        <ul className="product-parent">
            {filterProducts().map(product => (
                <li className="product-child">

                <ProductItem
                  key= {product._id}
                  _id={product._id}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  quantity={product.quantity}
                  />
                  </li>
            ))}
        </ul>
      ) : (
        <h3>No products yet!</h3>
      )}
    </div>
  );
}

export default ProductList;