import React from 'react';
import "./Shop.css";
import { Link } from "react-router-dom";

function Shop() {
    return (
        <div className='shop'>

            <div className="sidenav">
                <a href="#">ALL</a>
                <a href="#">Look</a>
                <a href="#">Wear</a>
                <a href="#">Play</a>
                <a href="#">Read</a>
                <a href="#">Experience</a>
            </div>

            <div className="shopGrid">
                <div className="shopGridItems">
                    <div className="gridIn">
                        <div>
                        All
                        </div>
                    </div>
                </div>
                <div className="shopGridItems">
                    <div className="gridIn">
                        <div>
                        Look
                        </div>
                    </div>
                </div>
                <div className="shopGridItems">
                    <div className="gridIn">
                        <div>
                            <a href="/collections/wear/wear.html">Wear</a> 
                        </div>
                    </div>
                </div>
                <div className="shopGridItems">
                    <div className="gridIn">
                        <div> 
                            <Link to ='/stickers'>
                                Stickers
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="shopGridItems">
                    <div className="gridIn">
                        <div>
                            Read
                        </div>
                    </div>
                </div>
                <div className="shopGridItems">
                    <div className="gridIn">
                        <div>
                            Experience
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default Shop
