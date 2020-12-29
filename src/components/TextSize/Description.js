import React from 'react';

const Description = ({text}) => {

    const descriptionStyle = {
        fontSize: '12px',
    };
    return(
        <span style={descriptionStyle}>{text}</span>
    );
}; 

export default Description;