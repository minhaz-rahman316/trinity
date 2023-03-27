import React from 'react'
import abdur from '../../../assets/image/abdur.png'
import './testimonials.css'

const Testimonials = () => {
  return (
    <section id='abdur_part'>
      <div className="container">
        <div className="success_header">
          <div class="success_header text-center">
                <h2>Our Success Stories</h2>
          </div>
          <div class="col-lg-10 mars_left">
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="abdur_left">
                            <img src={abdur} alt="" srcset=""/>
                        </div>
                    </div>
                    <div class="col-lg-7 col-md-6">
                        <div class="abdur_right">
                            <h5>Abdur Rajjak</h5>
                            <h6>Ex Army Officer</h6>
                            <p>"আমি সম্প্রতি ড্রিম কটেজ রিয়েল এস্টেটের সাথে আমার সম্পত্তি বিক্রি করেছি, এবং আমি ফলাফলের সাথে খুশি হতে পারিনি। তাদের দল আমার সম্পত্তির বিপণনে সক্রিয় ছিল এবং প্রথম সপ্তাহের মধ্যে একাধিক অফার নিয়ে এসেছিল। তারা আমার জন্য একটি দুর্দান্ত মূল্য নিয়ে আলোচনা করেছে এবং আমাকে সহজে বন্ধ করার প্রক্রিয়াটি নেভিগেট করতে সাহায্য করেছে।"</p>
                            <div class="start_icon">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
