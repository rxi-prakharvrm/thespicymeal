import { useState, useEffect } from 'react';
import useOnlineStatus from './useOnlineStatus';

// it is responsible for fetching the list of restaurants from API
const useRestaurant = () => {
    const [listOfRes, setListOfRes] = useState([]);
    const [filteredListOfRes, setFilteredListOfRes] = useState([]);

    const onlineStatus = useOnlineStatus();

    
    const fetchResData = async () => {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.43891000&lng=77.00592000");
            const jsonData = await data.json();
            setListOfRes(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
            setFilteredListOfRes(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        } catch(error) {
            console.error("Error fetching menu:", error);
        }
    }
    
    useEffect(() => {
        fetchResData();
    }, [])
    
    if(onlineStatus === false) return <h1 className="offline-status-msg">Looks like you're offline!</h1>
    return { listOfRes, filteredListOfRes, setFilteredListOfRes };
}

export default useRestaurant;