import './style.scss';
import Quote from '../../components/quote';
import Footer from '../../components/footer';
import { Link } from 'react-router-dom';

export default function Filtered( {filtered, author} ) {
  const filteredList = () => filtered.map((quote,index) => { 
    return <Quote key={index} quote={quote.quoteText} />
  })
  return (
    <div className='filtered'>
      <div className="author">{author}</div>
      {filteredList()}
      <Link to='/' className='previous'>previous</Link>
      <Footer />
    </div>
  )
}
