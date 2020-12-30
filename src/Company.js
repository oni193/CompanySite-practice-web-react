import React from 'react';
import { Link } from 'react-router-dom';
import Intro from './components/intro/Intro'
import People from './components/intro/People'
import History from './components/intro/History'
import styled from 'styled-components';

const Company = () => {

    const Component = styled.div`
        display : grid;
        grid-template-rows: 1fr ;
        grid-template-columns: 1fr 2fr;
        height : 900px;
        width : 80%;
        padding-left : 10%;
        padding-right : 10%;
    `;
    const Left = styled.div`
        width : 100%;
        height : auto;
        padding-top : 250px;
        
    `;
    const Right = styled.div`
        padding-top : 250px;
    `;

    
    return(
        <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
        >
            <Component>
                <Left>
                    <Intro/>
                </Left>
                <Right>
                    <Link to ="/test">
                        <People/>
                    </Link>
                    <History/>
                </Right>
            </Component>
        </div>
    );
};

export default Company;