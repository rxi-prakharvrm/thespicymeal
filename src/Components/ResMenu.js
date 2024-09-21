import ShimmerFood from './ShimmerFood';
import useResMenu from '../utils/useResMenu';
import vegImg from '../images/vegetarian.png';
import nonVegImg from '../images/non-vegetarian.png';

const ResMenu = () => {
    const { resInfo } = useResMenu();

    if (resInfo === null) return <ShimmerFood />;

    const { name } = resInfo?.cards[2]?.card?.card?.info || {};

    let itemCards;
    for (let i = 0; i < resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.length; i++) {
        itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[i]?.card?.card?.itemCards;
        if (itemCards) break;
    }

    if (!itemCards) return <div>No items available</div>;

    return (
        <div className="py-24 px-12 xl:px-96 lg:px-64 md:px-48 sm:px-24 flex flex-col justify-center items-center">
            <h1 className="mb-24 font-extrabold text-6xl text-center text-gray-800">{name}</h1>
            {itemCards.map((item) => (
                <div className="w-full max-w-7xl py-16 border-t-2 border-gray-200 flex justify-between items-center" key={item.card.info.id}>
                    <div className="w-2/4 mr-16">
                        {item.card.info.itemAttribute.vegClassifier === "VEG" ? <img className="mb-4 w-8" src={vegImg} /> : <img className="mb-4 w-8" src={nonVegImg} />}
                        <h2 className="mb-4 text-4xl font-bold">{item.card.info.name}</h2>
                        <p className="mb-4 text-4xl font-bold text-amber-600">₹{(item.card.info.defaultPrice || item.card.info.price) / 100}</p>
                        <p className="text-gray-600 text-2xl">{item.card.info.description}</p>
                    </div>
                    <div className="relative">
                        {item.card.info.imageId !== undefined ? (
                            <img
                                className="rounded-xl w-[20rem] h-[20rem] shadow-2xl shadow-gray-400 background-cover"
                                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`}
                                alt={item.card.info.name}
                            />
                        ) : 
                            <div class="w-full h-full px-16 py-24 rounded-xl bg-gray-400 text-gray-700 text-4xl text-center font-bold shadow-2xl shadow-gray-400">No preview</div>
                        }
                        <button className="px-8 py-2 bg-white absolute -bottom-8 left-1/2 -translate-x-1/2 border-2 border-green-600 rounded-lg">
                            ADD
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ResMenu;
