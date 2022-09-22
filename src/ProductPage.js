import React from 'react';
import "./ProductPage.css";

function ProductPage() {
    return (
        <div className='productPage'>
            <div className="productPage__sidenav">
                <a href="#">ALL</a>
                <a href="#">Look</a>
                <a href="#">Wear</a>
                <a href="#">Play</a>
                <a href="#">Read</a>
                <a href="#">Experience</a>
            </div>

            <div className="productPage__image">
                <img src="stickersImages/spaceTestOne.jpg" alt="" />
            </div>

            <div className="poductPage__info">

                <div className="productPage__title">
                    <h2>Title</h2>
                </div>

                <div className="productPage__description">
                    <h2>Description</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam vitae assumenda, explicabo quam sequi quae, voluptates, velit aliquid dolores maiores debitis? Dolorem totam expedita nemo voluptate possimus sint reiciendis temporibus.</p>
                </div>

                <div className="productPage__price">
                    <h2>Price</h2>
                </div>
                    <button>Add to Cart</button>
                <div className="productPage__button">

                </div>
            </div>


        </div>
    )
}

export default ProductPage
