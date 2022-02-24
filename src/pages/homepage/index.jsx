import './style.scss';
import Quote from '../../components/quote';
import Author from '../../components/author';
import Footer from '../../components/footer';

export default function Homepage( {quote, author, genre } ) {
  return (
    <div className='homepage'>
      <Quote quote= {quote} />
      <Author author={author} genre={genre} />
      <Footer />
    </div>
    
  )
}
