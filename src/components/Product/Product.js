import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, img, seller, price, stock} = props.product;
    return (
        <div className="product__box">
            <div className="product__img">
                <img src={img} alt=""/>
            </div>
            <div >
              <h4 className="product__title">{name}</h4> 
              <p><small>by: </small>{seller}</p> 
              <p>${price}</p>
              <p><small>only {stock} left in stock - order soon</small></p>
              <button className="product__btn" onClick={() => props.handlerProduct(props.product)} >add to cart</button>
            </div>
           
        </div>
    );
};

export default Product;