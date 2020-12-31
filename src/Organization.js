import React from 'react';
import styled from 'styled-components';
import Image from './assets/organization.jpg'
import Footer from './Footer.js';

const Organization = () => {
    const Box = styled.div`
        width: auto;
        height: 700px;
        padding-left : 25%;
        padding-right : 10%;
        margin-top: 200px;
    `;

    return(
        <div>
            <Box>
                <img src ={Image}/>
            </Box>
            <Footer/>
        </div>
    );
};

export default Organization;
