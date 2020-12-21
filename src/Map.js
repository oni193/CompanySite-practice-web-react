import React, { useEffect }from 'react';

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

    return(
        <div id="myMap" style={mapStyle} />            
    );
}

export default Map