import React from 'react';
import InternalService from './components/project/InternalService';
import ForeginService from './components/project/ForeginService';
import Project from './components/project/Project';
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