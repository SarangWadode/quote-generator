import './style.scss';
import Quote from '../../components/quote';
import Footer from '../../components/footer';

export default function Filtered( {filtered, author} ) {
  const listItems = filtered.forEach((quote) => {console.log(quote.quoteText)
  return quote.quoteText
  }
  )
  return (
    <div className='filtered'>
      <div className="author">{author}</div>
      <Quote quote="simple quote is here some more content coming form me where is the side bar" />
      {console.log(listItems)}
      <Footer />
    </div>
  )
}
