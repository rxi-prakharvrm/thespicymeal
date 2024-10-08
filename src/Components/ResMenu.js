import { useContext } from 'react';
import { MyContext } from './MyContext';
import Shimmer from './Shimmer';
import useResMenu from '../utils/useResMenu';
import vegImg from '../images/vegetarian.png';
import nonVegImg from '../images/non-vegetarian.png';

const ResMenu = () => {
    const { cartItems, setCartItems } = useContext(MyContext);
    const { resInfo } = useResMenu();

    if (resInfo === null) return <Shimmer />;

    const { name } = resInfo?.cards[2]?.card?.card?.info || {};

    let itemCards;
    for (let i = 0; i < resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.length; i++) {
        itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[i]?.card?.card?.itemCards;
        if (itemCards) break;
    }

    if (!itemCards) return <div>No items available</div>;

    const addToCart = (e, item) => {
        e.target.innerHTML = "ADDED";
        e.target.style.color = "white";
        e.target.style.backgroundColor = "green";
        setCartItems([...cartItems, item]);
        console.log(cartItems);
    }

    return (
        <div className="w-full bg-[#f7f7f7]">            
            <div className="max-w-[72rem] w-[90%] p-4 sm:p-8 md:p-12 lg:p-16 mx-auto flex flex-col justify-center items-center">
                <h1 className="my-24 font-extrabold text-4xl md:text-6xl text-center text-gray-800">{name}</h1>
                {itemCards.map((item) => (
                    <div className="w-full py-16 border-t-2 border-gray-200 flex flex-col sm:flex-row justify-between" key={item.card.info.id}>
                        <div className="sm:mr-8 relative w-[180px] h-[180px] rounded-2xl overflow-hidden inline-block align-center shadow-md shadow-gray-300">
                            {item.card.info.imageId !== undefined ? (
                                <img
                                    className="w-[180px] h-[180px] object-cover scale-110"
                                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`}
                                    alt={item.card.info.name}
                                />
                            ) : 
                                <div class="w-full h-full px-16 py-24 rounded-xl bg-gray-400 text-gray-700 text-4xl text-center font-bold shadow-lg shadow-gray-400">No preview</div>
                            }
                        </div>
                        <div className="w-full sm:w-[64%] mt-8 sm:mt-0">
                            <div className="flex justify-between">
                                <h2 className="mb-4 text-3xl sm:text-4xl font-semibold text-gray-700">{item.card.info.name}</h2>
                                {item.card.info.itemAttribute.vegClassifier === "VEG" ? <img className="mb-4 ml-4 w-[20px] h-[20px]" src={vegImg} alt="veg" /> : <img className="mb-4 ml-4 w-[20px] h-[20px]" src={nonVegImg} alt="non veg" />}
                            </div>
                            <p className="mb-4 text-2xl sm:text-3xl text-gray-700">₹{(item.card.info.defaultPrice || item.card.info.price) / 100}</p>
                            <p className="text-gray-600 text-2xl box line-clamp-3 box-orient-vertical overflow-hidden">{item.card.info.description}</p>
                            <button className="w-[12rem] h-[3.5rem] flex justify-center items-center mt-4 bg-white border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-lg transition-all ease-in duration-50" onClick={(e) => addToCart(e, item.card.info)} >
                                ADD
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ResMenu;
