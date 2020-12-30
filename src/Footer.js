import React from 'react';
import BlueLogo from './assets/finelab.png';
import styled from 'styled-components';

const Footer = () => {    

    const Logo = styled.img`
    width : 150px;
    `
    const Footer = styled.div`
    display : flex;
    flex-direction : column;
    height : 150px;
    border : 1px solid black;
    background-color : white;
    z-index : 300;
    `

    const FooterBot = styled.div`
    margin-bottom : 15px;
    `;

    return (
        <>
        <Footer className = 'footer'>
            <FooterBot>파인랩 주식회사 | 대표: 정동훈, 남기영 | 서울특별시 강남구 테헨란로 623 14층 (우편번호:06173)</FooterBot>
            <FooterBot>사업자등록번호: 204-86-45452 | 통신판매신고번호: 2015-서울강남-01503</FooterBot>
        </Footer>
        </>
      );
};

export default Footer;