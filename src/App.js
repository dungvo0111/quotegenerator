import React, { useState, useEffect } from 'react';

import './App.css';

function App() {
  const URL = "https://api.quotable.io/random"
  const [quote, setQuote] = useState([{content:'', author:''}])
  
  useEffect(() => getNextQuote(), [])
  
  function getRandomQuote() {
    return fetch(URL)
      .then(response => response.json())
      .then(data => [data.content, data.author])
  }

  async function getNextQuote() {
    const [ q, a ] = await getRandomQuote()
    setQuote({content: q, author: a})
    
  }

  return (
    <div id="quote-box">
      <div id="text">"{quote.content}"</div>
      <div id="author">--{quote.author}--</div>
      <a className="twitter-share-button" href="https://twitter.com/intent/tweet" id="tweet-quote">
        <i className="fa fa-twitter"></i></a>
      <button id="new-quote" className="btn" onClick={getNextQuote}>New Quote</button>
    </div>
  );
}

export default App;
