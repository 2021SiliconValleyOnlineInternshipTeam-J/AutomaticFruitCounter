import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./components/Buttons.css";
import TopNavigator from "./components/TopNavigator";
import "./ResultPage.css";
import { GlobalContext } from "./context/GlobalContext";

const ResultPage = () => {
  const { jsonData } = useContext(GlobalContext);
  const [amount, setAmount] = useState(0);
  const [list, setList] = useState([]);

  const parent_div = {
    width: "100%",
    height: "100%",
    textAlign: "center",
  };
  const q_div = {
    fontSize: "2vw",
    color: "gray",
    paddingTop: "2.5vh",
    paddingBottom: "2.5vh",
  };
  const table_div = {
    textAlign: "center",
    border: "1px solid #AAAAAA",
    width: "60%",
    display: "inline-block",
    borderRadius: "38px",
    background: "#FFFFFF",
    maxWidth: "35vw",
    marginBottom: "2.5vh",
    boxShadow:
      "rgb(0 0 0 / 10%) 0px 0px 20px 0px, rgb(0 0 0 / 7%) 0px 5px 5px 0px",
  };
  const img_div = {
    height: "100%",
    imageAlign: "center",
  };

  useEffect(() => {
    setList(() => []);
    let fruitList = [];
    let valueList = [];
    fruitList = Object.keys(jsonData[0]);
    valueList = Object.values(jsonData[0]);

    let sum = 0;
    for (let i = 0; i < valueList.length - 1; i++) {
      sum = sum + valueList[i][0] * valueList[i][1];
    }
    setAmount(sum);
    let resultNum = 0;
    let price = 0;
    let fruit_name = "";
    let data_result = [];

    for (let i = 0; i < valueList.length - 1; i++) {
      fruit_name = fruitList[i];
      resultNum = valueList[i][0];
      price = resultNum * valueList[i][1];
      data_result[i] = [fruit_name, resultNum, price];
    }
    setList((preArray) => [
      ...preArray,
      data_result.map((array) => (
        <tr>
          {array.map((number) => (
            <td>{number}</td>
          ))}
        </tr>
      )),
    ]);
  }, [jsonData]);

  return (
    <div style={{ textAlign: "center" }}>
      <TopNavigator />
      <div style={img_div}>
        <div
          style={{ fontSize: "2.5vw", paddingTop: "3vh", paddingBottom: "3vh" }}
        >
          계산결과
        </div>
        <img
          src={"data:image/jpeg;base64," + jsonData[0].url}
          alt="이미지가 없습니다"
          style={{ height: "17em" }}
        ></img>
      </div>
      <div style={q_div}>
        <span style={{ color: "rgb(255 204 0)" }}>{amount}원</span>을
        결제하시겠습니까?
      </div>
      <div style={table_div}>
        <table
          style={{
            fontSize: "1.3vw",
            display: "inline-block",
            padding: "2vh 3vh",
            borderRadius: "3vw",
          }}
        >
          <thead>
            <tr>
              <th>상품명</th>
              <th>수량</th>
              <th>금액</th>
            </tr>
          </thead>
          <tbody>{list}</tbody>
          <tfoot>
            <tr>
              <td colSpan="2" style={{ color: "black" }}>
                총액
              </td>
              <td className="amount" style={{ color: "black" }}>
                {amount}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div>
        <Link to="/selectupload">
          <div className="gray_button">취소하기</div>
        </Link>
        <Link to="/end">
          <div className="yellow_button">결제하기</div>
        </Link>
      </div>
    </div>
  );
};

export default ResultPage;
