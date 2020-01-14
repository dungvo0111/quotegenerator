import React, { useState, useEffect } from 'react';

import './App.css';

function App() {
  const URL = "http://quotes.stormconsultancy.co.uk/random.json"
  const [quote, setQuote] = useState([])
  const [author, setAuthor] = useState([])
  
  useEffect(() => {getNextQuote()}, [])
  
  function getRandomQuote() {
    return fetch(URL)
      .then(response => response.json())
      .then(data => [data.quote, data.author])
  }

  async function getNextQuote() {
    const [ q, a ] = await getRandomQuote()
    setQuote(q)
    setAuthor(a)
  }



  

  return (
    <div id="quote-box">
      <div id="text">"{quote}"</div>
      <div id="author">--{author}--</div>
      <a class="twitter-share-button" href="twitter.com/intent/tweet" id="tweet-quote">
        <i class="fa fa-twitter"></i></a>
      <button id="new-quote" class="btn" onClick={getNextQuote}>New Quote</button>
    </div>
  );
}

export default App;
