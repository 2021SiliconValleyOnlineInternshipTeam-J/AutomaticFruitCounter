import React, { useContext, useEffect, useState } from "react";
import TopNavigator from "./components/TopNavigator";
import "./components/Buttons.css";
import { Link } from "react-router-dom";
import "./EndPage.css";
import { GlobalContext } from "./context/GlobalContext";
const LastPage = () => {
  const { jsonData, setData } = useContext(GlobalContext);
  const [amount, setAmount] = useState(0);
  const thanks_div = {
    fontSize: "4vw",
    color: "#FFE32C",
    paddingTop: "4vh",
  };
  const result_div = {
    fontSize: "2.5vw",
    paddingTop: "2vh",
    paddingBottom: "4vh",
  };
  useEffect(() => {
    const valueList = Object.values(jsonData[0]);
    let sum = 0;
    for (let i = 0; i < valueList.length - 1; i++) {
      sum = sum + valueList[i][0] * valueList[i][1];
    }
    setAmount(sum);
    return function cleanup() {
      setData(() => [{ url: "" }]);
    };
  }, [jsonData]);

  return (
    <div style={{ textAlign: "center" }}>
      <TopNavigator />
      <div style={{ paddingTop: "17vh" }}></div>
      <div className="check"></div>
      <div style={thanks_div}>감사합니다!</div>
      <div style={result_div}>
        <span>{amount}</span>원이 결제되었습니다
      </div>
      <div>
        <Link to="/">
          <div
            className="yellow_button"
            style={{ boxShadow: "1px 6px 10px 0 rgba(88, 67, 0, 0.24)" }}
          >
            확인하기
          </div>
        </Link>
      </div>
    </div>
  );
};
export default LastPage;
