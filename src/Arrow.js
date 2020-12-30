import React from 'react';
import useScroll from './components/function/useScroll';
import TopIcon from './assets/arrow.png';
import styled from 'styled-components';

const Arrow = ({...props}) => {

    const ArrowIcon = styled.img`
        position : fixed;
        top : 800px;
        left : 1750px;
        width : 60px;
        height : auto;
        src : Icon;
        border : 8px solid black;
        border-radius : 100px;
        padding : 10px;
        z-index : 30;
        cursor : pointer;
    `;
    ArrowIcon.defaultProps = {
        src : TopIcon,
    };

    const {clickMove}= useScroll();

    return (
            <ArrowIcon {...props} 
                onClick={clickMove}/>
    );


};

export default Arrow;