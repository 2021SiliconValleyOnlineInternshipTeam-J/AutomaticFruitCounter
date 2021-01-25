import React from "react";
import TopNavigator from "./components/TopNavigator";
import "./components/Buttons.css";
import { Link } from "react-router-dom";

const LastPage = () => {
  const thanks_div = {
    fontSize: "600%",
    color: "#FFE32C",
    padding: "3%",
  };
  const result_div = {
    fontSize: "330%",
    padding: "1%",
  };
  return (
    <div style={{ textAlign: "center" }}>
      <TopNavigator />
      <div style={thanks_div}>감사합니다🍒</div>
      <div style={result_div}>
        <span></span>원이 결제되었습니다
      </div>
      <div>
        <Link to="/">
          <div className="yellow_button">확인하기</div>
        </Link>
      </div>
    </div>
  );
};

export default LastPage;
