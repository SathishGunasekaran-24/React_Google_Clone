import React from 'react'
import './Home.css';
import {Link} from "react-router-dom";
import Appsicon from "@material-ui/icons/Apps";
import {Avatar} from "@material-ui/core"
import Search from './Search';
function Home() {
    return (
        <div className="home">
            <div className='home_header'>
                <div className='home_headerLeftpanel'>
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                </div>
                <div className='home_headerRightpanel'>
                <Link to="/gmail">Gmail</Link>
                <Link to="/images">Images</Link>
                <Appsicon />
                <Avatar />
                </div>
            </div>
            <div className='home_body'>
                <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="googleLogo" />
                <div className='home_Container'>
                <Search />
                </div>
            </div>
        </div>
    )
}

export default Home
