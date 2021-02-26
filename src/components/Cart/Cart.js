import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total, prd) => total + prd.price, 0)
    // Another way for total Price=============//
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const prd = cart[i];
        total = total + prd.price;
    }

    let shipping = 0;
     if(total > 50){
        shipping = 0;
    }
    
    else if(total > 15){
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99;
    }

    const tax = (total / 10);
    const grandTotal = (total + shipping + tax);

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

   

    return (
        <div>
           <h1>Order Summary</h1>
            <p>Item Ordered: {cart.length}</p> 
            <p>Product Price: ${formatNumber(total)}</p>
            <p>Shipping Charge: ${shipping}</p>
            <p>Tax + VAT: ${formatNumber(tax)}</p>
            <p>Total Price: ${formatNumber(grandTotal)}</p>
        </div>
    );
};

export default Cart;