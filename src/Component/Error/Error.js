import React from 'react';
import './Error.css'

const Error = () => {
    return (
        <div className='error'>
            <h1>This Route Is Not Found 404 <span className='close'>X</span></h1>
            <br />
            <h3>Please Provide Original Route...</h3>
        </div>
    );
};

export default Error;