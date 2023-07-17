import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <div className="content">
        <h3>.TRAVEL.</h3>
        <h1>Welcome to Long Khanh</h1>
        <h4> One of the a new, young and vibrant city of Vietnam</h4>
        <button type="button" class="btn btn-light">
          <a href="#explore">EXPLORE</a>
        </button>
      </div>
    </div>
  );
}
