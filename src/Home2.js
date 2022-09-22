import React from 'react';
import "./Home2.css";
import { Link } from "react-router-dom";

function Home2() {
    return (
        <div className='home2'>
            <div className="leftSide">

                <div className="flex1">
                    <Link to='/collections'>
                        <h2>CoLLECTIONs</h2>
                    </Link>

                </div>
                <div className="flex2">
                    <Link to='/shop'>
                        <h2>SHoP</h2>
                    </Link>
                </div>

            </div>

            <div className="rightSide">
                <h1>NewCo</h1>
            </div>
        </div>
    )
}

export default Home2 
