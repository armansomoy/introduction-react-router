import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
    console.log(error);
    const { status, statusText} = error;
    return (
        <div>
            <h1 style={{color: 'red'}}> {status} {statusText}</h1>
        </div>
    );
};

export default Error;