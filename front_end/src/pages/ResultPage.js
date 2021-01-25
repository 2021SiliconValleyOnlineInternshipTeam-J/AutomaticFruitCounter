import React from 'react';
import { Link } from "react-router-dom";
import './components/Buttons.css';
import TopNavigator from './components/TopNavigator';

const ResultPage = () => {
    const q_div = {
        fontSize: '200%',
    }
    const table_div = {
        textAlign: 'center',
        border: '1px solid #AAAAAA',
        width: '60%',
        display: 'inline-block',
        borderRadius: '38px'
    }
    const img_div = {
        height: '100%'
    }
    return (
        <div style={{textAlign: 'center'}} >
            <TopNavigator />
            
            <div style={img_div}>
                <div style={{fontSize:'200%', padding:'1%'}}>계산결과</div>
                <img style={{height: '12em'}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png'></img>
            </div>
            <div style={q_div}><span>{}원</span>을 결제하시겠습니까?</div>
            <div style={table_div}>
                <table style={{fontSize:'150%', display: 'inline-block'}}>
                    <thead>
                        <tr>
                            <th>상품명</th>
                            <th>수량</th>
                            <th>금액</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan='2'>총액</td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div>
                <Link to='/selectupload'><div className='gray_button'>취소하기</div></Link>
                <Link to='/end'><div className='yellow_button'>결제하기</div></Link>
            </div>
        </div>
    );
};

export default ResultPage;