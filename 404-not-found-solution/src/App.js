import "./App.css";
import scarecrow from "./Scarecrow.png";
function App() {
  return (
    <div className="App">
      <div className="not-found">404 NOT FOUND</div>
      <div className="container">
        <section className="scarecrow">
          <img src={scarecrow} alt="scarecrow" />
        </section>
        <section className="bad-news">
          <div className="bad-news-title">I have bad news for you</div>
          <div className="bad-news-desc">
            The page you are looking for might be removed or is temporarily
            unavailable.
          </div>
          <button className="back-to-home">BACK TO HOMEPAGE</button>
        </section>
        <footer className="footer">Halil Focic @ DevChallenges.io</footer>
      </div>
    </div>
  );
}

export default App;
