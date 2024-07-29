import React from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import { FaWifi, FaTimesCircle } from 'react-icons/fa';

const HeaderMenu = () => {
    const onlineStatus = useOnlineStatus();

    return (
        <ul className="menu-items">
            <li className="item">
                {onlineStatus ? <span className="status">Online</span> : <span className="status">Offline</span>}
                {onlineStatus ? <FaWifi color="green" /> : <FaTimesCircle color="red" />}
            </li>
            <li className="item"><Link to="/about">About</Link></li>
            <li className="item"><Link to="/contact">Contact</Link></li>
            <li className="item"><Link to="/grocery">Grocery</Link></li>
            {/* <li className="item"><Link to="/offers">Offers</Link></li>
            <li className="item"><Link to="/help">Help</Link></li> */}
            <li className="item"><Link to="/signIn">Sign In</Link></li>
            <li className="item"><Link to="/cart">Cart</Link></li>
        </ul>
    );
};

export default HeaderMenu;
