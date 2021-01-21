import React from 'react';
import TopNavigator from './components/TopNavigator';
import { Link } from "react-router-dom";
import './components/Buttons.css';



const SelectUploadPage = ( { history } ) => {
    const picture_btn = {
        borderRadius: '12px',
        fontSize: '45px',
        display: 'inline',
        padding: '40px 20px',
        margin: '20px', // top-button, left-right
        border: '4px solid #FFDD00',
        color: '#FFE32C',
    }

    const cam_btn = {
        borderRadius: '12px',
        fontSize: '45px',
        display: 'inline',
        padding: '40px 20px',
        margin: '20px',
        border: '4px solid #ffe32c7a',
        color: '#ffe32c7a',
    }

    const home_btn = {
        fontSize: '45px',
        padding: '20px',
        margin: '80px',
        backgroundColor: '#999A9C',
        color: 'white',
        borderRadius: '38px',
        width: '204px',
        display: 'inline-block'
    }

    const btn_div = {
        padding:'40px',
    }

    return (
        <div style={{textAlign: 'center', width: '100%'}}>
            <TopNavigator />
            <div style={{fontSize: '45px', padding: '40px', margin:'20px'}}>계산 방식을 선택해주세요.</div>
            <div>
                <Link to='/imageupload' style={{ textDecoration: 'none' }}><div style={cam_btn}>사진 업로드</div></Link>
                <Link to='/webcam' style={{ textDecoration: 'none' }}><div style={cam_btn}>실시간 카메라</div></Link>
            </div>
            <div style={btn_div}>
                <Link to='/'><div className='gray_button'>이전으로</div></Link>
            </div>      
            {/*<div style={home_btn} onClick={ () => {history.push("/")}}>이전으로</div>*/}
        </div>
    );
};


export default SelectUploadPage;