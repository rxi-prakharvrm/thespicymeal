import { useState, useEffect } from 'react';

// it is responsible for fetching the list of restaurants from API
const useRestaurant = () => {
    const [listOfRes, setListOfRes] = useState([]);
    const [filteredListOfRes, setFilteredListOfRes] = useState([]);

    const fetchResData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.43891000&lng=77.00592000");
        const jsonData = await data.json();
        setListOfRes(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredListOfRes(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }
    
    useEffect(() => {
        fetchResData();
    }, [])

    return { listOfRes, filteredListOfRes, setFilteredListOfRes };
}

export default useRestaurant;