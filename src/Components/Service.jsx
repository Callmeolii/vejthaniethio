import React from "react";

import Classes from "../Styles/Services.module.css";

import service1 from "../assets/service1.png";
import service2 from "../assets/service2.svg";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";

function Service() {
  const data = [
    {
      icon: service1,
      title: "Get Best Prices",
      subTitle:
        "Discover the best price tour and travel service in town. Book with us and unlock incredible savings and unforgettable experiences.",
    },
    {
      icon: service2,
      title: "Hotles & Places to Visit Near You",
      subTitle:
        "Best hotels and places to visit near you in a single click. Book with us and unlock incredible savings and unforgettable experiences.",
    },
    {
      icon: service3,
      title: "Secure Payments",
      subTitle:
        " Enjoy the Secure payment through our app and get rewards on discout for next trip.",
    },
    {
      icon: service4,
      title: "Two downtown offices location Near You",
      subTitle:
        "Find the best hotels and places to visit near you in a single click.",
    },
  ];

  return (
    <section id="service" className={Classes.service}>
      {data.map((item) => {
        return (
          <div className={Classes.services}>
            <div className={Classes.icon}>
              <img src={item.icon} alt="" />
            </div>
            <h3>{item.title}</h3>
            <p>{item.subTitle}</p>
          </div>
        );
      })}
    </section>
  );
}

export default Service;
