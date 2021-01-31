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
    fontSize: "2rem",
    color: "gray",
    paddingTop: "1%",
  };
  const table_div = {
    textAlign: "center",
    border: "1px solid #AAAAAA",
    width: "60%",
    display: "inline-block",
    borderRadius: "38px",
    padding: "3%",
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
      <div>{}</div>
      <div style={img_div}>
        <div style={{ fontSize: "2.5rem", paddingTop: "1.5%" }}>계산결과</div>
        <img
          src={"data:image/jpeg;base64," + jsonData[0].url}
          alt="이미지가 없습니다"
          style={{ height: "12em" }}
        ></img>
      </div>
      <div style={q_div}>
        <span>{amount}원</span>을 결제하시겠습니까?
      </div>
      <div style={table_div}>
        <table
          style={{
            fontSize: "1.3rem",
            display: "inline-block",
            border: "1px dashed #bcbcbc",
            padding: "2% 3%",
            borderRadius: "10px",
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
              <td colSpan="2">총액</td>
              <td className="amount">{amount}</td>
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
