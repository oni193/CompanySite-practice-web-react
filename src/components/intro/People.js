import React from 'react';
import styled from 'styled-components';
// import Icon from '../../assets/peopleIcon.png';


const People = () => {


    const FinelabPeople = styled.div`
        width : auto;
        height : 270px;
        border : 1px solid black;
        background-color : rgb(232,232,232);
    `;
    const Icon = styled.img`
        width : 50px;
        height: auto;
        src : Icon;
    `;

    return(
        <FinelabPeople>
            <div>파인랩 사람들 &#62; </div>
            <div>
                <Icon/>
            </div>
        </FinelabPeople>
    );
};

export default People;