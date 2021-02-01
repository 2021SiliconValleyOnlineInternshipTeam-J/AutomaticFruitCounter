import React, { useContext, useEffect } from "react";
import TopNavigator from "./components/TopNavigator";
import { Link } from "react-router-dom";
import "./components/Buttons.css";
import "./SelectUploadPage.css";
import { GlobalContext } from "./context/GlobalContext";

const SelectUploadPage = ({ history }) => {
  const { jsonData, setData } = useContext(GlobalContext);
  const btn_div = {
    padding: "3%",
  };

  useEffect(() => {
    return function cleanup() {
      setData(() => [{ url: "" }]);
    };
  }, [jsonData]);

  return (
    <div style={{ textAlign: "center", width: "100%" }}>
      <TopNavigator />
      <div style={{ fontSize: "2.5vw", paddingTop: "3vh" }}>계산 방식</div>
      <div style={{ fontSize: "1.3vw", color: "gray", paddingTop: "1vh" }}>
        과일을 계산할 방식을 선택해 주세요
      </div>

      <Link to="/imageupload" style={{ textDecoration: "none" }}>
        <div class="select_button">사진 업로드</div>
      </Link>

      <Link to="/webcam" style={{ textDecoration: "none" }}>
        <div class="select_button">실시간 카메라</div>
      </Link>

      <div style={btn_div} style={{ paddingTop: "2vh" }}>
        <Link to="/">
          <div className="gray_button">이전으로</div>
        </Link>
      </div>
    </div>
  );
};

export default SelectUploadPage;
