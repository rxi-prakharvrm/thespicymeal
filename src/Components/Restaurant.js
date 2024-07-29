import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import ResCard from './ResCard';
import ResNotFound from './ResNotFound';
import ShimmerRestaurant from './ShimmerRestaurant';
import useRestaurant from '../utils/useRestaurant';

// Shows the restaurants
const Restaurant = () => {
    const [searchText, setSearchText] = useState("");
    const [isResFound, setIsResFound] = useState(true);

    // This custom hook is responsible for fetching the restraunt data from the api and updating state variables listOfRes and filteredListOfRes
    const {listOfRes, filteredListOfRes, setFilteredListOfRes} = useRestaurant();

    // If listOfRes contains nothing, show shimmer UI
    return listOfRes.length === 0 ? 
        <ShimmerRestaurant /> 
        : (
        <div className="res-list-ctr">
            {/* Filter restraunts based on its name */}
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
                // if restaurant found, show that else show an error msg that 'restaurant not found'
                isResFound ?
                    <div className="res-list">
                        {filteredListOfRes.map((restaurant) => {
                            return (
                                <Link className="res-card-ctr" key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                                    <ResCard {...restaurant.info}/>
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