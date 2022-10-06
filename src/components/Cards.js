import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

const cardCont01 = [
  {
    id: 1,
    src: "images/img-9.jpg",
    text: "World Space Week: Sustaining astronomy in an age of satellite megaconstellations",
    label: "TECH",
    path: "/services",
  },
  {
    id: 2,
    src: "images/img-2.jpg",
    text: "See the moon and Saturn close together in the night sky tonight (Oct. 5)",
    label: "SPACEFLIGHT",
    path: "/services",
  },
];

const cardCont02 = [
  {
    id: 3,
    src: "images/img-3.jpg",
    text: "SpaceX launches Crew-5 astronauts on historic flight to space station for NASA",
    label: "SPACEFLIGHT",
    path: "/services",
  },
  {
    id: 4,
    src: "images/img-4.jpg",
    text: "Iconic James Webb Space Telescope images get X-ray vision boost",
    label: "TECH",
    path: "/services",
  },
  {
    id: 5,
    src: "images/img-8.jpg",
    text: "Nanoracks tests tech to slice up space junk in orbit for 1st time",
    label: "SCIENCE",
    path: "/services",
  },
];

function Cards() {
  return (
    <div className="cards">
      <h1>Check out the News about the Universe</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {cardCont01.map((txt) => (
              <CardItem
                key={txt.id}
                src={txt.src}
                text={txt.text}
                label={txt.label}
                path={txt.path}
              />
            ))}
          </ul>
          <ul className="cards__items">
            {cardCont02.map((txt) => (
              <CardItem
                key={txt.id}
                src={txt.src}
                text={txt.text}
                label={txt.label}
                path={txt.path}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
