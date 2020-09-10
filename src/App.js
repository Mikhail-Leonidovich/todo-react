import React from "react";

import BurgerMenuComponent from "./components/burger-menu/burgerMenuComponent.js";
import TodoListComponent from "./components/todo-list/todoListComponent.js";

function App() {
  return (
    <div className="App">
      <BurgerMenuComponent />
      <TodoListComponent />
    </div>
  );
}

export default App;
