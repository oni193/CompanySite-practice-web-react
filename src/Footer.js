import React from 'react';
// import * as Scroll from 'react-scroll';
import BlueLogo from './assets/finelab.png';
import styled from 'styled-components';

const Footer = () => {

    
    const Logo = styled.img`
    width : 150px;
    `
    const Footer = styled.div`
    display : grid;
    border : 1px solid black;
    `
    const FooterUl = styled.ul`
    color : #000;
    list-style : none;
    margin-top : 20px;
    margin-bottom : 50px;
    :hover {
        cursor: pointer;
        }
    `
    const FooterLi = styled.li`
    float : left;
    margin-right : 60px;
    `
    const FooterBot = styled.div`
    margin-bottom : 15px;
    `;



    return (
        <Footer>
            <FooterUl className="footerNavi">
                <FooterLi><Logo src={BlueLogo} alt="logo" /></FooterLi>
                <FooterLi>사업영역/서비스</FooterLi>
                <FooterLi>프로젝트</FooterLi>
                <FooterLi>채용</FooterLi>
                <FooterLi>파트너</FooterLi>
            </FooterUl>
            <FooterBot>파인랩 주식회사 | 대표: 정동훈, 남기영 | 서울특별시 강남구 테헨란로 623 14층 (우편번호:06173)</FooterBot>
            <FooterBot>사업자등록번호: 204-86-45452 | 통신판매신고번호: 2015-서울강남-01503</FooterBot>
        </Footer>
      );
};

export default Footer;