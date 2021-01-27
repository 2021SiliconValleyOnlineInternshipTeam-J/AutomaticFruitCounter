import React, { useState, useCallback } from "react";
import "./ImageUploadCSS.css";
import { Link } from "react-router-dom";
import TopNavigator from "./components/TopNavigator";
import "./components/Buttons.css";
import axios from "axios";

const ImageUpload = () => {
  const [status, setStatus] = useState("업로드할 파일을 드래그 해주세요");
  const [preview, setPreview] = useState(null);
  const [enableDragDrop, setEnableDragDrop] = useState(true);
  const [image, setImage] = useState(true);
  const [isSending, setIsSending] = useState(true);
  const [imgSrc, setImgSrc] = useState(null);
  const doNothing = (event) => event.preventDefault();


  const btn_div = {
    padding: "3%",
    textAlign: "center",
  };

  const onDragEnter = (event) => {
    if (enableDragDrop) {
      setStatus("File Detected");
    }
    event.stopPropagation();
    event.preventDefault();
  };

  const onDragLeave = (event) => {
    if (enableDragDrop) {
      setStatus("");
    }
    event.preventDefault();
  };

  const onDragOver = (event) => {
    if (enableDragDrop) {
      setStatus("Drop");
    }
    event.preventDefault();
  };

  const onDrop = (event) => {
    const supportedFilesTypes = ["image/jpeg", "image/png"];
    const { type } = event.dataTransfer.files[0];
    if (supportedFilesTypes.indexOf(type) > -1) {
      const reader = new FileReader();
      reader.onload = (e) => setPreview(e.target.result);
      reader.readAsDataURL(event.dataTransfer.files[0]);
      setImage(event.dataTransfer.files[0]);
    }
    event.preventDefault();
  };

  const RequestImage = () => {
    const payload = new FormData();
    payload.append("image", image);
    console.log(image);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/api/addimage/");
    xhr.send(payload);
  };

  const TestRequest = () => {
    let form_data = new FormData();
    form_data.append("image", image);
    //let url = 'http://localhost:8000/api/addimage/';     //   backend와 직접 통신하는 코드, 배포할 때는 밑에 방법으로!
    let url = '/api/addimage/';                            //   local에서 개발할 때  let url = 'http://localhost:80/api/addimage/' 도 가능
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }).then(res => {
          console.log(res.data)
          const data = JSON.parse(res.data);
          setImgSrc("data:image/jpeg;base64," + data.url)
    }).catch(err => console.log(err))
  };

  return (
    <div style={{ textAlign: "center" }}>
      <TopNavigator />
      <div
        style={{
          fontSize: "2.5em",
          color: "#000000",
          padding: "1%",
          textAlign: "center",
        }}
      >
        계산할 사진 업로드
      </div>
      <div
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDragOver={doNothing}
        onDrop={onDragLeave}
      ></div>
      <div className="ImageCenter">
        <div
          className={`DropArea ${status === "Drop" ? "Over" : ""}`}
          onDragOver={onDragOver}
          onDragLeave={onDragEnter}
          onDrop={onDrop}
        >
          <div className={`ImageProgress ${preview ? "Show" : ""}`}>
            <div
              className="ImageProgressImage"
              style={{ backgroundImage: `url(${preview})` }}
            ></div>
            <div
              className="ImageProgressUploaded"
              style={{ backgroundImage: `url(${preview})` }}
            ></div>
          </div>
          <div className="Status">{status}</div>
        </div>
      </div>
      <div style={{ btn_div }}>
        <button onClick={TestRequest}>테스트</button>
        {imgSrc && (<img src={imgSrc} />)}
        <Link to="/selectupload">
          <div className="gray_button">이전으로</div>
        </Link>
        <Link to="/result" onClick={RequestImage}>
          <div className="yellow_button">다음으로</div>
        </Link>
      </div>
    </div>
  );
};

export default ImageUpload;
