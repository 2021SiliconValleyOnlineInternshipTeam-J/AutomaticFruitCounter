import React from "react";
import { Link } from "react-router-dom"; //React-Router import
import './Home.css';
import imgfile from './logo/white_logo.png';

const Home = () => {
  const parent_div = {
    width: "100%",
    height: "100%",
    textAlign: "center"
  };

  const title_style = {
    marginTop: "10%",
  };

  const background = {
      width: "100%",
      height: "1000px",
      background: "linear-gradient(-45deg, #F12711, #F5AF19, #F5AF19, #F12711)",
      backgroundSize: "400% 400%",
      animation: "gradient 20s ease infinite",
  };

  return (
      <div style={background}>
        <div style={parent_div}>
            <img className="logo" src={imgfile}/>
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
      </div>
  );
};

export default Home;
