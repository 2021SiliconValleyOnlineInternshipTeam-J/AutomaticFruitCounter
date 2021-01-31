import React, { useState, useContext } from "react";
import Webcam from "react-webcam";
import { Link } from "react-router-dom";
import axios from "axios";
import { GlobalContext } from "../context/globalContext";

const WebcamCapture = () => {
  const { setData } = useContext(GlobalContext);
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
      type: "image/jpeg",
    });
    const file = new File([blob], "image.jpg");
    const payload = new FormData();
    payload.append("image", file);
    let url = "/api/addimage/";
    axios
      .post(url, payload, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        const data = JSON.parse(res.data);
        setData(() => [data]);
        setImgSrc("data:image/jpeg;base64," + data.url);
      })
      .catch((err) => console.log(err));
  };

  const parent_div = {
    width: "100%",
    height: "100%",
    textAlign: "center",
  };

  return (
    <div style={parent_div}>
      <div style={{ fontSize: "2.5rem", color: "#000000", paddingTop: "3%" }}>
        실시간 카메라
      </div>
      <div
        style={{
          fontSize: "1rem",
          color: "gray",
          paddingTop: "1%",
          paddingBottom: "3%",
        }}
      >
        화면에 계산할 물건이 모두 보이도록 하고 결제하기를 눌러주세요
      </div>
      <>
        <Webcam
          width="40%"
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
        />
      </>
      <div style={{ paddingTop: "2%" }}>
        <Link to="/selectupload">
          <div className="gray_button">취소하기</div>
        </Link>
        <Link to="/result" onClick={capture}>
          <div className="yellow_button">결제하기</div>
        </Link>
      </div>
    </div>
  );
};

export default WebcamCapture;
