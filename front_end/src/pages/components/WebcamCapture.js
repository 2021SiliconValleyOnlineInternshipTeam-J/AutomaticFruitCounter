import React from "react";
import Webcam from "react-webcam";


const WebcamCapture = () => {
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  const parent_div = {
        width: '100%',
        height: '100%',
        textAlign: 'center',
    }

  return (
      <div style={parent_div}>
          <div style={{fontSize: '55px', color: '#000000',padding:'60px'}}>실시간 카메라</div>
          <>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
          />
          </>
      </div>
  );
};

export default WebcamCapture;