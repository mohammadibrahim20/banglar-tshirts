import React from 'react';
import './Cart.css';

const Cart = ({cart,handleRemoveFromCart}) => {
    let message;
    if(cart.length ===0) {
        message = <p>Please add some products</p>
    }
    else{
        message = <div>
            <h3>Boroloxxx</h3>
            <p>thanks give your money</p>
        </div>
    }
    return (
        <div>
            <h2 className={cart.length ===1? 'blue': 'red'}>Order Summary: {cart.length} </h2>

            <p className={`bold bordered ${cart.length === 3? 'orange': 'yellow'}`}>Something</p>


            {cart.length> 2? 
            <span className='purple'>Aro kinen</span>: 
            <span>fokira</span>}
            {message}
            {
                cart.map((tshirt,index)=> <p 
                key={index}
                >{tshirt.name}
                <button onClick={()=>handleRemoveFromCart(tshirt._id)}>X</button>
                </p>)
            }
            {
                cart.length === 2 && <p>Double bononja</p>
            }
            {
                cart.length === 3 || <h3>Thinta ta hoila na</h3>
            }
        </div>
    );
};

export default Cart;


/* 
conditional Rendaring
1. use if else to set a variable that will contain an element, components
2. ternary operator: condition? 'for true' or 'for false'
3. logical operator &&(if condition is true theen next thing will )
4. logical || (if condition is false theen next thing will)
 */

/* 
Conditioal css class:

1. use tarnary
2. tarnery inside template string
*/