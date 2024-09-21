import React from 'react';  
import Food from './Food';
import Restaurant from './Restaurant';
import useOnlineStatus from '../utils/useOnlineStatus';

function Body() {
    const onlineStatus = useOnlineStatus();

    return onlineStatus ?
    <>
        <Food />
        <Restaurant />
    </> :
    <h1 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[2.2rem] text-gray-400"><span>Looks like you're offline!</span></h1>
}

export default Body;
