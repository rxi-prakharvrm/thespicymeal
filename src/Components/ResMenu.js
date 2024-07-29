import ShimmerFood from './ShimmerFood';
import useResMenu from '../utils/useResMenu';
import vegImg from '../images/vegetarian.png';
import nonVegImg from '../images/non-vegetarian.png';

const ResMenu = () => {    
    const {resInfo} = useResMenu();

    if (resInfo === null) return <ShimmerFood />;

    const { name } = resInfo?.cards[2]?.card?.card?.info || {};

    let itemCards;
    for (let i = 0; i < resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.length; i++) {
        itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[i]?.card?.card?.itemCards;
        if (itemCards) break;
    }

    if (!itemCards) return <div>No items available</div>;

    return (
        <div className="res-menu-outer-ctr">
            <h1 className="res-menu-header">{name}</h1>
            {itemCards.map((item) => (
                <div className="dish-outer-ctr" key={item.card.info.id}>
                    <div className="dish-details-ctr">
                        <span className="dish-veg-classifier">
                            {
                                item.card.info.itemAttribute.vegClassifier === "VEG" ? <img src={vegImg} /> : <img src={nonVegImg} />
                            }
                        </span>
                        <h2 className="dish-name">{item.card.info.name}</h2>
                        <p className="dish-price">₹{(item.card.info.defaultPrice || item.card.info.price) / 100}</p>
                        <p className="dish-description">{item.card.info.description}</p>
                    </div>
                    <div className="dish-image-ctr">
                        <img
                            className="dish-image"
                            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`}
                            alt={item.card.info.name}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ResMenu;
