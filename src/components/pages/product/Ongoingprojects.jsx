import React from 'react'
import ongoing from '../../../assets/image/ongoing1.png'
import './ongoing.css'
const Ongoingprojects = () => {
  return (
    <div>
      <section id="ongoing_part">
        <div className="container">
            <div className="ongoing_header">
                <h2>Our Ongoing Projects</h2>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-4 mt-3">
                    <div className="ongoing_items">
                     <img src={ongoing} alt="" srcset=""/>
                     <div className="ongoing_btn">
                        <a href="#">Project Shopno</a>
                     </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 mt-3">
                    <div className="ongoing_items">
                     <img src={ongoing} alt="" srcset=""/>
                     <div className="ongoing_btn">
                        <a href="#">Project Shopno</a>
                     </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 mt-3">
                    <div className="ongoing_items">
                     <img src={ongoing} alt="" srcset=""/>
                     <div className="ongoing_btn">
                        <a href="#">Project Shopno</a>
                     </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Ongoingprojects
