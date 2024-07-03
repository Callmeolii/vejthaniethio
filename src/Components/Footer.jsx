import React from "react";

import Classes from "../Styles/Footer.module.css";
import footerLogo from "../assets/footerlogo.png";

import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import tiktok from "../assets/tiktok.svg";

function Footer() {
  return (
    <footer className={Classes.footerContainer}>
      <div className={Classes.footer}>
        <div className={Classes.socialLink}>
          <p>+251988371818</p>
          <p>vejthanitour@vejthani.com</p>
          <a href="https://www.facebook.com/Vejthanitourism">
            <img src={facebook} alt="" />
          </a>
          <a href="https://www.instagram.com/vejthani_tour.travel/">
            <img src={instagram} alt="" />
          </a>
          <a href="https://www.tiktok.com/@vejthani_tour">
            <img src={tiktok} alt="" />
          </a>
        </div>

        <div className={Classes.footerLogo}>
          <a href="#hero">
            <img src={footerLogo} alt="" />
            <p>
            Vejthani <span className="white">Ethiopia</span>
            </p>
          </a>
        </div>

        <div className={Classes.footerInfo}>
          <h3>Explore the world from your inbox</h3>
          <p>
            let us inspire your next gateway with new destinations and special
            deals
          </p>

          <div>
            <input type="email" placeholder="email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
