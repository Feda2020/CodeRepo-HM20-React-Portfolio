import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>About</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="assets/img/feda.JPG"
              text="I'm a Full Stack Web Development student at the University of Texas San Antonio. In the class I learned
              interesting coding languages such as html, CSS, JavaScript, Jquery, APIs, NodeJS, Express MYSQL, MVC and more. 
              I'm also bilingual speaks Arabic and English with the ability to translate, edit in both languages."
              label="Feda Zidan"
              path="/about"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
