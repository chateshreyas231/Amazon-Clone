import React from 'react';
import './Home.css';
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                src="https://www.overons.kpn/images/news/_1280xAUTO_crop_center-center_none/Amazon-Prime-Video.jpg"
                alt=""
                />    
            <div className="home__row">
                <Product 
                id="124578"
                title='The lean startup' 
                price={20.99} 
                image={'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'}
                rating={3}
                />
                <Product
                id="124570"
                title='Apple iphone 12 pro' 
                price={799} 
                image={'https://m.media-amazon.com/images/I/71MHTD3uL4L._SL1500_.jpg'}
                rating={5}
                 />


            </div>

            <div className="home__row">
                <Product 
                id="124571"
                title='Lenovo Ideapad' 
                price={600.99} 
                image={'https://www.gizmochina.com/wp-content/uploads/2019/03/Lenovo-ideapad-720S-Notebook.jpg'}
                rating={4} 
                />
                <Product 
                id="124572"
                title='Nike Windrunner Jacket' 
                price={35.99} 
                image={'https://www.runnerinn.com/f/13740/137402618/nike-windrunner-jacket-regular.jpg'}
                rating={4} 
                />
                <Product 
                id="124573"
                title='Casio G-Shock Mens Black' 
                price={200.99} 
                image={'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/209986/2018/3/5/11520252388843-CASIO-Youth-Digital-Men-Black-Digital-Watch-D080-AE-1000W-1AVDF-421520252388693-1.jpg'}
                rating={4} 
                />              
            </div>

            <div className="home__row">
                 <Product
                id="124575"
                title='Anybooks' 
                price={14.99} 
                rating={4} 
                image = {'https://selfpublishinglab.com/wp-content/uploads/2015/04/book-cover-design-services-nonfiction.png'}    
                 />
            </div>


            </div>
        </div>
    )
}

export default Home
