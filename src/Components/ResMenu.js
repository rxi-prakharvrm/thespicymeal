import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ShimmerFood from './ShimmerFood'

const ResMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();

    const fetchMenu = async () => {
        const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${resId}`);
        const jsonData = await response.json();
        setResInfo(jsonData.data);
    };

    useEffect(() => {
        fetchMenu();
    }, [resId]);

    if(resInfo === null) return <ShimmerFood />

    const { name } = resInfo?.cards[2]?.card?.card?.info;
    const carousel = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel;
    console.log(carousel);
    
    return (
        <div className="res-menu-outer-ctr">
            <h1 className="res-menu-header">{name}</h1>
            {
                carousel.map((item) => {
                    return (
                        <div className="dish-outer-ctr" key={item.dish.info.id}>
                            <div className="dish-details-ctr">
                                <span className="dish-veg-classifier">{item.dish.info.itemAttribute.vegClassifier}</span>
                                <h2 className="dish-name">{item.dish.info.name}</h2>
                                <p className="dish-price">₹{(item.dish.info.defaultPrice || item.dish.info.price) / 100}</p>
                                <p className="dish_description">{item.dish.info.description}</p>
                            </div>
                            <div className="dish-image-ctr">
                                <img className="dish-image" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.dish.info.imageId}`}></img>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default ResMenu;
