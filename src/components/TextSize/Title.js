import React from 'react';

const Title = ({text}) => {
    
    const titleStyle = {
        fontSize: '16px',
        fontWeight: 'bold'
    };
    return(
        <div style={titleStyle}>{text}</div>
    );
}

export default Title;