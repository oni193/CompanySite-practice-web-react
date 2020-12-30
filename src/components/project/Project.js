import React from 'react';

import Title from '../textSize/Title';
import Subtitle from '../textSize/Subtitle';
import Description from '../textSize/Description';
import img0 from '../../assets/bopel.jpg';
import img1 from '../../assets/esset.png';
import img2 from '../../assets/healthcare.jpg';
import img3 from '../../assets/4u.png';



import styled from 'styled-components';
import '../style/serviceAnimation.css';

const Project = () => {
    const data = {
        title: '프로젝트',
        sub: '파인랩은 이미 여러 사업을 진행하고 다양한 프로젝트를 수행하며 지금도 성장중입니다.',
    };
    
    const des = ['보플', 'A+ 에셋', '헬스케어', '포유몰', '카카오워크'];

    const ServiceComponent = styled.div`
        display : grid;
        grid-template-rows: 1fr ;
        grid-template-columns: 1fr 2fr;
        column-gap : 50px;
        height : 900px;
        width : 80%;
        padding-left : 10%;
        padding-right : 10%;
        background-color : white;
    `
    const ServiceLeft = styled.div`
        display : flex;
        flex-direction : column;
        width : 100%;
        height : auto;
        padding-top : 250px;
    `
    const TitleStyle = {
    };
    const ServiceRight = styled.div`
        display : grid;
        grid-template-columns: 1fr 1fr ;
        grid-template-rows : 1fr 1fr ;
        width : 100%;
        height : 200px;
        padding-top : 100px;
        float : right;
        height : auto;
    `;
    const Part = styled.div`
        display : grid;
        grid-template-columns: 1fr ;
        grid-template-rows : 1fr 1fr;
    `;
    const Image = styled.img`
        display : inline-block;
        width : 300px;
        height : 180px;
        :hover {
        cursor: pointer;
        }
     `

return(
    <ServiceComponent >
        <ServiceLeft >
            <Title text={data.title} style={TitleStyle}/>
            <Subtitle text={data.sub}/>
        </ServiceLeft>

        <ServiceRight>
            <Part
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="150"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false">
                <Image src={img0} alt="img"/>       
                <div className="serviceDescription">
                    <Description text={des[0]} />
                </div>
            </Part>
            <Part
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="300"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false">
                <Image src={img1} alt="img"/>       
                <div className="serviceDescription">
                    <Description text={des[1]} />
                </div>
            </Part>
            <Part
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="450"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false">
                <Image src={img2} alt="img"/>       
                <div className="serviceDescription">
                    <Description text={des[2]} />
                </div>
            </Part>
            <Part
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="600"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false">
                <Image src={img3} alt="img"/>       
                <div className="serviceDescription">
                    <Description text={des[3]} />
                </div>
            </Part>
        </ServiceRight>

    </ServiceComponent> 
);
};

export default Project;