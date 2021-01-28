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
      <div id="home">
        <div style={parent_div}>
            <img className="logo" src="https://postfiles.pstatic.net/MjAyMTAxMjhfMTY3/MDAxNjExODE5NzU1MjY5.j6CM8WPeuQka8KlNCmD5LdZ66ZPC1oQdDVYdcrKqj3kg.0NsDAB8IqrvtaRpFqs57J6TN7ue7FwSaD7zxti8HW3cg.PNG.te04056/logo.png?type=w773"/>
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
