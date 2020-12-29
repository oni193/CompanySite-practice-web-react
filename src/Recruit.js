import React from 'react';
import Title from './components/textSize/Title';
import Subtitle from './components/textSize/Subtitle';
import RecruitBox from './components/recruit/RecruitBox';
import styled from 'styled-components';


const Recruit = () => {
    const Left = styled.div`
        width : 100%;
        height : auto;
        padding-top : 250px;
    `;
    const Right = styled.div`
        padding-top : 70px;
    `;
    const RecruitComponent = styled.div`
        display : grid;
        grid-template-rows: 1fr ;
        grid-template-columns: 1fr 2fr;
        column-gap : 50px;
        height : 800px;
        width : 80%;
        padding-left : 10%;
        padding-right : 10%;
    `
    const data = {
        title : '채용',
        sub : '파인랩을 만들어가는 사람들',
    }
    
    return(
        <RecruitComponent>
            <Left>
                <Title text={data.title}/>
                <Subtitle text={data.sub}/>
            </Left>  
            <Right>
                <RecruitBox/>
            </Right>
        </RecruitComponent>        
    );
}

export default Recruit;