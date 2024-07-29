import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const useResMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();

    const fetchMenu = async () => {
        try {
            const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${resId}`);
            const jsonData = await response.json();
            setResInfo(jsonData.data);
        } catch (error) {
            console.error("Error fetching menu:", error);
        }
    };

    useEffect(() => {
        fetchMenu();
    }, [resId]);

    return ({resInfo});
}

export default useResMenu;