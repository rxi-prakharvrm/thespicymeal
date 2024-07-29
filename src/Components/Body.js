import React from 'react';  
import Food from './Food';
import Restaurant from './Restaurant';
import useOnlineStatus from '../utils/useOnlineStatus';

function Body() {
    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) return <h1 className="offline-status-msg">Looks like you're offline!</h1>

    return (
        <>
            <Food />
            <Restaurant />
        </>
    )
}

export default Body;
