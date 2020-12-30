import React from 'react';
import styled from 'styled-components';

import Image from './assets/organization.jpg'

const Organization = () => {
    const Box = styled.div`
        width: auto;
        height: 600px;
        padding-left : 25%;
        padding-right : 10%;
        margin-top: 200px;
    `;

    return(
        <Box>
            <img src ={Image}/>
        </Box>
    );
};

export default Organization;
