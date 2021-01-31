import React, { useState, useContext } from "react";
import "./ImageUploadCSS.css";
import { Link } from "react-router-dom";
import TopNavigator from "./components/TopNavigator";
import "./components/Buttons.css";
import axios from "axios";
import { GlobalContext } from "./context/GlobalContext";

const ImageUpload = () => {
  const [status, setStatus] = useState("");
  const [preview, setPreview] = useState(null);
  const [enableDragDrop, setEnableDragDrop] = useState(true);
  const [image, setImage] = useState(true);
  const doNothing = (event) => event.preventDefault();

  const { setData } = useContext(GlobalContext);

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
      setStatus("");
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
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <TopNavigator />
      <div style={{ fontSize: "2.5vw", paddingTop: "5%" }}>
        계산할 사진 업로드
      </div>
      <div style={{ fontSize: "1.3vw", color: "gray", paddingTop: "1%" }}>
        업로드할 파일을 아래 박스로 드래그 해 주세요
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
          <svg version="1.1" width="75" height="75" viewBox="0 0 768 768">
            <path
              d="M480 64q58.5 0 111.875 22.875t91.875 61.375 61.375 91.875 22.875 111.875q0 54.5-19.875 104.75t-54 88-81.5 62.625-100.625 30.875v-64.5q53.75-7.75 97.625-38.875t69.125-79.25 25.25-103.625q0-45.5-17.75-87t-47.75-71.5-71.5-47.75-87-17.75q-41.5 0-79.875 14.875t-67.5 40.375-48.75 61-25.375 75.75h-66.5q-53 0-90.5 37.5t-37.5 90.5q0 29 11.375 53.75t29.875 40.625 41.125 24.75 45.625 8.875h128v64h-128q-52.25 0-96.375-25.75t-69.875-69.875-25.75-96.375 25.75-96.375 69.875-69.875 96.375-25.75h16.5q19.75-55.75 59.5-99.125t95.125-68.125 116.875-24.75zM416 320q13.25 0 22.75 9.5l96 96q9.25 9.25 9.25 22.5 0 13.75-9.125 22.875t-22.875 9.125q-13.5 0-22.75-9.25l-41.25-41.5v210.75q0 13.25-9.375 22.625t-22.625 9.375-22.625-9.375-9.375-22.625v-210.75l-41.25 41.5q-9.25 9.25-22.75 9.25-13.25 0-22.625-9.375t-9.375-22.625q0-12.75 9.25-22.5l96-96q9.5-9.5 22.75-9.5z"
              fill="#bbbbbb"
            ></path>
          </svg>
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
      <div style={{ btn_div, marginTop: "3vh" }}>
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
