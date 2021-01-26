import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./components/Buttons.css";
import TopNavigator from "./components/TopNavigator";
import "./ResultPage.css";
//import result_image from "./logo512.png"; //test용 이미지 대입
// import { JsonToTable } from "react-json-to-table";
//style
const q_div = {
  fontSize: "200%",
};
const table_div = {
  textAlign: "center",
  border: "1px solid #AAAAAA",
  width: "60%",
  display: "inline-block",
  borderRadius: "38px",
  padding:"3%"
};
const img_div = {
  height: "100%",
  imageAlign: "center",
};
class FruitField extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.fruit.name} </td>
        <td>{this.props.fruit.num}</td>
        <td>{this.props.fruit.total}</td>
      </tr>
    );
  }
}
class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bill: [
        //test용 bill
        {
          name: "apple",
          num: 1,
          total: 1000,
        },
        {
          name: "pineapple",
          num: 3,
          total: 2000,
        },
        {
          name: "peach",
          num: 5,
          total: 3000,
        },
        {
          name: "kiwi",
          num: 23,
          total: 10000,
        },
        {
          name: "watermelon",
          num: 1,
          total: 10000,
        },
      ],
      // bill: [
      //   {
      //     name: "apple",
      //     num: 1,
      //     total: 1000,
      //   },
      // ],
    };
  } //json받기 //this.setState + axios 이용

  render() {
    // key 부여
    const mapToComponent = (data) => {
      return data.map((fruit, i) => {
        return <FruitField fruit={fruit} key={i} />;
      });
    };
    return <tbody>{mapToComponent(this.state.bill)}</tbody>;
  }
}

class ResultPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      amount: 0,
    };
  } //총액과 이미지 받기 //this.setState + axios 이용
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <TopNavigator />
        <div style={img_div}>
          <div style={{ fontSize: "200%", padding: "1%" }}>계산결과</div> 
          <img src={this.state.image} style={{ height: "12em" }}></img>
        </div>
        <div style={q_div}>
          <span>{this.state.amount}원</span>을 결제하시겠습니까?    
        </div>
        <div style={table_div}>
          <table style={{ fontSize: "150%", display: "inline-block" }}>
            <thead>
              <tr>
                <th>상품명</th>
                <th>수량</th>
                <th>금액</th>  
              </tr>
            </thead>
            <Table />
            <tfoot>
              <tr>
                <td colSpan="1">총액</td>
                <td></td>
                <td className="amount">{this.state.amount}</td>
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
  }
}

export default ResultPage;
