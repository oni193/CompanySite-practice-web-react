import React from 'react';
// import ReactDOM from "react-dom";
import Body from '../textSize/Body';
import Modal from '../recruit/Modal';
import useModal from './UseModal';
// import Modal from '../Recruit/Modal';

const Box = ({box}) => {

    const boxStyle = {
        width: '200px',
        height: '200px',
        border: '1px solid black',
    }; 
    const {isShowing, toggle}= useModal();

    return(
            <div>
                <button style={boxStyle} onClick={toggle}>
                    <Body text={box.body}/>
                </button>
                <Modal
                    isShowing={isShowing}
                    hide={toggle}
                    text={box.modal}
                />
            </div>
    );
};

const ModalList = () => {
    const boxs = [
        {   
            id: 1,
            body: '디지털사업팀',
            modal: '모달창1'
        },
        {   
            id: 2,
            body: '기획/시스템팀',
            modal: '모달창2'
        },
        {   
            id: 3,
            body: '신사업개발팀',
            modal: '모달창3'
        },
        {   
            id: 4,
            body: 'IT운영팀',
            modal: '모달창4'
        },
        {   
            id: 5,
            body: '관리팀/온라인팀',
            modal: '모달창5'
        },
        {   
            id: 6,
            body: '지원하기',
            modal: '모달창6'
        },

    ];

    return(
        <div>
            <Box box={boxs[0]}/>
            <Box box={boxs[1]}/>
            <Box box={boxs[2]}/>
            <Box box={boxs[3]}/>
            <Box box={boxs[4]}/>
            <Box box={boxs[5]}/>
        </div>
    );
}


export default ModalList;