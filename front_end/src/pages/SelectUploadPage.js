import React from 'react';
import TopNavigator from './components/TopNavigator';
import { Link } from "react-router-dom";
import './components/Buttons.css';



const SelectUploadPage = ( { history } ) => {
    const select_btn = {
        borderRadius: '12px',
        fontSize: '300%',
        display: 'inline',
        padding: '4% 2%',
        margin: '3%',
        border: '4px solid #ffe32c7a',
        color: '#ffe32c7a',
    }

    const btn_div = {
        padding:'3%',
    }

    return (
        <div style={{textAlign: 'center', width: '100%'}}>
            <TopNavigator />
            <div style={{fontSize: '300%', padding: '2%', margin:'3%'}}>계산 방식을 선택해주세요.</div>
            <div>
                <Link to='/imageupload' style={{ textDecoration: 'none' }}><div style={select_btn}>사진 업로드</div></Link>
                <Link to='/webcam' style={{ textDecoration: 'none' }}><div style={select_btn}>실시간 카메라</div></Link>
            </div>
            <div style={btn_div}>
                <Link to='/'><div className='gray_button'>이전으로</div></Link>
            </div>      
        </div>
    );
};


export default SelectUploadPage;