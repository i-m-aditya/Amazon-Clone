import React from 'react'
import "./Home.css"

import {Link} from "react-router-dom";
import Product from './Product'

import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import uuid from 'uuid'

function Home() {

    return (

        <div className="home">
            <img 
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
            />
            <div className="home__row">
                
                <Product 
                    id={uuid.v4()}
                    title="AURION DB25 PVC Plates, Dumbbells Rods, 25kg"
                    image="https://m.media-amazon.com/images/I/61BXoaH43nL._AC_AA360_.jpg"
                    price={178}
                    rating={3}
                />
                <Product 
                    id={uuid.v4()}
                    title="Fossil Neutra Analog Black Dial Men's Watch-FS5525"
                    image="https://m.media-amazon.com/images/I/71yIz3Hxm6L._AC_AA360_.jpg"
                    price={100}
                    rating={5}
                />

            </div>

            <div className="home__row">
                
                <Product 
                    id={uuid.v4()}
                    title="Armani Exchange Analog Black Dial Men's Watch - AX2164"
                    image="https://m.media-amazon.com/images/I/81NGNzug1wL._AC_AA360_.jpg"
                    price={100}
                    rating={5}
                />
                <Product 
                    id={uuid.v4()}
                    title="Mi Smart Band 4- India's No.1 Fitness Band"
                    image="https://m.media-amazon.com/images/I/71ZSpNjEl0L._AC_AA360_.jpg"
                    price={30}
                    rating={5}
                />

                <Product 
                    id={uuid.v4()}
                    title="Armani Exchange Hampton Analog Black Dial Men's Watch - AX2103"
                    image="https://m.media-amazon.com/images/I/81ojSqzB7TL._AC_AA360_.jpg"
                    price={240}
                    rating={4}
                />

            </div>

            <div className="home__row">
                <Product
                    id={uuid.v4()}
                    title="Samsung 34-inch (86.40cm) Curved Monitor- 21:9 Ultrawide QLED, Thunderbolt 3 Port- LC34J791WTWXXL"
                    image="https://m.media-amazon.com/images/I/91pi34PiUPL._AC_UY436_FMwebp_QL65_.jpg"
                    price={3000}
                    rating={4}
                />
            </div>


            

        </div>

    )
}

export default Home;