import "./App.css";
import React, { useState } from "react";
import MyList from "./MyList";
function App() {
  const [sliderSelect, setSliderSelect] = useState("all");
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const changeSlider = (value) => {
    setSliderSelect(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = [...todoList, { title: inputValue, completed: false }];
    setTodoList(newTodo);
    setInputValue("");
  };
  const completeTask = (title) => {
    let newTodo = [...todoList];
    for (var i = 0; i < newTodo.length; i++) {
      if (title === newTodo[i].title) {
        newTodo[i].completed = true;
        break;
      }
    }
    setTodoList(newTodo);
  };
  return (
    <div className="App">
      <div className="app-title">#todo</div>

      <div className="app-slider">
        <div className="slider-item" onClick={() => changeSlider("all")}>
          <div className={`slider-text ${sliderSelect === "all" && "active"}`}>
            All
          </div>
        </div>
        <div className="slider-item" onClick={() => changeSlider("active")}>
          <div
            className={`slider-text ${sliderSelect === "active" && "active"}`}
          >
            Active
          </div>
        </div>
        <div className="slider-item" onClick={() => changeSlider("completed")}>
          <div
            className={`slider-text ${
              sliderSelect === "completed" && "active"
            }`}
          >
            Completed
          </div>
        </div>
      </div>
      <form className="app-form">
        <input
          className="app-input"
          placeholder="add details"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="add-btn" onClick={(e) => handleSubmit(e)}>
          Add
        </button>
      </form>
      <div className="to-do">
        <MyList
          selected={sliderSelect}
          list={todoList}
          completeTask={completeTask}
        />
      </div>
    </div>
  );
}

export default App;
