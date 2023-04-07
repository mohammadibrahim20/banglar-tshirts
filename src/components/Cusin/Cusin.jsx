import React from 'react';
import Friend from '../Friend/Friend';

const Cusin = ({children, hasFeiends, ring}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p><small>{children}</small></p>
            {
            hasFeiends &&
            <Friend ring={ring}></Friend>
            }
        </div>
    );
};

export default Cusin;