import React from "react";
import Webcam from "react-webcam";
import {Link} from "react-router-dom";

const WebcamCapture = () => {
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);
    const capture = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
        const byteString = atob(imageSrc.split(",")[1]);
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([ia], {
          type: "image/jpeg"
        });
        const file = new File([blob], "image.jpg");
        console.log(file);
        const formData = new FormData();
        formData.append("image", file);
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:8000/api/addimage/');
        xhr.send(formData);
  }

  const parent_div = {
        width: '100%',
        height: '100%',
        textAlign: 'center',
    }

  return (
      <div style={parent_div}>
          <div style={{fontSize: '2.5rem', color: '#000000',padding:'3%'}}>실시간 카메라</div>
          <>
          <Webcam
              width="40%"
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
          />
          </>
          <div>
              <Link to="/selectupload">
                  <div className="gray_button">취소하기</div>
              </Link>
              <Link to="/result" onClick={capture}>
                  <div className="yellow_button" >결제하기</div>
              </Link>
          </div>
      </div>
  );
};

export default WebcamCapture;