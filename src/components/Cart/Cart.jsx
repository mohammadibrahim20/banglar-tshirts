import React from 'react';

const Cart = ({cart,handleRemoveFromCart}) => {
    return (
        <div>
            <h2>Order Summary: {cart.length} </h2>
            {
                cart.map((tshirt,index)=> <p 
                key={index}
                >{tshirt.name}
                <button onClick={()=>handleRemoveFromCart(tshirt._id)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;