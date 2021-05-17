import "./App.css";
import Logo from "./logo.png";
import StaysList from "./StaysList";
function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="nav-bar">
          <img src={Logo} className="wind-logo" alt="wind logo" />

          <div className="search-bar">
            <div className="search-item right-border"> Add Location</div>
            <div className="search-item right-border"> Guests</div>
            <div className="search-item">
              {" "}
              <i className="material-icons search-icon">search</i>
            </div>
          </div>
        </div>
        <div className="wind-title">Stays in Finland</div>
        <StaysList />
      </div>
    </div>
  );
}

export default App;
