import { Link } from '@material-ui/core';
import React from 'react';
import Response from '../context/Response';
import { useStatevalue } from '../context/StateProvider';
import useGoogleSearch from '../context/useGoogleSearch';
import SearchIcon from '@material-ui/icons/Search'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import DescriptionIcon from '@material-ui/icons/Description'
import ImageIcon from '@material-ui/icons/Image'
import RoomIcon from '@material-ui/icons/Room'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Search from './Search';
import './searchPage.css';
export const SearchPage = () => {
    const [{ term }, dispatch] = useStatevalue();
    const {data } = useGoogleSearch(term);
    //const data = Response;
    console.log(data);
    return (
        <div className="searchpage">
            <div className="searchpage_header">
                <div >
                    <Link to="/">
                        <img className="searchPage_logo" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="googleLogo" />
                    </Link>

                </div>
                <div className="searchpageheader_Body">
                    <Search hideButtons />

                    <div className="searchbodyheader_Options">
                        <div className="searchbodyheader_Options_Left">
                            <div className="searchbodyheader_Option">
                                <SearchIcon />
                                <Link to="/all">All</Link>
                            </div>
                            <div className="searchbodyheader_Option">
                                <DescriptionIcon />
                                <Link to="/news">News</Link>
                            </div>
                            <div className="searchbodyheader_Option">
                                <ImageIcon />
                                <Link to="/images">Images</Link>
                            </div>
                            <div className="searchbodyheader_Option">
                                <LocalOfferIcon />
                                <Link to="/shopping">Shopping</Link>
                            </div>
                            <div className="searchbodyheader_Option">
                                <RoomIcon />
                                <Link to="/maps">Maps</Link>
                            </div>
                            <div className="searchbodyheader_Option">
                                <MoreVertIcon />
                                <Link to="/more">More</Link>
                            </div>
                        </div>
                        <div className="searchbodyheader_Options_Right">
                            <div className="searchbodyheader_Option">
                                <Link to="/settings">Settings</Link>
                            </div>
                            <div className="searchbodyheader_Option">
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {true &&
                <div className="searchpage_results">
                    <p className='searchpage_result_count'>
                        About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                    </p>
                    {data?.items.map(item =>
                        <div className='searchpage_result'>
                            <a href={item.link}>
                                {
                                    item.pagemap?.cse_image?.length >0 && item.pagemap?.cse_image[0]?.src && (
                                        <img className="searchpage_resultImage" src={
                                            item.pagemap?.cse_image?.length>0 &&
                                            item.pagemap?.cse_image[0]?.src
                                        } alt=""/>
                                    ) 
                                }
                                {item.displayLink}
                            </a>
                            <a href={item.link} className='searchpage_resultTitle'>
                                <h2>{item.title}</h2>
                            </a>
                            <p className='searchpageresult_Snippet'>
                                {item.snippet}
                            </p>
                        </div>
                    )

                    }
                </div>
            }
        </div>

    )
}