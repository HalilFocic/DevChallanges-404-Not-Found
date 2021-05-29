import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
function App() {
  const [currentQuote, setCurrentQuote] = useState({});
  const [singleQuote, setSingleQuote] = useState(false);
  const generateQuote = () => {
    axios
      .get("https://quote-garden.herokuapp.com/api/v3/quotes/random", {
        params: {
          count: 3,
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setCurrentQuote(res.data.data[0]);
      });
  };
  const getAuthorQuotes = () => {
    axios
      .get("https://quote-garden.herokuapp.com/api/v3/quotes/random", {
        params: {
          count: 3,
          author: currentQuote.quoteAuthor,
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setCurrentQuote(res.data.data[0]);
      });
  };
  useEffect(() => {
    axios
      .get("https://quote-garden.herokuapp.com/api/v3/quotes/random", {
        params: {
          count: 3,
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setCurrentQuote(res.data.data[0]);
      });
  }, []);
  return (
    <div className="App">
      <div className="random" onClick={() => generateQuote()}>
        random <i className="material-icons refresh-icon">autorenew</i>
      </div>
      <div className="author-top">
        {singleQuote && currentQuote.quoteAuthor}
      </div>
      <div className="quote-container">
        <div className="quote-text">"{currentQuote.quoteText}"</div>

        <div className="quote-desc">
          <div>
            <div className="author">{currentQuote.quoteAuthor}</div>
            <div className="genre">{currentQuote.quoteGenre}</div>
          </div>
          <div className="quote-arrow" onClick={() => getAuthorQuotes()}>
            <span class="material-icons arrow-icon">arrow_forward</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
