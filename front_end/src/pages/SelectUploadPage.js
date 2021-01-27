import React from "react";
import TopNavigator from "./components/TopNavigator";
import { Link } from "react-router-dom";
import "./components/Buttons.css";
import "./SelectUploadPage.css";

const SelectUploadPage = ({ history }) => {

  const btn_div = {
    padding: "3%",
  };

  return (
    <div style={{ textAlign: "center", width: "100%" }}>
      <TopNavigator />
      <div style={{ fontSize: "2.5rem", paddingTop: "1.5%"}}>
        계산 방식
      </div>
      <div style={{ fontSize: "1.3rem", color:"gray", paddingTop: "1%"}}>
        과일을 계산할 방식을 선택해 주세요
      </div>

                    <Link to="/imageupload" style={{ textDecoration: "none" }}>
                    <div class="select_button">사진 업로드</div>
                </Link>

                    <Link to="/webcam" style={{ textDecoration: "none" }}>
                        <div class="select_button">실시간 카메라</div>
                    </Link>


      <div style={btn_div} style={{paddingTop:"2%"}}>
        <Link to="/">
          <div className="gray_button">이전으로</div>
        </Link>
      </div>
    </div>
  );
};

export default SelectUploadPage;
