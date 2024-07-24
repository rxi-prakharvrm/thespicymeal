import React from 'react'
import { Link } from 'react-router-dom';

const HeaderMenu = () => {
    return (
        <>
            <ul className="menu-items">
                <li className="item"><Link to="/swiggy-corporate">Swiggy Corporate</Link></li>
                <li className="item"><Link to="/search">Search</Link></li>
                <li className="item"><Link to="/offers">Offers</Link></li>
                <li className="item"><Link to="/help">Help</Link></li>
                <li className="item"><Link to="/signIn">Sign In</Link></li>
                <li className="item"><Link to="/cart">Cart</Link></li>
            </ul>
        </>
    )
}

export default HeaderMenu