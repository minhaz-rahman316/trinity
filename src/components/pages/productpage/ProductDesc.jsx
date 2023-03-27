import React from 'react'
import product from '../../../assets/image/product_banner.png'
import product1 from '../../../assets/image/product1.png'
import product2 from '../../../assets/image/product2.png'
import product3 from '../../../assets/image/product3.png'
import product4 from '../../../assets/image/product4.png'
import './productdesc.css'
const ProductDesc = () => {
  return (
    <section id="product_part">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-5">
            <div className="product_left">
              <img src={product} alt="" />
            </div>
            <div className="left_img d-flex">
              <img src={product1} alt="" />
              <img src={product2} alt="" />
              <img src={product3} alt="" />
              <img src={product4} alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-md-7">
            <div className="product_right">
              <h4>Project shopno</h4>
              <h3>Green Valley</h3>
              <div className="d-flex product_Items1">
                <i className="fa-solid fa-location-dot"></i>
                <p>Mohammadpur Block D Dahka</p>
              </div>
              <div className="product_item2 d-flex">
                <div className="product_2sitem">
                  <i className="fa-solid fa-bed"></i>
                  <span>3 Beds</span>
                </div>
                <div className="product_2item">
                  <i className="fa-solid fa-bath"></i>
                  <span>3 Baths</span>
                </div>
              </div>
              <div className="product_item2 d-flex">
                <div className="product_2sitem product_middle">
                  <i className="fa-solid fa-bed"></i>
                  <span>1200sqft</span>
                </div>
                <div className="product_2item">
                  <i className="fa-solid fa-car"></i>
                  <span>Car parking</span>
                </div>
              </div>
              <div className="product_last">
                <i className="fa-solid fa-compass"></i>
                <span>South facing</span>
              </div>
              <div className="product_btn">
                <a href="#">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDesc
