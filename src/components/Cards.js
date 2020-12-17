import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>My Portfolio</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/assets/img/employeeDirectory.gif"
              text="This app is an employee directory. In this assignment we broke the application 
              to components then managed the components' respond to user events."
              label="Employee Directory"
              path="/portfolio"
              href="https://feda2020.github.io/CodeRepo-HM19-Employee-Directory/"
            />
            <CardItem
              src="assets/img/budget-tracker.gif"
              text="This budget tracker application use Mongo database and caching to allow for offline access and 
              functionality."
              label="Budget Tracker"
              path="/portfolio"
            />
            <CardItem
              src="assets/img/HerokuApp.gif"
              text="This application allows the user to write and store notes. The user can also delete the 
              notes they don't need anymore."
              label="Note Tacker"
              path="/portfolio"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="assets/img/pizzaClawWalkTrough.gif"
              text="This is a fun Pizza order application called Pizza Claw. The app was done with MySQL, Node, 
              Express, Handlebars and Passport."
              label="Pizza Claw"
              path="/portfolio"
            />
            <CardItem
              src="assets/img/heroku-burger.gif"
              text="This is a fun Burger Logger application allows the user to log in their favorite burgers. The app was done
              with MySQL, Handlebars and ORM."
              label="Eat Da Burger!"
              path="/portfolio"
            />
            <CardItem
              src="assets/img/WeatherApp.gif"
              text="Dashboard Weather App helps you as a traveler to search for different cities and check the weather 
              forecast and save your search."
              label="Weather Dashboard"
              path="/portfolio"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
