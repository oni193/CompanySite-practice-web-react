import React from 'react';
import styled from 'styled-components';
import PeopleIcon from '../../assets/peopleIcon.png';


const People = ({...props}) => {


    const FinelabPeople = styled.div`
        width : auto;
        height : 270px;
        border : 1px solid black;
        background-color : rgb(232,232,232);
    `;
    const Icons = styled.div`
        display : flex;
        flex-direction : row;
    `;
    const Icon = styled.img`
        width : 100px;
        height: auto;
        margin-right : -40px;
        src : Icon;
    `;
    Icon.defaultProps = {
        src : PeopleIcon,
    };


    return(
        <FinelabPeople>
            <Icons>
                <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="150"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
            >
                <Icon {...props}/>
            </div>
            <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="300"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
        >
                <Icon {...props}/>
            </div>
            <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="400"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
        >
                <Icon {...props}/>
            </div> 
            </Icons>
            <div>파인랩 사람들 &#62; </div>
        </FinelabPeople>
    );
};

export default People;