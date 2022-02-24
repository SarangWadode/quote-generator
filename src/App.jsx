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
  const [filtered, setfiltered] = useState([{quoteText:"Thomas Jefferson once said, 'We should never judge a president by his age, only by his works.' And ever since he told me that, I stopped worrying."},
   {quoteText:"Information is the oxygen of the modern age. It seeps through the walls topped by barbed wire, it wafts across the electrified borders."}]);
  const [datafetch,setfetch] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      console.log('fetching data...');
      const response = await fetch('https://quote-garden.herokuapp.com/api/v3/quotes?limit=1000')
      const quotes = await response.json()
      // console.log(quotes.data);
      console.log('data fetched');
      setquotesData(quotes.data);
      setfetch(true);
      // console.log(quotes.data);
      // const filteredList = quotes.data.filter(quote => {
      //   return quote.quoteAuthor === 'Ronald Reagan';
      // })
      // setfiltered(filteredList);
      // console.log(filteredList);
    }
    fetchData()
  }, [])

  const handleClick = () => {
    const random = Math.floor(Math.random() * quotesData.length)
    setquote(quotesData[random].quoteText)
    setauthor(quotesData[random].quoteAuthor)
    setgenre(quotesData[random].quoteGenre)
    const filteredList = quotesData.filter(quote => {
      return quote.quoteAuthor === quotesData[random].quoteAuthor;
    })
    setfiltered(filteredList);
    // console.log(filteredList);

  }
  return (
    <div className="App">
      <Random handleClick={handleClick} datafetch={datafetch} /> 
      <Homepage quote={quote} author={author} genre={genre} />
      {/* <Filtered filtered={filtered} author={author} /> */}
    </div>
  );
}

export default App;
