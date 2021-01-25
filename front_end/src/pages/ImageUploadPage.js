import React, { useState } from "react";
import './ImageUploadCSS.css';
import { Link } from 'react-router-dom';
import TopNavigator from './components/TopNavigator';
import './components/Buttons.css';

const ImageUpload = ( { history } ) => {
    const [status, setStatus] = useState('업로드할 파일을 드래그 해주세요');
    const [percentage, setPercentage] = useState(0);
    const [preview, setPreview] = useState(null);
    const [enableDragDrop, setEnableDragDrop] = useState(true);
    const [image, setImage] = useState(true);
    const doNothing = event => event.preventDefault();

    const btn_div = {
        padding:'40px',
        textAlign: 'center'
    }

    const onDragEnter = event => {
        if (enableDragDrop) {
            setStatus('File Detected');
        }
        event.stopPropagation();
        event.preventDefault();
    };

    const onDragLeave = event => {
        if (enableDragDrop) {
            setStatus('');
        }
        event.preventDefault();
    };

    const onDragOver = event => {
        if (enableDragDrop) {
            setStatus('Drop');
        }
        event.preventDefault();
    };


    const onDrop = event => {
        const supportedFilesTypes = ['image/jpeg', 'image/png'];
        const { type } = event.dataTransfer.files[0];
        if (supportedFilesTypes.indexOf(type) > -1) {
            const reader = new FileReader();
            reader.onload = e => setPreview(e.target.result);
            reader.readAsDataURL(event.dataTransfer.files[0]);
            setImage(event.dataTransfer.files[0])
        }
        event.preventDefault();
    };

    const RequestImage = () => {
        const payload = new FormData();
        payload.append('image', image);
        console.log(image)
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:8000/api/addimage/');
        xhr.send(payload);
    }

    return (
    <div style={{textAlign:'center'}}>
        <TopNavigator/>
        <div style={{fontSize: '45px', color: '#000000',padding:'5%', textAlign:'center'}}>계산할 사진 업로드</div>
        <div onDragEnter={onDragEnter} onDragLeave={onDragLeave} onDragOver={doNothing} onDrop={onDragLeave}>

            </div>
            <div className="ImageCenter">
                <div className={`DropArea ${status === 'Drop' ? 'Over' : ''}`} onDragOver={onDragOver} onDragLeave={onDragEnter} onDrop={onDrop}>
                    <div className={`ImageProgress ${preview ? 'Show' : ''}`}>
                        <div className="ImageProgressImage" style={{ backgroundImage: `url(${preview})` }}></div>
                        <div className="ImageProgressUploaded" style={{ backgroundImage: `url(${preview})` }}></div>
                    </div>
                    <div className="Status">{status}</div>
                </div>
            </div>

        <div style={{btn_div}}>
            <Link to='/selectupload'><div className='gray_button'>이전으로</div></Link>
            <Link to='/result' onClick={RequestImage}><div className='yellow_button'>다음으로</div></Link>
        </div>
    </div>
    );
};

export default ImageUpload;