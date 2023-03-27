import React from 'react'
import './Facilities.css'
import h1 from '../../../assets/svg/high1.svg'
import h2 from '../../../assets/svg/high2.svg'
import h3 from '../../../assets/svg/high3.svg'
import h4 from '../../../assets/svg/high4.svg'
const Facilities = () => {
  return (
    <section id="high_quality">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 mars col-md-4">
            <div className="high_items">
              <img src={h1} alt="" srcset="" />
              <h4>High Quality</h4>
              <p>
                High quality flats offer spacious, comfortable, and stylish
                living spaces with premium amenities, modern designs, and
                convenient locations for a premium lifestyle.
              </p>
            </div>
          </div>
          <div className="col-lg-2 mars col-md-4">
            <div className="high_items">
              <img src={h2} alt="" srcset="" />
              <h4>Best Prices</h4>
              <p>
                Best priced flats offer affordable and reasonable rates for
                comfortable living spaces, without compromising on quality,
                amenities, and convenience of location.
              </p>
            </div>
          </div>
          <div className="col-lg-2 mars col-md-4">
            <div className="high_items">
              <img src={h3} alt="" srcset="" />
              <h4>Easy Installment</h4>
              <p>
                Easy installment flats provide flexibility in payment plans,
                making it more accessible and affordable for buyers to invest in
                their dream homes.
              </p>
            </div>
          </div>
          <div className="col-lg-2 mars col-md-4">
            <div className="high_items">
              <img src={h4} alt="" srcset="" />
              <h4>High Security</h4>
              <p>
                High security flats offer secure and safe living environments
                with features such as surveillance systems, gated access, and
                security personnel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Facilities
