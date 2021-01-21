import React from 'react';
import { Link } from "react-router-dom";
import './components/Buttons.css';
import TopNavigator from './components/TopNavigator';
import WebcamCapture from './components/WebcamCapture'

const WebCamPage = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <TopNavigator />
            <div style={{fontSize:'45px'}}>실시간 카메라</div>
            <WebcamCapture />
            <div>
                <div className='gray_button'>취소하기</div>
                <Link to='/end'><div className='yellow_button'>결제하기</div></Link>
            </div>
        </div>
    );
};

export default WebCamPage;