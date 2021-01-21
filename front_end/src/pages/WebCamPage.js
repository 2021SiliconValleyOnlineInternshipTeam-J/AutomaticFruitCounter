import React from 'react';
import { Link } from "react-router-dom";
import './components/Buttons.css';
import TopNavigator from './components/TopNavigator';
import WebcamCapture from './components/WebcamCapture'

const WebCamPage = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <TopNavigator />
            <WebcamCapture />
            <div>
                <Link to='/selectupload'><div className='gray_button'>취소하기</div></Link>
                <Link to='/result'><div className='yellow_button'>결제하기</div></Link>
            </div>
        </div>
    );
};

export default WebCamPage;