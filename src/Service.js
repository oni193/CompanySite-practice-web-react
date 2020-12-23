import React from 'react';

import Title from './components/textSize/Title';
import Subtitle from './components/textSize/Subtitle';
import Description from './components/textSize/Description';
// import Internal from './components/service/Internal';

import img0 from './assets/1.png';
import img1 from './assets/2.jpg';
import img2 from './assets/3.png';
import img3 from './assets/4.jpg';

const Service = () => {
    
    const serviceStyle = { 
        backgroundColor: '#c0eb75',
        borderBottom: '1px solid black'
    }

    const imgStyle ={
        display: 'inline-block',
        width: '200px',
        height: '200px'
    }
    
    const data = {
        title: '대내사업',
        sub: '파인랩은 A+그룹 IT통합 관리 시스템을 운영하며 다양한 사업을 영위하고 있습니다.',
    };
    
    const des = ['A+ 그룹 IT 통합 관리 시스템 운영',
    '웹과 애플리케이션 개발 및 운영', '보험 IT 서비스', '쇼핑몰'];

    
    return(
            <div style={serviceStyle}>
                <div className="serviceLeft">
                    <Title text={data.title}/>
                    <Subtitle text={data.sub}/>
                </div>


                <div className="serviceRight" style={serviceStyle}>
                    <div>
                        <img src={img0} style={imgStyle} alt="img"/>       
                        <Description text={des[0]}/>
                    </div>
                    <div>
                        <img src={img1} style={imgStyle} alt="img"/>       
                        <Description text={des[1]}/>
                    </div>
                    <div>
                        <img src={img2} style={imgStyle} alt="img"/>       
                        <Description text={des[2]}/>
                    </div>
                    <div>
                        <img src={img3} style={imgStyle} alt="img"/>       
                        <Description text={des[3]}/>
                    </div>
                </div>
            </div> 
    );
};

export default Service;