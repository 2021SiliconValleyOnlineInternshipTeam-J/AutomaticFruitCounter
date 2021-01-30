import React from "react";
import TopNavigator from "./components/TopNavigator";
import "./components/Buttons.css";
import { Link } from "react-router-dom";
import './EndPage.css';

const LastPage = () => {
  const thanks_div = {
    fontSize: "5rem",
    color: "#FFE32C",
    paddingTop: "2%",
  };
  const result_div = {
    fontSize: "2rem",
    paddingTop: "2%",
      paddingBottom: "4%"
  };
  return (
    <div style={{ textAlign: "center"}}>
      <TopNavigator />
        <div style={{ paddingTop: "13%"}} ></div>
        <div className="check"></div>
      <div style={thanks_div}>감사합니다!</div>
      <div style={result_div}>s
        <span></span>원이 결제되었습니다
      </div>
      <div>
        <Link to="/">
          <div className="yellow_button" style={{boxShadow:"1px 6px 10px 0 rgba(88, 67, 0, 0.24)"}}>확인하기</div>
        </Link>
      </div>
    </div>
  );
};

export default LastPage;
