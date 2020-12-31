import React from 'react';
import useScroll from './components/function/useScroll';
import blueLogo from './assets/finelab.png';
import Navi from './components/navigation/Navi';
import styled from 'styled-components';

const Header = () => {

    const {clickMove}= useScroll();

    const Head = styled.div`
        display : grid;
        grid-template-columns : 1fr 7fr;
        grid-template-rows : 1fr;
        grid-column-gap : 1em;
        position : fixed;
        top: 0;
        width : 100%;
        height : 100px;
        background-color : white;
        border-bottom : 1px solid black;
        z-index : 300;
    `
    const logoStyle = {
        width: '200px',
        height: '50px',
        padding : '20px',
        cursor : 'pointer'
    };


    return (
        <Head>
            <img src={blueLogo} 
                 style={logoStyle} 
                 alt="logo"
                 onClick={clickMove} 
                 />
            <Navi/>
        </Head>
    );
}

export default Header;