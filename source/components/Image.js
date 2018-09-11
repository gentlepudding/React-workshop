import React from 'react';

export const Image = (props) => {
    return props.public ? (
        <div 
            className = 'image'>
            <img src = { props.src } />
        </div>
    ) : null;
}
