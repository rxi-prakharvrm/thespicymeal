import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useOnlineStatus from './useOnlineStatus';

const useResMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();

    const onlineStatus = useOnlineStatus();
    
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
    
    return (
        onlineStatus ? {resInfo} :
        <h1 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[2.2rem] text-gray-400"><span>Looks like you're offline!</span></h1>
    )
}

export default useResMenu;