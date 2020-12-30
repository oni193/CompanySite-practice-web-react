import React from 'react';
import TopIcon from './assets/arrow.png';
import styled from 'styled-components';

const Arrow = ({...props}) => {
    const ArrowIcon = styled.img`
        position : fixed;
        top : 830px;
        left : 1750px;
        width : 60px;
        height : auto;
        src : Icon;
        z-index : 300;
    `;
    ArrowIcon.defaultProps = {
        src : TopIcon,
    };


    return (
            <ArrowIcon {...props}/>
    );


};

export default Arrow;