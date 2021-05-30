import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
function App() {
  const [currentQuote, setCurrentQuote] = useState({});
  const [singleQuote, setSingleQuote] = useState(true);
  const [multipleQuotes, setMultipleQuotes] = useState([]);
  const [displayAll, setDisplayAll] = useState(false);
  const generateQuote = () => {
    setDisplayAll(false);
    axios
      .get("https://quote-garden.herokuapp.com/api/v3/quotes/random", {
        params: {
          count: 3,
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setCurrentQuote(res.data.data[0]);
        setSingleQuote(true);
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
        setMultipleQuotes(res.data.data);
        setDisplayAll(true);
        setSingleQuote(false);
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
        {!singleQuote && currentQuote.quoteAuthor}
      </div>
      <div className="quote-container">
        <div className="quote-text">"{currentQuote.quoteText}"</div>
        {displayAll &&
          multipleQuotes.map((quote, index) => {
            if (quote.quoteText === currentQuote.quoteText || index === 2) {
              return null;
            }
            return <div className="quote-text">"{quote.quoteText}"</div>;
          })}
        {singleQuote && (
          <div className="quote-desc">
            <div>
              <div className="author">{currentQuote.quoteAuthor}</div>
              <div className="genre">{currentQuote.quoteGenre}</div>
            </div>
            <div className="quote-arrow" onClick={() => getAuthorQuotes()}>
              <span class="material-icons arrow-icon">arrow_forward</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
