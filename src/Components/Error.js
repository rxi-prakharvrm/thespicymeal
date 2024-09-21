import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err = useRouteError();

    return (
        <div className="flex flex-col justify-center items-center w-[100vw] h-[100vh] text-[2.2rem] text-gray-600">
            <h1>Opps!!! Some error occurred!</h1> <br />
            <h4>{err.status}: {err.statusText}</h4>
        </div>
    )
}

export default Error