import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BlueLogo from './assets/finelab.png';
import styled from 'styled-components';

const Footer = () => {    
    const [ click, setClick ] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

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
        <>
        <Footer className = 'footer'>
            <FooterUl className='footerNavi'>
                <FooterLi>
                    <Link
                        to = '/'
                        className ='footerLink'
                        onClick ={closeMobileMenu}
                    >
                    <Logo src={BlueLogo} alt="logo" />
                    </Link>
                </FooterLi>
                <FooterLi>
                    <Link 
                        to = '/service'
                        className = 'footerLink'
                        onClick={closeMobileMenu}
                    >
                    사업영역/서비스
                    </Link>
                </FooterLi>
                <FooterLi>
                    <Link 
                        to = '/project'
                        className = 'footerLink'
                        onClick={closeMobileMenu}
                    >                   
                    프로젝트
                    </Link>
                </FooterLi>
                <FooterLi>
                    <Link
                        to = 'Recruit'
                        className = 'footerLink'
                        onClick = {closeMobileMenu}
                    >
                    채용
                    </Link>
                </FooterLi>
                <FooterLi>
                    <Link
                        to = 'Partner'
                        className = 'partner'
                        onClick = {closeMobileMenu}
                    >
                    파트너
                    </Link>
                </FooterLi>
            </FooterUl>
            <FooterBot>파인랩 주식회사 | 대표: 정동훈, 남기영 | 서울특별시 강남구 테헨란로 623 14층 (우편번호:06173)</FooterBot>
            <FooterBot>사업자등록번호: 204-86-45452 | 통신판매신고번호: 2015-서울강남-01503</FooterBot>
        </Footer>
        </>
      );
};

export default Footer;