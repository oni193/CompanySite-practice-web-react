import React from 'react';
import Title from './components/TextSize/Title';
import Subtitle from './components/TextSize/Subtitle';
import Description from './components/TextSize/Description';

const Service = () => {
    
    const serviceStyle = { 
        backgroundColor: '#c0eb75',
        borderBottom: '1px solid black'
    }
    
    const data = {
        title: '대내사업',
        sub: '파인랩은 A+그룹 IT통합 관리 시스템을 운영하며 다양한 사업을 영위하고 있습니다.',
        des: ['A+ 그룹 IT 통합 관리 시스템 운영',
    '웹과 애플리케이션 개발 및 운영', '보험 IT 서비스', '쇼핑몰']
    };
    
    return(
        <div style={serviceStyle}>
            <Title text={data.title}/>
            <Subtitle text={data.sub}/>
            <Description text={data.des[0]}/>
            <Description text={data.des[1]}/>
            <Description text={data.des[2]}/>
            <Description text={data.des[3]}/>
        </div>
    );

};

export default Service;