import React from 'react';

const Navigation = () => {

    const naviStyle = {
        height:'150px',
        backgroundColor: '#ffec99',
        borderBottom: '1px solid black',
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
        'CONTACT'
    ]
    const liStyle ={
        marginRight:'10px',
        float: 'left'
    }
    return (
        <div style={naviStyle}>
            <ul style={naviListStyle}>
                <li style={liStyle}>{liData[0]}</li>
                <li style={liStyle}>{liData[1]}</li>
                <li style={liStyle}>{liData[2]}</li>
                <li style={liStyle}>{liData[3]}</li>
                <li style={liStyle}>{liData[4]}</li>
                <li style={liStyle}>{liData[5]}</li>
                <li style={liStyle}>{liData[6]}</li>
            </ul>
        </div>
    );
}

export default Navigation;