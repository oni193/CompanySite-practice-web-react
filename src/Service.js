import React from 'react';
import InternalService from './components/service/InternalService';
import ForeginService from './components/service/ForeginService';
import Project from './components/service/Project';
import styled from 'styled-components';

const Service = () => {

    return(
        <div>
            <InternalService/>
            <ForeginService/>
            <Project/>
        </div>
    );
    
};

export default Service;