import React from 'react';
import Title from './components/textSize/Title';
import Subtitle from './components/textSize/Subtitle';
import RecruitBox from './components/recruit/RecruitBox';
import styled from 'styled-components';


const Recruit = () => {

    const RecruitComponent = styled.div`
    height : 400px;
    background-color : #ffc9c9;
    `



    const data = {
        title : '채용',
        sub : '파인랩을 만들어가는 사람들',
    }
    


    return(
        <RecruitComponent>
            <div>
                <Title text={data.title}/>
                <Subtitle text={data.sub}/>
            </div>  
            <div>
                <RecruitBox/>
            </div>
        </RecruitComponent>        
    );
}

export default Recruit;