import React from 'react';

const Description = ({text}) => {

    const descriptionStyle = {
        fontSize: '12px',
    };
    return(
        <div style={descriptionStyle}>{text}</div>
    );
}; 

export default Description;