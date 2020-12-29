import React from 'react';
import '../navigation/navi.css';

const Navi = () => {

    return(
        <div className="dropdown">
            <button className="dropbtn">회사소개
                <div className="dropdown-content">
                    <ul>
                        <li>파인랩사람들</li>
                        <li>파인랩이 걸어온 길</li>
                    </ul>
                </div>
            </button>
            <button className="dropbtn">사업영역/서비스
                <div className="dropdown-content">
                    <ul>
                        <li>대내사업
                                <li>A+그룹 IT 통합 관리 시스템 운영</li>
                                <li>웹과 애플리케이션 개발 및 운영</li>
                                <li>보험 IT서비스</li>
                                <li>쇼핑몰</li>
                            </li>
                        <li>대외사업
                            <li>상조 청약 시스템 개발</li>
                            <li>헬스케어 애플리케이션</li>
                            <li>카카오워크</li>
                        </li>
                    </ul>
                </div>
            </button>
            <button className="dropbtn">프로젝트
                <div className="dropdown-content">
                    <ul>
                        <li>보플</li>
                        <li>에셋
                            <li>청약서류 이미지/전자서명 시스템</li>
                            <li>보플 실손보험금 청구 시스템</li>
                            <li>자동차 비교견적 업그레이드</li>
                            <li>에이플러스에셋 홈페이지 리뉴얼 구축</li>
                        </li>
                        <li>포유몰</li>
                        <li>AAI헬스케어
                            <li>위플</li>
                            <li>라이나암케어프로그램</li>
                            <li>롯데손보도담도담</li>
                        </li>
                        <li>카카오워크</li>
                    </ul>
                </div>
            </button>
            <button className="dropbtn">채용
                <div className="dropdown-content">
                    <ul>
                        <li>채용 공고</li>
                        <li>모집 내용</li>
                    </ul>
                </div>
            </button>
            <button className="dropbtn">뉴스룸
                <div className="dropdown-content">
                    <ul>
                        <li>언론보도</li>
                        <li>공지사항</li>
                    </ul>
                </div>
            </button>
            <button className="dropbtn">파트너
                <div className="dropdown-content">
                    <ul>
                        <li>고객사</li>
                        <li>협력사</li>
                        <li>계열사</li>
                        <li>제휴제안문의</li>
                    </ul>
                </div>
            </button>
            <button className="dropbtn">CONTACT
            </button>
    </div>
    );
};

export default Navi;