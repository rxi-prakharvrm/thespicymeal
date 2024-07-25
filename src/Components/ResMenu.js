import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RESMENU_API from '../utils/Constants';

const ResMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();

    const fetchMenu = async () => {
        try {
            const response = await fetch(`${RESMENU_API}${resId}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            console.log(jsonData.data.cards[2].card.card.info.name);
            setResInfo(jsonData.data);
        } catch (error) {
            console.error('Fetch error:', error);
            setResInfo(null); // Set state to null or some error state as needed
        }
    };

    useEffect(() => {
        fetchMenu();
    }, [resId]);    

    const { name } = resInfo?.cards[2]?.card?.card?.info || {};

    return (
        <>
            <h1>Restaurant's Menu</h1>
            <h1>{name || 'No name available'}</h1>
        </>
    );
};

export default ResMenu;
