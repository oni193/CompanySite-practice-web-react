import React from 'react';
import { useLocation } from 'react-router-dom';
import '../navigation/navi.css';

const Navi = () => {
    return(
        <div class="navbar">
            <div class="dropdown">
                    <ul>
                        <li class="mainMenu">회사소개</li>
                        <li class="mainMenu">사업영역/서비스</li>
                        <li class="mainMenu">프로젝트</li>
                        <li class="mainMenu">채용</li>
                        <li class="mainMenu">뉴스룸</li>
                        <li class="mainMenu">파트너</li>
                        <li class="mainMenu">CONTACT</li>
                    </ul>
                <div class="dropdown-content">
                    <div className="test">
                        <a href="#">파인랩 사람들</a>
                        <a href="#">파인랩이 걸어온 길</a>
                    </div>
                    <div className="test">
                        <a>대내사업</a>
                        <a href="#">A+그룹 IT통합 관리 시스템 운영</a>
                        <a href="#">웹과 애플리케이션 개발 및 운영</a>
                        <a href="#">보험 IT 서비스</a>
                        <a href="#">쇼핑몰</a>
                        <a href="#">대외사업</a>
                        <a href="#">상조 청약 시스템 개발</a>
                        <a href="#">헬스케어 애플리케이션</a>
                        <a>카카오 워크</a>
                    </div>
                    <div className="test">
                        <a>보플</a>
                        <a>에셋</a>
                        <a>청약서류 이미지/전자서명 시스템</a>
                        <a>보플 실손보험금 청구 시스템</a>
                        <a>자동차비교견적 업그레이드</a>
                        <a>에이플러스에셋 홈페이지 리뉴얼 구축</a>
                        <a>포유몰</a>
                        <a>AAI헬스케어</a>
                        <a>위플</a>
                        <a>라이나암케어프로그램</a>
                        <a>롯데손보도담도담</a>
                        <a>카카오워크</a>
                    </div>
                    <div className="test">
                        <a>채용 공고</a>
                        <a>모집 내용</a>
                    </div>
                    <div className="test">
                        <a>언론 보도</a>
                        <a>공지사항</a>
                    </div>
                    <div className="test">
                        <a>고객사</a>
                        <a>협력사</a>
                        <a>계열사</a>
                        <a>제휴제안문의</a>
                    </div>
                </div>
            </div> 
      </div>
    );
};

export default Navi;