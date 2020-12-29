import React from 'react';
import CompanyImg from '../../assets/company.jpg';

const Intro = () => {
    const introStyle = {
        width: '800px',
        height: '500px',
    }
    const imgStyle = {
        width: '100%',
        height: '75%'
    };
    const introTextStyle = { 
        width: '100%',
        height: '25%',
        color: 'black',
        wordBreak: 'break-all',
    };

    return(
        <div style={introStyle}>
            <img src={CompanyImg} style={imgStyle} alt="company"/>
            <div style={introTextStyle}>
                전문가와 고객 모두 금융 서비스를 편리하게 이용할 수 있는 최상의 서비스를 설계합니다.
                고객뿐만 아니라 전문가도 정보의 비대칭성으로 인해 업무의 비효율성을 경험합니다. 파인랩은 에이플러스에셋과 여러 계열사에서 대면채널로 축적된 경험을 활용하여 최적의 시스템을 구축하여 제공합니다.
            </div>
        </div>
    );
};

export default Intro;