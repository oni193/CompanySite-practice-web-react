import React from 'react';
import aaiLife from '../../assets/aailife.png';


const Contractor = () => {
    const customerStyle = {
        display: 'flex',
        marginLeft: '27%'
    }
    const boxStyle = {
        width: '300px',
        height: '100px',
        border: '1px solid black',
        backgroundColor: 'white',
    };
    const imgStyle ={
        paddingTop: '30px',
    }
    return(
        <div style={customerStyle}>
            <div style={boxStyle}>
                <img src={aaiLife} style={imgStyle}/>
            </div>
            <div style={boxStyle}>
                <img src={aaiLife} style={imgStyle}/>
            </div>
            <div style={boxStyle}>
                <img src={aaiLife} style={imgStyle}/>
            </div>
        </div>
    );
};

export default Contractor;