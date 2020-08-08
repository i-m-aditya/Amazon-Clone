import React from 'react'
import "./Header.css"

import {Link} from "react-router-dom";

import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';

function Header() {

    const [{basket}] = useStateValue()


    const calcTotalBasketItems = () => {
        let total = 0;
        basket.forEach(element => {
            total += element.quantity
        });
        return total
    }

    return (
        <div className="header">
            {/* logo on the left -> image */}
            <Link to="/">

                <img 
                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt=""
                />
            </Link>

            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div>

            {/* Search box */}
            {/* 3 links */}

            <div className="header__nav" >

                {/* 1 */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello Aditya</span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>
                </Link>

                {/* 2 */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                {/* 3 */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                {/* 4 */}
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">
                        {calcTotalBasketItems()}
                        </span>    
                    </div>
                </Link>
            </div>
            {/* Basker icon with number */}
        </div>
    )
}

export default Header;