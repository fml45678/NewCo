import React from 'react'
import "./Home.css";
import Product from './Product';

    


function Home() {
    return (
        <div className="home">
            <div className="home__container">

                <div className="home__row">
                    <Product 
                    title='The Lean Startup'
                    price={29.99}
                    image="https://images1.penguinrandomhouse.com/cover/9780307887894"
                    rating={5} />
                    <Product
                    title='Strawberry Sticker'
                    price={5.00}
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Garden_strawberry_%28Fragaria_×_ananassa%29_single2.jpg/2560px-Garden_strawberry_%28Fragaria_×_ananassa%29_single2.jpg"
                    rating={10} />
        
                </div>

                <div className="home__row">
                    <Product
                    title='~Post T-Shirt'
                    price={28.00}
                    image="https://www.postpiano.net/wp-content/uploads/2022/01/CD-cover-Final-3x3-1-scaled-e1642998253629-1024x1013.jpg"
                    rating={7} />
                    <Product
                    title='Pepper Sticker'
                    price={15.00}
                    image="https://scontent-lga3-1.xx.fbcdn.net/v/t1.18169-9/27657002_2286460244713088_7876244826873420304_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=zWmjiLoTbZwAX_0jUgz&_nc_ht=scontent-lga3-1.xx&oh=00_AT9pkQmpeEqc7xDhXB6T1BenFQ8wG7Z7yXtMzfOX-v3V0g&oe=62511937"
                    rating={5}/>
                    <Product 
                     title="Pepper's Brother"
                     price={4.00}
                     image="https://goldenhearts.co/wp-content/uploads/2020/01/dog-3868724_1280.jpg"
                     rating={6}/>

                </div>
                
                <div className="home__row">
                    <Product
                    title='a ballon'
                    price={1000000}
                    image="https://target.scene7.com/is/image/Target/GUEST_03076b03-9214-495f-b063-5b8f775fa6eb?wid=800&hei=800&qlt=80&fmt=pjpeg"
                    rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product
                    title='a ballon'
                    price={1000000}
                    image="https://target.scene7.com/is/image/Target/GUEST_03076b03-9214-495f-b063-5b8f775fa6eb?wid=800&hei=800&qlt=80&fmt=pjpeg"
                    rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product
                    title='a ballon'
                    price={1000000}
                    image="https://target.scene7.com/is/image/Target/GUEST_03076b03-9214-495f-b063-5b8f775fa6eb?wid=800&hei=800&qlt=80&fmt=pjpeg"
                    rating={4}
                    />
                </div>

            </div>
        </div>
    )
}

export default Home
