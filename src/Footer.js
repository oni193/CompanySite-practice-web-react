import React from 'react';
import BlueLogo from './assets/finelab.png';
const Footer = () => {
    const footerStyle = {
        display: 'grid',
        border: '1px solid black'
    };
    const footerLiStyle = {
        listStyle: 'none',
        paddingBottom : '70px'
    };
    const footerUlStyle = {
        float: 'left',
        paddingRight: '60px'
    };
    const logoStyle = {
        width:'150px',
    }
    const footerBotStyle = {
        paddingBottom: '1   0px'
    }
    return (
        <div style={footerStyle}>
            <ul style={footerLiStyle}>
                <li style={footerUlStyle}><img src={BlueLogo} style={logoStyle}/></li>
                <li style={footerUlStyle}>사업영역/서비스</li>
                <li style={footerUlStyle}>프로젝트</li>
                <li style={footerUlStyle}>채용</li>
                <li style={footerUlStyle}>파트너</li>
            </ul>
            <div style={footerBotStyle}>파인랩 주식회사 | 대표: 정동훈, 남기영 | 서울특별시 강남구 테헨란로 623 14층 (우편번호:06173)</div>
            <div style={footerBotStyle}>사업자등록번호: 204-86-45452 | 통신판매신고번호: 2015-서울강남-01503</div>
        </div>

    );
};

export default Footer;