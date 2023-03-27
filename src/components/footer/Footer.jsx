import React from 'react'
import { NavLink } from 'react-router-dom';
import './footer.css'
const Footer = () => {
  return (
    <div>
      <section id="footer_part">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="footer_one">
                <p>
                  "Our marketing campaign with [Agency Name] was a huge success!
                  Their strategic approach and creative solutions exceeded our
                  expectations and delivered impressive results. Highly
                  recommend to any business looking to take their marketing to
                  the next level."
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-md-6">
              <div class="footer_two_main d-flex">
                <div class="footer_2">
                  <h6>Pages</h6>
                  <ul>
                    <li>
                      <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                      <NavLink to='/products'>Properties</NavLink>
                    </li>
                    <li>
                      <NavLink to='/about'>About</NavLink>
                    </li>
                    
                  </ul>
                </div>
                
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-md-6">
              <div class="footer_four">
                <h6>Contact</h6>
                <div class="footer_four_item d-flex">
                  <i class="fa-solid fa-phone"></i>
                  <span>(406) 555-0120</span>
                </div>
                <div class="footer_four_item d-flex">
                  <i class="fa-solid fa-message"></i>
                  <span>mangcoding123@gmail.com</span>
                </div>
                <div class="footer_four_item d-flex">
                  <i class="fa-solid fa-location-dot"></i>
                  <span>2972 Westheimer Rd. Santa Ana, Illinois 85486 </span>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-6">
              <div class="footer_five">
                <h6>Social media</h6>
                <div class="footer_icons">
                  <NavLink to='/'>
                    <i class="fa-brands fa-facebook-f"></i>
                  </NavLink>
                  <NavLink to='/'>
                    <i class="fa-brands fa-twitter"></i>
                  </NavLink>
                  <NavLink to='/'>
                    <i class="fa-brands fa-linkedin-in"></i>
                  </NavLink>
                  <NavLink to='/'>
                    <i class="fa-brands fa-instagram"></i>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer
