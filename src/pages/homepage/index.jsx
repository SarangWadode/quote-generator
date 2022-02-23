import React, { useEffect, useState } from 'react';
import './style.scss';
import Quote from '../../components/quote';
import Author from '../../components/author';

export default function Homepage() {
  const [quotesData, setquotesData] = useState([]);
  const [quote, setquote] = useState('To share our stories is not only a worthwhile endeavor for the storyteller, but for those who hear our stories and feel less alone because of it.');
  const [author, setauthor] = useState('Joyce Maynard');
  const [genre, setgenre] = useState('Inspirational');

  useEffect(() => {
    const fetchData = async () => {
      console.log('fetching data...');
      const response = await fetch('https://quote-garden.herokuapp.com/api/v3/quotes?limit=7000')
      const quotes = await response.json()
      console.log(quotes.data);
      setquotesData(quotes.data)
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
    <div className='homepage'>
      <button onClick={handleClick}>Click me</button>
      <Quote quote= {quote} />
      <Author author={author} genre={genre} />
    </div>
    
  )
}
