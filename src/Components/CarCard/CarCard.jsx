import React from "react";
import "./carCard.css";

function CarCard() {
  return (
    <div className="carCard">
      <div className="carCardWrapper">
        <div className="carCardBoxs">
          <div className="carCardBox orangeBg">
            <img
              src="images/icon-sedans.svg"
              alt=""
              className="carCardBoxImg"
            />
            <h1 className="carCardBoxTitle">Sedans</h1>
            <p className="carCardBoxDesc">
              Choose a sedan for its affordability and excellent fuel economy.
              Ideal for cruising in the city or on your next road trip.
            </p>
            <button className="carCardBoxButton orangeText">Learn More</button>
          </div>
          <div className="carCardBox darkCyanBg">
            <img src="images/icon-suvs.svg" alt="" className="carCardBoxImg" />
            <h1 className="carCardBoxTitle">SUVs</h1>
            <p className="carCardBoxDesc">
              Take an SUV for its spacious interior, power, and versatility.
              Perfect for your next family vacation and off-road adventures.
            </p>
            <button className="carCardBoxButton darkCyanText">Learn More</button>
          </div>
          <div className="carCardBox veryDarkCyanBg">
            <img
              src="images/icon-luxury.svg"
              alt=""
              className="carCardBoxImg"
            />
            <h1 className="carCardBoxTitle">Luxury</h1>
            <p className="carCardBoxDesc">
              Cruise in the best car brands without the bloated prices. Enjoy
              the enhanced comfort of a luxury rental and arrive in style.
            </p>
            <button className="carCardBoxButton veryDarkCyanText">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
