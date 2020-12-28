import React from 'react';
import blueLogo from './assets/finelab.png';
import Navi from './components/navigation/Navi';

const Header = () => {

    const naviStyle = {
        display: 'flex',
        height:'500px',
        backgroundColor: '#ffec99',
    };

    const logoStyle = {
        width: '200px',
        height: '50px',
    };
    return (
        <div style={naviStyle}>
            <img src={blueLogo} style={logoStyle}/>
            <Navi/>
        </div>
    );
}

export default Header;