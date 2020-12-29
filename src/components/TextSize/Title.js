import React from 'react';

const Title = ({text}) => {
    
    const titleStyle = {
        fontSize: '25px',
        fontWeight: '400'
    };
    return(
        <div style={titleStyle}>{text}</div>
    );
}

export default Title;