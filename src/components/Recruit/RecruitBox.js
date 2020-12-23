import React , { useState } from 'react';
import ReactDOM from "react-dom";
import Body from '../textSize/Body';
// import Modal from '../Recruit/Modal';
import './Recruit.css';

const RecruitBox = () => {

    const boxStyle = {
        height: '400px',
        backgroundColor: '#ffc9c9'
    }

    const bodyStyle = {
        width: '200px',
        height: '200px',
        border: '1px solid black',
    }; 

    const data = {
        body : [ '기획/시스템팀', '신사업개발팀', 'IT운영팀', '관리팀/온라인팀', '지원하기']
    };
    
    // const backColor = {
    //     color: [
    //         '#c92a2a', '#faa2c1', '#e9ecef', '#f8f0fc', '#e5dbff', '#99e9f2'
    //     ]
    // }

    // const array = [
    //     {body: '디지털 사업팀', color: '#c92a2a'},
    //     {body: '신사업개발팀', color: '#faa2c1'}
    // ];


    return (
        <div style={boxStyle} >
            <button style={bodyStyle}>
            <Body text={data.body[0]}  />
            </button>



        </div>
            /* for문으로 하면 될거 같은딬 */
    );
};

export default RecruitBox;