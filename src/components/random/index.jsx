import CachedIcon from '@mui/icons-material/Cached';
import './style.scss';

export default function Random({ handleClick, datafetch }) {
    return (
        <>  {datafetch ?
            <button className='random' onClick={handleClick}>
                random
                <CachedIcon style={{fontSize: '20px', paddingLeft: '5px'}} />
            </button>
            :
            <div className="wait">Fetching data please wait ...</div>
        }
        </>
    )
}
