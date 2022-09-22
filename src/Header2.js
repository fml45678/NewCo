import React from 'react';
import './Header2.css';
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useStateValue } from "./StateProvider";


function Header2() {

    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className='header2'>
            <div className='header2__collections'>
                <Link to='/collections'>
                    <h2 className="collections__icon">CoLLECTIONs</h2>            
                </Link>
            </div>

            <div className='header2__home'>
                <Link to='/'>
                    <h2 className="collections__icon">HOmE</h2>            
                </Link>
            </div>

            <div className='header2__shop'>
                <Link to='/shop'>
                    <h2 className="collections__icon">SHoP</h2>            
                </Link>
            </div>

            <Link to="/checkout">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionLineTwo header__basketCount">
                        {basket.length}
                        </span>
                </div>
                </Link>
            
        </div>
    )
}

export default Header2
