import React from 'react'
import './CheckoutProduct.css'
import Button from '@material-ui/core/Button';
import { useStateValue } from './StateProvider'


function CheckoutProduct({id, title, image, price, rating, quantity}) {

    const [{basket}, dispatch] = useStateValue();

    console.log("Reducer State >>> ", basket);

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }

    return (
        <div className="checkoutProduct">
            {/* image */}
            <img className="checkoutProduct__image" src={image} alt=""/>
            {/* title */}
            {/* price */}
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                {
                    Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐️</p>
                    ))
                }
                </div>
                <div className="checkoutProduct__quantity">
                    <strong>Quantity: </strong> {quantity}
                </div>
                <Button onClick={removeFromBasket}>Remove from basket</Button>

            </div>
        </div>
    )
}

export default CheckoutProduct
