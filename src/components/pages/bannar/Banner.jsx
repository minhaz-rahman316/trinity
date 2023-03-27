import React from 'react'
import './banner.css'
import banner from '../../../assets/image/banner_img.png'
import { NavLink } from 'react-router-dom'

const Banner = () => {
  return (
    <section id="banner_part">
        <div className="container">
            <div className="row banner_rows">
                <div className="col-lg-6 col-md-6">
                    <div className="banner_left">
                        <h1>Make your Home, <span>Afford your Dream</span></h1>
                        <p>lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's . </p>
                        <NavLink to='/about'>See more</NavLink>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="banner_right">
                        <img src={banner} alt="" srcset=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner
