import {useState,useEffect} from 'react';
import {APIKey} from './APIKey';
const contextKey = "034fd81692e5befff";
const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async() => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${APIKey}&cx=${contextKey}&q=${term}`
            ).then(response=>response.json())
            .then(result=>{setData(result)})
        }
        fetchData();
    }, [term])
    return {data}
}

export default useGoogleSearch;