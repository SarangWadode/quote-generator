import React, { useEffect, useState } from 'react';
import './App.css';
import Homepage from './pages/homepage';
import Filtered from './pages/filtered';
import Random from './components/random';

function App() {
  const [quotesData, setquotesData] = useState([]);
  const [quote, setquote] = useState("Art is man's constant effort to create for himself a different order of reality from that which is given to him.");
  const [author, setauthor] = useState('Chinua Achebe');
  const [genre, setgenre] = useState('art');
  const [more, setmore] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      console.log('fetching data...');
      const response = await fetch('https://quote-garden.herokuapp.com/api/v3/quotes?limit=1000')
      const quotes = await response.json()
      // console.log(quotes.data);
      console.log('data fetched');
      setquotesData(quotes.data);
      // console.log(quotes.data);
      const authors = quotes.data.filter(quote => {
        return quote.quoteAuthor === 'Ronald Reagan';
      })
      setmore(authors);
    }
    fetchData()
  }, [])

  const handleClick = () => {
    const random = Math.floor(Math.random() * quotesData.length)
    setquote(quotesData[random].quoteText)
    setauthor(quotesData[random].quoteAuthor)
    setgenre(quotesData[random].quoteGenre)
  }
  return (
    <div className="App">
      <Random handleClick={handleClick} />
      <Homepage quote={quote} author={author} genre={genre} />
      {/* <Filtered /> */}
    </div>
  );
}

export default App;
