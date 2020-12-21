import React from 'react';

const Description = ({text}) => {

    const descriptionStyle = {
        fontSize: '10px',
    };
    return(
        <div style={descriptionStyle}>{text}</div>
    );
}; 

export default Description;