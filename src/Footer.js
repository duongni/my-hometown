import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="Footer">
      <div className="content1">
        <h5>About City</h5>
        <ul>
          <li>
            <a
              href="https://en.wikipedia.org/wiki/Long_Kh%C3%A1nh"
              target="_blank"
              rel="noreferrer"
              title="Quick overview of Long Khanh City"
            >
              Overview
            </a>
          </li>
          <li>
            <a
              href="https://goo.gl/maps/G9sc6DkgnbckjqHG9"
              target="_blank"
              rel="noreferrer"
              title="Long Khanh City Map"
            >
              Map
            </a>
          </li>
          <li>
            <a
              href="https://longkhanh.dongnai.gov.vn/Pages/home.aspx"
              target="_blank"
              rel="noreferrer"
              title="Long Khanh News"
            >
              News
            </a>
          </li>
        </ul>
      </div>
      <div className="content1">
        <h5>Long Khanh Communities</h5>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/groups/343636420227"
              target="_blank"
              rel="noreferrer"
              title="Cong dong Long Khanh"
            >
              Cong Dong Long Khanh
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/groups/longkhanhtoiyeu/"
              target="_blank"
              rel="noreferrer"
            >
              Toi yeu Long Khanh Group
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/groups/longkhanhreviewdiadiem"
              target="_blank"
              rel="noreferrer"
              title="Restaurants, Places Review"
            >
              Long Khanh Review
            </a>
          </li>
        </ul>
      </div>
      <div className="content1">
        <h5>About this website</h5>
        <p>
          This website is a quick overview of Long Khanh City. The main goal
          build a picture of the city for new visitor. Hope these resources can
          help their experience of discover and explore the city more enjoyable.
        </p>
      </div>
    </div>
  );
}
