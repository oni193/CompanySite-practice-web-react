import React from 'react';

const Subtitle = ({text}) => {

    const subTitleStyle = {
        fontSize: '20px',
    };
    return(
        <div style={subTitleStyle}>{text}</div>
    );
}; 

export default Subtitle;