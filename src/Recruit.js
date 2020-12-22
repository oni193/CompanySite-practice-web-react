import React from 'react';
import Title from './components/textSize/Title';
import Subtitle from './components/textSize/Subtitle';

const Recruit = () => {
    
    const data = {
        title : '채용',
        sub : '파인랩을 만들어가는 사람들',
    }
    

    return(
        <div>
            <div>
                <Title text={data.title}/>
                <Subtitle text={data.sub}/>
            </div>
  
        </div>        
    );
}

export default Recruit;