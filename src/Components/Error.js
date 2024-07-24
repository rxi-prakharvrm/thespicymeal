import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err = useRouteError();

    return (
        <>
            <h1>Opps!!!</h1>
            <h1>Something went wrong!</h1>
            <h4>{err.status}: {err.statusText}</h4>
        </>
    )
}

export default Error