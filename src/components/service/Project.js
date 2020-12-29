import React from 'react';

import Title from '../textSize/Title';
import Subtitle from '../textSize/Subtitle';
import Description from '../textSize/Description';
// import Internal from './components/service/Internal';

import img0 from '../../assets/1.png';
import img1 from '../../assets/2.jpg';
import img2 from '../../assets/3.png';
import img3 from '../../assets/4.jpg';

import styled from 'styled-components';

const Project = () => {
    
    
    const data = {
        title: '대외사업',
        sub: '파인랩은 A+그룹 IT통합 관리 시스템을 운영하며 다양한 사업을 영위하고 있습니다.',
    };
    
    const des = ['보플', 'A+에셋', '헬스케어', '포유몰', '카카오워크'];
    
    
    const ServiceComponent = styled.div`
        height : 500px;
        background-color : white;
    `
    const ServiceLeft = styled.div`
        width : 30%;
        float : left;
    `
    const ServiceRight = styled.div`
        display : flex;
        width : 70%;
        float : left;
    `;


    const Image = styled.img`
        display : inline-block;
        width : 300px;
        height : 180px;
        padding-right : 30px;
        :hover {
        cursor: pointer;
	    }
     `

    const Desc = styled.div`
        padding-top : 10px;
        padding-bottom : 20px;
        :hover {
        cursor: pointer;
	    }
    `;

    
    return(
            <ServiceComponent>
                <ServiceLeft>
                    <Title text={data.title}/>
                    <Subtitle text={data.sub}/>
                </ServiceLeft>


                <ServiceRight>
                    <div>
                        <Image src={img0} alt="img"/>       
                        <Desc><Description text={des[0]}/></Desc>
                        <Image src={img1} alt="img"/>       
                        <Desc><Description text={des[1]}/></Desc>
                    </div>
                    <div>
                        <Image src={img2} alt="img"/>       
                        <Desc><Description text={des[2]}/></Desc>
                    </div>
                </ServiceRight>
            </ServiceComponent> 
    );
};

export default Project;