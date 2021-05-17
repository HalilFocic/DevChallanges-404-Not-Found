import "./App.css";
import Logo from "./logo.png";
function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="nav-bar">
          <img src={Logo} className="wind-logo" />

          <div className="search-bar">
            <div className="search-item right-border"> Add Location</div>
            <div className="search-item right-border"> Guests</div>
            <div className="search-item">
              {" "}
              <i
                className={`material-icons search-icon
            }`}
              >
                search
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
