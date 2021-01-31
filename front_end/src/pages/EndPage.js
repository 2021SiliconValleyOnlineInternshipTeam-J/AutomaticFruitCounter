import React, { useContext, useEffect, useState } from "react";
import TopNavigator from "./components/TopNavigator";
import "./components/Buttons.css";
import { Link } from "react-router-dom";
import './EndPage.css';
import { GlobalContext } from "./context/GlobalContext";

const LastPage = () => {
  const { jsonData } = useContext(GlobalContext);
  const [amount, setAmount] = useState(0);

  const thanks_div = {
    fontSize: "4rem",
    color: "#FFE32C",
    paddingTop: "15%",
  };
  const result_div = {
    fontSize: "2.5rem",
    paddingTop: "2%",
    paddingBottom: "4%",
  };

  useEffect(() => {
    const valueList = Object.values(jsonData[0]);
    let sum = 0;
    for (let i = 0; i < valueList.length - 1; i++) {
      sum = sum + valueList[i][0] * valueList[i][1];
    }
    setAmount(sum);
    console.log("endpage");
  }, [jsonData]);

  return (
    <div style={{ textAlign: "center"}}>
      <TopNavigator />
        <div style={{ paddingTop: "4%"}} ></div>
        <div className="check"></div>
      <div style={thanks_div}>감사합니다!</div>
      <div style={result_div}>
        <span>{amount}</span>원이 결제되었습니다
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
