import React from "react";
import { Link } from "react-router-dom";
import "./components/Buttons.css";
import TopNavigator from "./components/TopNavigator";
import WebcamCapture from "./components/WebcamCapture";

const WebCamPage = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <TopNavigator />
      <WebcamCapture />
    </div>
  );
};

export default WebCamPage;
