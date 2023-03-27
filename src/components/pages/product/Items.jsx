import React from 'react';
import { motion } from 'framer-motion';
import location from '../../../assets/svg/flat1.svg'
import bed from '../../../assets/svg/flat2.svg'
import bath from '../../../assets/svg/flat3.svg'
import Area from '../../../assets/svg/flat4.svg'
import garage from '../../../assets/svg/flat5.svg'
import './item.css'
const Items = ({projectItems}) => {
  return (
     <>
     {
      projectItems.map((projectItem)=>{
        const {id, img, category, title, address, beds, baths, area, carparking } = projectItem;
        return (
          <motion.div
            layout
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0.8, scale: 0.6 }}
            exit={{ opacity: 0.8, scale: 0.6 }}
            transition={{ duration: 0.3 }}
            className="product_container card card-two"
            key={id}>
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-4 mars_right">
                  <div className="flat_item">
                    <div className="flat_img">
                      <img src={img} alt="" srcset="" />
                    </div>
                    <div className="flat_content">
                      <h5>{title}</h5>
                      <div className="content1 d-flex">
                        <img src={location} alt="" srcset="" />
                        <p>{address }</p>
                      </div>
                      <div className="content2 d-flex">
                        <div className="Three_beds">
                          <p>
                            <img src={bed} alt="" srcset="" />
                            {beds}
                          </p>
                        </div>
                        <div className="Three_baths">
                          <p>
                            <img src={bath} alt="" srcset="" />
                            {baths}
                          </p>
                        </div>
                      </div>
                      <div className="content3 d-flex">
                        <p>
                          <img src={Area} alt="" srcset="" />
                          {area}
                        </p>
                        <p>
                          <img src={garage} alt="" srcset="" />
                          {carparking}
                        </p>
                      </div>
                      <div className="see_more">
                        <a href="#">See more</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })
     }
     </>
  )
}

export default Items