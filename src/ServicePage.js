import React from 'react';
import InternalService from './components/project/InternalService';
import ForeginService from './components/project/ForeginService';
import Project from './components/project/Project';
import styled from 'styled-components';

const Service = () => {

    return(
        <div>
        <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
        >
            <InternalService/>
        </div>
        <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
        >
            <ForeginService/>
        </div>
        <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
        >
            <Project/>
        </div>
        </div>
    );
    
};

export default Service;