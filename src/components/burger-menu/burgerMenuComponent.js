import React, { Component } from "react";
import "../burger-menu/burgerMenuStyle.css";

export default class BurgerMenuComponent extends Component {
  render() {
    return (
      <aside className="burger-menu">
        <a href="#" className="burger-menu__button">
          <span className="burger-menu__line"></span>
        </a>
        <nav className="burger-menu__nav">
          <a href="#" id="1" className="burger-menu__link">
            Incompleted
          </a>
          <a href="#" id="2" className="burger-menu__link">
            Filter
          </a>
          <input type="text" className="burger-menu__filter hide" />
        </nav>
        <div className="burger-menu__overlay"></div>
      </aside>
    );
  }
}

/* const burgerMenu = document.querySelector(".burger-menu");
const btnBurgerMenu = document.querySelector(".burger-menu__button");
const burgerNav = document.querySelector(".burger-menu__nav");
const overlay = document.querySelector(".burger-menu__overlay");


const burgerChangeVision = () => {
  burgerMenu.classList.toggle("burger-menu__active");
};

btnBurgerMenu.addEventListener("click", () => burgerChangeVision());

overlay.addEventListener("click", () => burgerChangeVision()); */
