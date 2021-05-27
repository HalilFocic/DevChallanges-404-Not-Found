import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="app-title">#todo</div>

      <div className="app-slider">
        <div className="slider-item">
          <div className="slider-text">All</div>
        </div>
        <div className="slider-item">
          <div className="slider-text">Active</div>
        </div>
        <div className="slider-item">
          <div className="slider-text">Completed</div>
        </div>
      </div>
      <div className="app-form">
        <input className="app-input"></input>
        <button className="add-btn">Add</button>
      </div>
    </div>
  );
}

export default App;
