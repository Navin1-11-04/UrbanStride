import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import Slider from '../components/ui/Slider.jsx';
import '../styles/home.css';
import brand_1 from '../assets/nike.png';
import brand_2 from '../assets/puma.png';
import brand_3 from '../assets/Reebok.png';
import brand_4 from '../assets/adidas.png';

function Home() {
  return (
    <div className="home-wrapper">
      <div className="home-container">
        <Slider />
        <section>
          <div className="hero-catchphrase__start">
            <h1 className='hero-catchphrase_1'>Step Into Style</h1>
            <p className='hero-subphrase'>Explore our exclusive range of shoes crafted for comfort and designed for style.</p>
            <Link to="/products" className='home-section--btn'>
                Shop Now
            </Link>
          </div>
        </section>
        <section>
          <div className="featured-products">
            <h2 className='home-titles'>Featured Products</h2>
            <p className='home-subtitles'>Our top picks for you. Handpicked styles that never go out of fashion.</p>
            <div className="featured-products-container">
              <div className="featured-product-card">
                <img src="https://images.unsplash.com/photo-1536520807309-1f7bae9f8be5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="featured product 1" className='featured-img' />
                <h3 className='featured-titles'>Lorem, ipsum dolor.</h3>
                <Link to="/products" className='featured_link'>
                    Discover
                </Link>
              </div>
              <div className="featured-product-card">
                <img src="https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="featured product 2" className='featured-img' />
                <h3 className='featured-titles'>Lorem, ipsum dolor.</h3>
                <Link to="/products" className='featured_link'>
                    Discover
                </Link>
              </div>
              <div className="featured-product-card">
                <img src="https://images.unsplash.com/photo-1569664665343-eb9b3948bdbb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="featured product 3" className='featured-img' />
                <h3 className='featured-titles'>Lorem, ipsum dolor.</h3>
                <Link to="/products" className='featured_link'>
                    Discover
                </Link>
              </div>
              <div className="featured-product-card">
                <img src="https://images.unsplash.com/photo-1636661549423-6fddc337a140?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="featured product 4" className='featured-img' />
                <h3 className='featured-titles'>Lorem, ipsum dolor.</h3>
                <Link to="/products" className='featured_link'>
                    Discover
                </Link>
              </div>
              <div className="featured-product-card">
                <img src="https://images.unsplash.com/photo-1469617833234-8a6843da14d0?q=80&w=2018&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="featured product 5" className='featured-img' />
                <h3 className='featured-titles'>Lorem, ipsum dolor.</h3>
                <Link to="/products" className='featured_link'>
                    Discover
                </Link>
              </div>
              <div className="featured-product-card">
                <img src="https://images.unsplash.com/photo-1558004282-e2b2587e3e47?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="featured product 6" className='featured-img' />
                <h3 className='featured-titles'>Lorem, ipsum dolor.</h3>
                <Link to="/products" className='featured_link'>
                    Discover
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="hero-catchphrase__btw">
            <h1 className='hero-catchphrase_1'>Every Step Tells a Story</h1>
            <p className='hero-subphrase'>Find your perfect match with shoes that complement your unique personality.</p>
            <Link to="/products" className='home-section--btn'>
                Shop Now
            </Link>
          </div>
        </section>
        <section>
          <h2 className='home-titles'>Latest Arrivals</h2>
          <p className='home-subtitles'>Check out the newest additions to our collection. Fresh designs that bring out the best in you.</p>
          <div className="latest-product-container">
            <div className="latest-img__container">
              <Link to="/products">
                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="latest product" className='latest-img' />
              </Link>
            </div>
            <div className="latest-img__container">
              <Link to="/products">
                <img src="https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="latest product" className='latest-img' />
              </Link>
            </div>
          </div>
        </section>
        <section>
          <h2 className='home-titles' style={{textAlign:'center'}}>Featured Brands</h2>
          <p className='home-subtitles' style={{textAlign:'center'}}>Discover Top-Quality Shoes from Leading Names</p>
          <div className="brand-container">
            <img src={brand_1} alt="" className='brand-imgs'/>
            <img src={brand_2} alt="" className='brand-imgs'/>
            <img src={brand_3} alt="" className='brand-imgs'/>
            <img src={brand_4} alt="" className='brand-imgs'/>
          </div>
        </section>
        <section>
        <div className='about-conatiner center'>
            <h4 className='about-title center'>About</h4>
            <p className='about-description center'>
              At UrbanStride, we believe that shoes are more than just a necessity—they're a statement of who you are. That's why we carefully curate our collections to include the latest trends and timeless classics, ensuring that you'll always find something that suits your personal style. We partner with top brands and emerging designers to bring you an exclusive selection of footwear that combines fashion, function, and affordability.<br/><br/>
              Our commitment to excellence doesn't stop at our products. We pride ourselves on providing exceptional customer service, ensuring that your shopping experience is seamless and enjoyable. From easy browsing and secure checkout to fast shipping and hassle-free returns, we go the extra mile to make sure you have the best possible experience with us.
            </p>
          </div>
        </section>
        <section>
          <h2 className='home-titles'>Shop by Sport</h2>
          <p className='home-subtitles'>Find the Perfect Shoes for Your Game.</p>
          <div className="sports-container">
            <div className="sport-cards">
              <Link to="/products">
                <img src="https://images.pexels.com/photos/3760259/pexels-photo-3760259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='sports-img' />
                <span className='sport-name'>Running</span>
              </Link>
            </div>
            <div className="sport-cards">
              <Link to="/products">
                <img src="https://images.pexels.com/photos/8544673/pexels-photo-8544673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='sports-img' />
                <span className='sport-name'>Exercise</span>
              </Link>
            </div>
            <div className="sport-cards">
              <Link to="/products">
                <img src="https://images.unsplash.com/photo-1501450626433-39bbf117090e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='sports-img' />
                <span className='sport-name'>Climbing</span>
              </Link>
            </div>
            <div className="sport-cards">
              <Link to="/products">
                <img src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='sports-img' />
                <span className='sport-name'>Cycling</span>
              </Link>
            </div>
            <div className="sport-cards">
              <Link to="/products">
                <img src="https://images.pexels.com/photos/159684/soccer-football-soccer-player-sport-159684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='sports-img' />
                <span className='sport-name'>Football</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <footer>
        <div className="footer__container">
          <div className="header-links">
            <span className='footer-links'>Home</span>
            <span className='footer-links'>Products</span>
            <span className='footer-links'>Orders</span>
            <span className='footer-links'>Help</span>
            <span className='footer-links'>Cart</span>
          </div>
        </div>
        <div className="btm-footer">
          © 2024 UrbanStride. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Home;
