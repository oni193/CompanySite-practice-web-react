import React from 'react';
import blueLogo from './assets/finelab.png';

const Navigation = () => {

    const naviStyle = {
        height:'150px',
        backgroundColor: '#ffec99',
    };
    const naviListStyle = {
        float: 'right',
        listStyle: 'none',
    };
    const liData = [
        '회사소개' , 
        '사업영역/서비스',
        '프로젝트',
        '채용',
        '뉴스룸',
        '파트너',
        '제휴 제안 문의',
        'CONTACT'
    ]
    const liStyle ={
        marginRight:'10px',
        float: 'left'
    }
    return (
        <div style={naviStyle}>
            <img src={blueLogo}/>
            {/* <ul style={naviListStyle} alt="logo">
                <li style={liStyle}>{liData[0]}
                    <li>파인랩 사람들</li>
                    <li>파인랩이 걸어온 길</li>
                </li>
                <li style={liStyle}>{liData[1]}
                    <li>대내사업
                        <li>A+그룹 IT 통합 관리 시스템 운영</li>
                        <li>웹과 애플리케이션 개발 및 운영</li>
                        <li>보험 IT 서비스</li>
                        <li>쇼핑몰</li>
                    </li>
                    <li>대외사업
                        <li>상조 청약 시스템 개발</li>
                        <li>헬스케어 애플리케이션</li>
                        <li>카카오워크</li>
                    </li>
                </li>
                <li style={liStyle}>{liData[2]}
                    <li>보플</li>
                    <li>에셋
                        <li>청약서류 이미지/전자서명 시스템</li>
                        <li>보플 실손보험금 청구 시스템</li>
                        <li>자동차 비교견적 업그레이드</li>
                        <li>에이플러스 에셋 홈페이지 리뉴얼 구축</li>
                    </li>
                    <li>포유몰</li>
                    <li>AAI헬스케어
                        <li>위플</li>
                        <li>라이나암케어프로그램</li>
                        <li>롯데손보도담도담</li>
                    </li>
                    <li>카카오워크</li>
                </li>
                <li style={liStyle}>{liData[3]}
                    <li>채용공고</li>
                    <li>모집공고</li>
                </li>
                <li style={liStyle}>{liData[4]}
                    <li>보도자료</li>
                </li>
                <li style={liStyle}>{liData[5]}
                    <li>고객사</li>
                    <li>협력사</li>
                    <li>계열사</li>
                </li>
                <li style={liStyle}>{liData[6]}</li>
                <li style={liStyle}>{liData[7]}</li>
            </ul> */}
        </div>
    );
}

export default Navigation;