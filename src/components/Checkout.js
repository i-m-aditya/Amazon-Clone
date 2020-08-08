import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import Product from './Product';

function Checkout() {

    const [{basket}] = useStateValue();

    console.log(basket);

    return (
        <div className="checkout">
            <img 
                className="checkout__ad"
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                alt=""
            />
        
            {
            
                basket?.length === 0 
                    ? <h2>Your shopping basket is empty</h2>
                    : (
                        <div>
                            <h2 className="checkout_title"> Your shopping basket : </h2>
                            {
                                basket.map(item => (
                                    <CheckoutProduct 
                                        id={item.id}
                                        title={item.title}
                                        image={item.image}
                                        price={item.price}
                                        rating={item.rating}
                                        quantity={item.quantity}
                                    />
                                ))
                            }
                        </div>

                    )
            }
            
        </div>
    )
}

export default Checkout
