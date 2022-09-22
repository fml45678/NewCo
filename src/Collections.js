import React from 'react';
import "./Collections.css";

function Collections() {
    return (
        <div className='collections'>
            
            <div className="sidenav__collections">
                <a href="/selfExpression.html">Self Expression</a>
                <a href="#">ToothBrush</a>
                <a href="#">Salty Dog</a>
                <a href="#">Stickers</a>
            </div>

            <div className="collections__image">
                <div class="miloclothes">
                    <img src="selfExpression/milo1.JPG" alt="clothes">
                    </img>
                </div>
            </div>

        </div>
    )
}

export default Collections
