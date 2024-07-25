import React from 'react';

const ShimmerRestaurant = () => {
    const allResCards = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <div className="shimmer-res-list-ctr">
            <div className="shimmer-search-bar"></div>
            <div className="shimmer-res-list">
                <div className="shimmer-res-cards">
                    {allResCards.map((_, index) => (
                        <div key={index} className="shimmer-res-card"></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShimmerRestaurant;
