import React from 'react';
import Title from './components/textSize/Title';
import Subtitle from './components/textSize/Subtitle';
import RecruitBox from './components/recruit/RecruitBox';


const Recruit = () => {
    
    const recruitStyle = {
        height: '400px',
        backgroundColor: '#ffc9c9',
    }
    const data = {
        title : '채용',
        sub : '파인랩을 만들어가는 사람들',
    } 
    return(
        <div style={recruitStyle}>
            <div>
                <Title text={data.title}/>
                <Subtitle text={data.sub}/>
            </div>  
            <div>
                <RecruitBox/>
            </div>
        </div>        
    );
}

export default Recruit;