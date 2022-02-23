import React, { useEffect, useState } from 'react'

export default function Homepage() {
  const [quotesData, setquotesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log('fetching data...');
      const response = await fetch('https://quote-garden.herokuapp.com/api/v3/quotes?limit=1000')
      const quotes = await response.json()
      setquotesData(quotes.data)
    }
    fetchData()
  }, [])


  return (
    <div>
      <h1>Homepage</h1>
      <div>{JSON.stringify(quotesData)}</div>
    </div>
    
  )
}
