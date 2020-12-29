import React from 'react';
import blueLogo from './assets/finelab.png';
import Navi from './components/navigation/Navi';
import styled from 'styled-components';

const Header = () => {

    const Head = styled.div`
        display : flex;
        height : 100px;
        background-color : white;
        border-bottom : 1px solid black;
    `
    

    const logoStyle = {
        width: '200px',
        height: '50px',
    };
    return (
        <Head>
            <img src={blueLogo} style={logoStyle}/>
            <Navi/>
        </Head>
    );
}

export default Header;