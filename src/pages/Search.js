import React, { useState } from 'react'
import './search.css';
import SearchIcon from '@material-ui/icons/Search'
import MicIcon from '@material-ui/icons/Mic'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom';
import { useStatevalue } from '../context/StateProvider';
import { actionTypes } from '../context/AppReducer';
function Search({ hideButtons = false }) {
    const [{}, dispatch] = useStatevalue();
    const [input, setInput] = useState("");
    const history = useHistory();
    const search = e => {
        e.preventDefault();
        dispatch({
            type: actionTypes.SET_ACTION_TERM,
            term: input
        })
        console.log('You hit the button ', input)
        history.push('/search');
    }

    return (
        <form className='search'>
            <div className='search_input'>
                <SearchIcon className='Input_icon' />
                <input type="text" value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon />
            </div>
            {!hideButtons ? (<div className="search_buttons">
                <Button onClick={search} type="submit" variant="outlined">Google Search</Button>
                <Button variant='outlined'>I am feeling lucky</Button>
            </div>) :
                (<div className="search_buttons">
                    <Button className="Buttons_hidden" onClick={search} type="submit" variant="outlined">Google Search</Button>
                    <Button className="Buttons_hidden" variant='outlined'>I am feeling lucky</Button>
                </div>)}
        </form>
    )
}

export default Search
