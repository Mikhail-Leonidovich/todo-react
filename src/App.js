import React from "react";

import "./style/style.css";
import "./burger-menu/burger-css/style.css";

function App() {
  return (
    <div className="App">
      <div className="burger-menu">
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
      </div>

      <section className="content">
        <div className="container">
          <div className="block">
            <div className="block__add">
              <input
                className="block__add-text"
                type="text"
                placeholder="Введите заметку"
              />
              <button type="button" className="btn-add">
                Add
              </button>
            </div>
            <div className="tasks__list">
              <div className="tasks__item hide">
                <div className="text"></div>
                <button className="btn-del"></button>
                <button className="btn-done"></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
