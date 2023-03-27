import React from "react";
import Team from "../team/Team";

import Banner from "../bannar/Banner";
import Contact from "../contact/Contact";
import Facilities from "../facilities/Facilities";
import Ongoingprojects from "../product/Ongoingprojects";
import Productpage from "../product/Productpage";
import Testimonials from "../testimonial/Testimonials";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <Facilities />
      <Productpage />
      <Ongoingprojects />
      <Team />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Homepage;
