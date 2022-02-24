import { Link } from 'react-router-dom';
import './style.scss';

export default function Author({ author, genre }) {
    return (
        <div className='author-card'>
            <div className='author-quote'>
                <div className="author-name"> {author} </div>
                <div className="quote-genre"> {genre} </div>
            </div>
            <div className="more">
                <Link className='kuch' to='authors'>next</Link>     
            </div>
        </div>
    )
}
