import React, { useEffect }from 'react';
import Subtitle from './components/textSize/Subtitle';

const { kakao } = window;
const Map = () => {

    useEffect(()=>{
        const container =document.getElementById('myMap');
            const options = {
                center : new kakao.maps.LatLng(37.510006542345145, 127.06571949171726),
                level: 3
            };
            const map = new kakao.maps.Map(container, options);
            
            //마커 위치
            const markerPosition = new kakao.maps.LatLng(
                37.510006542345145, 
                127.06571949171726
            );
            
            const marker = new kakao.maps.Marker({
                position : markerPosition
            });
            
            marker.setMap(map);
            
    },[]);


    const mapStyle = {
        width: '300px',
        height: '300px'
    };
    
    const data = {
        sub : ['서울 강남구 테헤란로 623 14층', '02-3453-3864']
    }
    


    return(
        <div>
        <div><Subtitle text={data.sub[0]}/></div>
        <div><Subtitle text={data.sub[1]}/></div>
        <div id="myMap" style={mapStyle} />            
        </div>
    );
}

export default Map