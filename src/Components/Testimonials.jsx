import React from "react";

import Classes from "../Styles/Testimonials.module.css";

import avatar from "../assets/avatar.jpg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avatar3.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

function Testimonials() {
  return (
    <section id="testimonials" className={Classes.testimonials}>
      <h1>Happy Customers</h1>

      <div className={Classes.boxContainer}>
        <div className={Classes.testimonialBox}>
          <FontAwesomeIcon icon={faQuoteLeft} className={Classes.Icon} />
          <p>
          Vejthani travel has such a user-friendly website. Easy to navigate,
            search and fiddle with dates instead of having to call up. Once
            decided, the booking process was swift and easy, thank you.
          </p>

          <div className={Classes.info}>
            {/* <img src={avatar} alt="image" /> */}
            <div>
              <h3>Anwar Ahmed</h3>
              <span>Hotel Owner</span>
            </div>
          </div>
        </div>

        <div className={Classes.testimonialBox}>
          <FontAwesomeIcon icon={faQuoteLeft} className={Classes.Icon} />

          <p>
            Vejthani Tour and Travel provided an unforgettable experience in Thailand. 
            Their meticulous planning, friendly guides, and seamless transportation made 
            exploring Bangkok and Pattaya a true delight. Highly recommended!
          </p>

          <div className={Classes.info}>
            {/* <img src={avatar2} alt="image" /> */}
            <div>
              <h3>Ayalnesh Tarekgn</h3>
              <span>Owner • car sale bussines</span>
            </div>
          </div>
        </div>

        <div className={Classes.testimonialBox}>
          <FontAwesomeIcon icon={faQuoteLeft} className={Classes.Icon} />
          <p>
          Exploring France with Vejthani Tour and Travel was extraordinary. 
          The carefully curated itinerary, knowledgeable guides, and comfortable accommodations 
          ensured a memorable journey through Paris and the charming French countryside.
          </p>

          <div className={Classes.info}>
            {/* <img src={avatar3} alt="image" /> */}
            <div>
              <h3>Endalk wolde</h3>
              <span>Import Exporter</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
