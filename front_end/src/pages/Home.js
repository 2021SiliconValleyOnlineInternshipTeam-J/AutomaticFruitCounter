import React from "react";
import { Link } from "react-router-dom"; //React-Router import

const Home = ({ history }) => {
  const parent_div = {
    width: "100%",
    height: "100%",
    textAlign: "center",
  };
  const button_style = {
    backgroundColor: "#FFE32C",
    color: "white",
    width: "23.2%",
    fontSize: "3em",
    borderRadius: "32px",
    marginTop: "10%",
    display: "inline-block",
  };
  const title_style = {
    marginTop: "10%",
  };
  return (
    <div style={parent_div}>
      <div style={title_style}>
        <span style={{ fontSize: "6em", color: "#FFE32C" }}>셀프 </span>
        <span style={{ fontSize: "6em", color: "#939393" }}>과일 계산대</span>
      </div>
      <Link to="/selectupload">
        <div style={button_style}>시작하기</div>
      </Link>
    </div>
  );
};

export default Home;
