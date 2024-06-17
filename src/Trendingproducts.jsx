import React from "react";
import "./Trendingproducts.css";
import Tproduct1 from "./Tproduct1";
import Tproduct1img from "./images/trending-img1.webp";
import Tproduct2img from "./images/trending-img2.webp";
import Tproduct3img from "./images/trending-img3.webp";
import Tproduct4img from "./images/trending-img4.webp";


function Trendingproducts(props) {
  return (
    <>
      <h3 className="trending-head">
        <span className="trending-head-line">Trending Now</span>
      </h3>
      <div className="trending-product-container">
        <div className="trending-products">
          <Tproduct1
            tproductimg={Tproduct1img}
            heading="Sage & Seas"
            description="Rjuv9 Coughar Syrup - 200ml, A Soothing effect on the respiratory system, Provides relief from Sore Throat and Tonsillitis for Men & Woman."
            price="Rs. 99.00"
            add={props.fun}
          />

          <Tproduct1
            tproductimg={Tproduct2img}
            heading="Sage & Seas"
            description="Sages & Seas Haemogrow syrup with unique formulation based on louh bhasam. Helps to strengthening the immune system"
            price="Rs. 440.00"
            add={props.fun}
          />

          <Tproduct1
            tproductimg={Tproduct3img}
            heading="Rootin"
            description="ROOTIN All greens powder (mint flavour). Helps to reduce fatigue to the minimum level, Supports Healthy Metabolism, No artificial additives -250 gm"
            price="Rs. 2999.00"
            add={props.fun}
          />

          <Tproduct1
            tproductimg={Tproduct4img}
            heading="Da Maulik Organic"
            description="Damaulik Organics Wild forest honey 650gm -  Certified Organic ,No added Sugar, Preservatives and Colour ,100% Premium Quality"
            price="Rs. 999.00"
            add={props.fun}
          />
        </div>
      </div>
    </>
  );
}

export default Trendingproducts;
