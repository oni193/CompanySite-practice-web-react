import React , { useState }from 'react';
import TopIcon from './assets/arrow.png';
import styled from 'styled-components';

const Arrow = ({...props}) => {

    const [goUp, setGoUp] = useState();
    
    const clickIcon = () => {
        setGoUp(window.scrollTo({
            top : 0,
            left : 0,
            behavior : 'smooth',
        }));
    }
    
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


    return (
            <ArrowIcon {...props} onClick={clickIcon}/>
    );


};

export default Arrow;