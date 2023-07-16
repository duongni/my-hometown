import React from "react";
import lkStatus from "./img/lk-status.jpeg";
import "./Main.css";
export default function Main() {
  return (
    <div className="Main">
      <section>
        <div>
          <img
            src={lkStatus}
            alt="Tuong Dai Doc Lap"
            className="lk-status img-fluid"
          />
        </div>
        <div className="column-right">
          <h2>Why Long Khanh?</h2>
          <h3>Young city</h3>
          <p>
            Unlike the busy metropolises of Hanoi and Ho Chi Minh, Long Khanh
            provides a unique opportunity to experience a clean, slower-paced
            and more authentic Vietnamese lifestyle, but is still close enough
            to the city to enjoy both scenes. Long Khanh is only about an hour
            away from Vung Tau, sothe beach is close by, too! It's the perfect
            place to have a tranquil lifestyle, a dynamic working environment,
            AND lots of options for places to visit in your free time.
          </p>
          <p>
            Long Khanh also has many other conveniences to make your stay there
            enjoyable. The new Hoang Duc shopping mall and Xuan Binh department
            stores have everything you need, and the food at Long Khanh market
            is both cheap and fresh. There's a cinema, modern pharmacies and
            hospitals, and many local convenience stores for your everyday
            needs!
          </p>
        </div>
      </section>
    </div>
  );
}
