import React, { forwardRef } from 'react';
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

const CheckoutProduct = forwardRef((props, ref) => {

    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        //remove the item 
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: props.id,
        })
    }

    return (
        <div ref={ref} className='checkoutProduct'>

            <img className='checkoutProduct__image' src={props.image} alt="product" />
            
            <div className='checkoutProduct__info'>
                
            <p className='checkoutProduct__title'>{props.title}</p>
           
            <p className="checkoutProduct__price">
                <small>$</small>
                <strong>{props.price}</strong>
            </p>

            <div className="checkoutProduct__rating">
                {Array(props.rating)
                .fill()
                .map((_, i) => (
                    <p id="product_star">★</p>
                ))}
            </div>
            {!props.hideButton && (
                <button onClick={removeFromBasket}>Remove from Basket</button>
            )}
                   
         </div>
        </div>
    )

}) 
   


export default CheckoutProduct
