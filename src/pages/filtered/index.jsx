import './style.scss';
import Quote from '../../components/quote';
import Footer from '../../components/footer';

export default function Filtered( {filtered, author} ) {
  const filteredList = () => filtered.map((quote,index) => { 
    return <Quote key={index} quote={quote.quoteText} />
  })
  return (
    <div className='filtered'>
      <div className="author">{author}</div>
      {filteredList()}
      <Footer />
    </div>
  )
}
