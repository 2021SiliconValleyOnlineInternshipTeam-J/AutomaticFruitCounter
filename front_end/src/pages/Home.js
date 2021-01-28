import React from "react";
import { Link } from "react-router-dom"; //React-Router import
import './Home.css';

const Home = () => {
  const parent_div = {
    width: "100%",
    height: "100%",
    textAlign: "center"
  };

  const title_style = {
    marginTop: "10%",
  };
  return (
        <div style={parent_div}>
          <div style={title_style}>
            <div className="container2">
        <span className="text1">편리한 쇼핑을 도와 주는</span>
        <span className="text2">셀프 과일 계산대</span>
              </div>
          </div>
          <Link to="/selectupload">
            <div className="title_yellow_button" >시작하기</div>
          </Link>
        </div>
  );
};

export default Home;
