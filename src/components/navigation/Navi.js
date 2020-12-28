import React from 'react';

const Navi = () => {
    const ulStyle = {
        listStyle: 'none'
    };
    const liStyle = { 
        float: 'left',
        paddingRight: '30px'
    };

    return(
        <div>
            <ul style={ulStyle}>
                <li style={liStyle}>메뉴
                    <li>서브메뉴</li>
                    <li>서브메뉴</li>
                    <li>서브메뉴</li>
                    <li>서브메뉴</li>
                </li>

                <li style={liStyle}>메뉴
                    <li>서브메뉴</li>
                </li>

                <li style={liStyle}>메뉴
                    <li>서브메뉴</li>
                </li>

                <li style={liStyle}>메뉴
                    <li>서브메뉴
                        <li>서서브메뉴</li></li>
                </li>
            </ul>
        </div>
    );
};

export default Navi;