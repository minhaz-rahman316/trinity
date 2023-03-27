import React from 'react'
import './about.css'
import story from '../../../assets/image/story_img.png'
import philo from '../../../assets/image/philo_img.png'
import Team from '../team/Team';
import Testimonials from '../testimonial/Testimonials';
const Aboutpage = () => {
  return (
    <div className="container">
      <div className="col-lg-10 offset-1 dreamer_margins">
        <div className="dreamer_header">
          <h2>We are the Dreamer</h2>
          <p>
            For years we have been dreaming to sow your seed of Dream Home{" "}
            <span>
              through a tune of sand and stone which you can call your own
              Paradise
            </span>
          </p>
        </div>
      </div>

      <section id="our_story">
        <div className="container">
          <div className="col-lg-10 offset-1 story_margin">
            <div className="row">
              <div className="col-lg-5 col-md-5">
                <div className="story_left">
                  <img src={story} alt="" srcset="" />
                </div>
              </div>
              <div className="col-lg-7 col-md-7">
                <div className="story_right">
                  <div className="story_btn">
                    <a href="#">OUR STORY</a>
                  </div>
                  <p>
                    Dreamer Properties Ltd is such an organization which was
                    initiated by some Visionary people who had worked hard and
                    have been serving people with their dream cottage through a
                    Symphony of bricks and cement.
                  </p>
                  <p>
                    It was established in 2020 with a simple but strong promise
                    to provide dream home s with affordable efforts. Only after
                    2 years, it has already served 70 families with their peace
                    home and satisfied smile. DPL became the symbol of trust to
                    the people in Housing and Real Estate arena in Bangladesh.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="our_mission">
        <div className="container">
          <div className="col-lg-7 offset-1 mission_margin">
            <div className="our_mission_item">
              <a href="#">OUR MISSION </a>
              <p>
                <span>“</span> Our Mission is to purvey our revered clients with
                the value of Elegance, Credulity and the principle of
                Acceptance”
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="our_vision">
        <div className="container">
          <div className="col-lg-8 offset-2 vision_margins">
            <div className="our_vision_part">
              <a href="#">OUR VISION </a>
              <p>
                <span>“</span> Our Vision is to build an affordable and
                sustainable dream house that enhance the quality of life for our
                beloved clients”
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="philosophy_part">
        <div className="container">
            <div className="col-lg-10 offset-1 philosophy_mars">
                <div className="philosophy_item">
                    <div className="philo_btn">
                        <a href="#">OUR PHILOSOPHY</a>
                    </div>
                    <div className="philo_item d-flex">
                       <img src={philo} alt="" srcset=""/>
                       <p>Elegance: Elegance in every aspect of each project is how DPL targets to win the hearts of their esteemed clientele as DPL believes in that "Home is the symbol of Elegance "</p>
                    </div>
                    <div className="philo_item d-flex">
                        <img src={philo} alt="" srcset=""/>
                        <p>Credibility: Assurance of trustworthiness on time delivery of the Dream Home with pledged attribute and specification.</p>
                     </div>
                     <div className="philo_item d-flex">
                        <img src={philo} alt="" srcset=""/>
                        <p>Acceptance: Acceptance of every clients as like the member of our family and stay true to everyone, drive what they believe in and dedicated to them</p>
                     </div>
                </div>
            </div>
        </div>
      </section>
      
 <section id="feature_follow">
        <div className="container">
           <div className="col-lg-8 offset-2 feature_margins">
            <div className="feature_follow_item">
                <div className="feature_btn">
                    <a href="#">FEATURES WE FOLLOW</a>
                </div>
            <div className="features_main">
                <div className="feature_item d-flex">
                    <img src={philo} alt="" srcset=""/>
                    <p>Eco- Friendly homes and viable complexes</p>
                 </div>
                 <div className="feature_item d-flex">
                    <img src={philo} alt="" srcset=""/>
                    <p>Smart life with smart life</p>
                 </div>
                 <div className="feature_item d-flex">
                    <img src={philo} alt="" srcset=""/>
                    <p>Innovative structural design for an excellent <span>home</span></p>
                 </div>
                 <div className="feature_item d-flex">
                    <img src={philo} alt="" srcset=""/>
                    <p>Assure client satisfaction</p>
                 </div>
            </div>
            </div>
           </div>
           
          <Team />
          <Testimonials/>
        </div>
    </section>
      
    </div>
  );
}

export default Aboutpage
