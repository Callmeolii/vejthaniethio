import React, { useState } from "react";

import "../Styles/Recommendation.css";

import Destination1 from "../assets/Destination1.png";
import Destination2 from "../assets/Destination2.png";
import Destination3 from "../assets/Destination3.png";
import Destination4 from "../assets/Destination4.png";
import Destination5 from "../assets/Destination5.png";
import Destination6 from "../assets/Destination6.png";
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";

function Recommendation() {
  const [active, setActive] = useState();

  const data = [
    // {
    //   image: Destination1,
    //   title: "Singapore",
    //   subTitle: "Singapore, officialy thr Republic of Singapore, is a",
    //   cost: "38,800",
    //   duration: "Approx 2 night trip",
    // },
    {
      image: Destination2,
      title: "Thailand",
      subTitle: "Thailand is a Southeast Asian country known for its vibrant culture, \
      stunning beaches, bustling cities like Bangkok, rich history, delicious cuisine, friendly locals, \
      and unique festivals such as Songkran and Loy Krathong.",
      cost: "54,200",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination3,
      title: "Paris",
      subTitle: "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy, and culture. It boasts iconic landmarks like the Eiffel Tower, world-renowned museums, charming cafes, historic architecture, and a vibrant nightlife.",
      cost: "45,500",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination4,
      title: "Amsterdam",
      subTitle: "amsterdam is the Netherlands' capital, known for its artistic heritage, elaborate canal system and narrow houses with gabled facades, legacies of the city's 17th-century Golden Age. Its Museum District houses the Van Gogh Museum, works by Rembrandt and Vermeer at the Rijksmuseum, and modern art at the Stedelijk. Cycling is key to the city's character, and there are numerous bike paths.",
      cost: "24,100",
      duration: "Approx 4 night trip",
    },
    // {
    //   image: Destination5,
    //   title: "Bora Bora",
    //   subTitle: "Bora Bora is a small South Pacific island northwest of",
    //   cost: "95,400",
    //   duration: "Approx 2 night 2 day trip",
    // },
    // {
    //   image: Destination6,
    //   title: "London",
    //   subTitle: "London, the capital of England and the United",
    //   cost: "38,800",
    //   duration: "Approx 3 night 2 day trip",
    // },
  ];

  const packages = [
    "The Weekend Break",
    "The Package Holiday",
    "The Group Tour",
    "Long Term Slow Travel",
  ];

  return (
    <section id="recommendation" className="recommendation">
      <div className="title">
        <h1>Recommend</h1>
        <div className="CategoryBar">
          <ul>
            {packages.map((pkg, index) => {
              return (
                <li
                  key={index}
                  className={active === index + 1 ? "Active" : ""}
                  onClick={() => setActive(index + 1)}>
                  {pkg}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="recommendationBox">
        {data.map((item) => {
          return (
            <div className="box">
              <div className="image">
                <img src={item.image} alt="image" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.subTitle}</p>

              <div className="price">
                <div>
                  <img src={info1} alt="image" />
                  <img src={info2} alt="image" />
                  <img src={info3} alt="image" />
                </div>

                <p>${item.cost}</p>
              </div>

              <div className="details">
                <p>1500 kms</p>
                <p>{item.duration}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Recommendation;
