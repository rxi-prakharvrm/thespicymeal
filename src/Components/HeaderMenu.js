import React from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import { FaWifi, FaTimesCircle } from 'react-icons/fa';

const HeaderMenu = () => {
    const onlineStatus = useOnlineStatus();

    return (
        <ul className="w-1/2 flex flex-row justify-between items-center">
            <li className="text-gray-500 px-4 font-semibold flex flex-row-reverse justify-center items-center border-solid border-2 rounded-full" dir="rtl">
                {onlineStatus ? <span className="p-2 mr-2 border-solid border-s-2 border-gray-200">Online</span> : <span className="p-2 mr-2 border-solid border-s-2 border-red-400">Offline</span>}
                {onlineStatus ? <FaWifi color="green" /> : <FaTimesCircle color="red" />}
            </li>
            <li className="text-gray-700 hover:text-orange-500 font-semibold"><Link to="/about">About</Link></li>
            <li className="text-gray-700 hover:text-orange-500 font-semibold"><Link to="/contact">Contact</Link></li>
            <li className="text-gray-700 hover:text-orange-500 font-semibold"><Link to="/grocery">Grocery</Link></li>
            <li className="text-gray-700 hover:text-orange-500 font-semibold"><Link to="/signIn">Sign In</Link></li>
            <li className="text-gray-700 hover:text-orange-500 font-semibold"><Link to="/cart">Cart</Link></li>
        </ul>
    );
};

export default HeaderMenu;
