import React from "react";
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
