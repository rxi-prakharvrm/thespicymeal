import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import ResCard from './ResCard';
import ResNotFound from './ResNotFound';

const Restaurant = () => {
    const [listOfRes, setListOfRes] = useState([]);
    const [filteredListOfRes, setFilteredListOfRes] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [isResFound, setIsResFound] = useState(true);

    const fetchResData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json();
        setListOfRes(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredListOfRes(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }

    useEffect(() => {
        fetchResData();
    }, [])

    return (
        <div className="res-list-ctr">
            <input type="text" id="search-res-box" placeholder="Search you favourite restaurant..." value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />

            <input type="button" id="search-res-btn" value="Search" onClick={() => {

                const filteredListOfRes = listOfRes.filter((res) => {
                    return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                })

                setFilteredListOfRes(filteredListOfRes);
                const isResFound = filteredListOfRes.length !== 0 ? true : false;
                console.log(filteredListOfRes, isResFound);
                setIsResFound(isResFound)
            }} />

            {
                isResFound ?
                <div className="res-list">
                    {filteredListOfRes.map((restaurant) => {
                        return (
                            <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                                <ResCard {...restaurant.info} />;
                            </Link>
                        )
                    })}
                </div> :
                <ResNotFound />
            }
        </div>
    );
}

export default Restaurant;