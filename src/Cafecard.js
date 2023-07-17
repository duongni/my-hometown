import React from "react";
import phoco from "./img/pho-co.png";
import thehand from "./img/the-hand.png";
import vy from "./img/vy-coffee.png";
import "./Cafecard.css";
export default function Cafecard() {
  return (
    <div className="Cafecard">
      <div className="coffee-places">
        <h2>The city is famed for its locally cultivated coffee beans.</h2>
        <h3>Favorite coffee in Long Khanh</h3>
        <section>
          <div className="card1">
            <img
              src={phoco}
              alt="Pho Co Cafe"
              className="lk-status img-fluid"
            ></img>
            <div className="cafe1">
              <h6>Pho Co</h6>
              <p>
                Indulge in the rich flavors of Vietnamese coffee or sip on
                refreshing beverages amidst the enchanting ambiance of a
                traditional wooden house, immersing yourself in a cozy yet
                open-air setting.
              </p>
              <h7>Address</h7>
              <p>413 Hồ Thị Hương, Xuân Thanh</p>
              <button type="button" className="btn btn-light">
                <a
                  href="https://goo.gl/maps/2cNFwkXuvYZq6vNb7"
                  target="_blank"
                  rel="noreferrer"
                  title="Pho Co on Google Map"
                >
                  LEARN MORE
                </a>
              </button>
            </div>
          </div>
          <div className="card1">
            <img
              src={thehand}
              alt="The Hands' Coffee Roastery"
              className="lk-status img-fluid"
            ></img>
            <div className="cafe1">
              <h6>The HANDS' COFFEE Roastery</h6>
              <p>
                Experience a contemporary ambiance while savoring specialty
                beverages and traditional Vietnamese coffee at this modern
                establishment. It's an ideal spot for meet-ups and productive
                work sessions.
              </p>
              <h7>Address</h7>
              <p>2A Hồ Tùng Mậu, Xuân An</p>
              <button type="button" className="btn btn-light">
                <a
                  href="https://goo.gl/maps/XuaHa82YV6zjM8vR8"
                  target="_blank"
                  rel="noreferrer"
                  title="The Hand's Coffee on Google Map"
                >
                  LEARN MORE
                </a>
              </button>
            </div>
          </div>
          <div className="card1">
            <img src={vy} alt="Vy Cafe" className="lk-status img-fluid"></img>
            <div className="cafe1">
              <h6>The Coffee Vy's</h6>
              <p>
                This coffee shop caters to diverse tastes by offering specialty
                drinks and coffee, complemented by various seating arrangements
                that create unique atmospheres. It's a good choice for meet-ups
                with friends or colleagues.
              </p>
              <h7>Address</h7>
              <p>45 Nguyễn Trãi, Xuân Hoà</p>
              <button type="button" className="btn btn-light">
                <a
                  href="https://goo.gl/maps/XLJEVS7bpqbNPGDTA"
                  target="_blank"
                  rel="noreferrer"
                  title="The Coffee Vy's on Google Map"
                >
                  LEARN MORE
                </a>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
