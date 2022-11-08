import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { addmemo } from "../modules/memo";

const MemoComp = () => {
    // 인풋박스 내부 데이터 관리
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const date = new Date();

    // useDispatch()를 통해, 값을 들고와 새 리스트 생성 > memo.js 모듈생성
    // 값을 모든 컴포넌트에서 사용 (자주 바뀌지 않도록)
    // 리듀서를 이용한 화면 데이터 제어 :: useSelector로 가져온 값은 dispatch일어나면 다시 가져옴
    const memolist = useSelector((state)=>state.memo.memolist);
    const dispatch = useDispatch();
    // addMemo함수 > dispatch 사용하기 
    const addMemo = useCallback(()=>{ 
        dispatch (addmemo (
            {
            name:name,
            text:text
            }
        )) },[dispatch,name,text]);


    return ( 
        <div>
            <h1>방명록을 작성하세요</h1>
            
            <div className="guest-form">
            <button className="move-btn">
                <Link to="/" style={{textDecorationLine:'none', color:'brown'}}>
                홈으로 돌아가기</Link>
            </button>
                <hr />
            <input type="text" placeholder="이름" onChange={(e)=>{setName(e.target.value)}}/>
            <input type="text"  placeholder="내용을 작성하세요" onChange={(e)=>{setText(e.target.value)}}/>
            <button onClick={addMemo}>등록</button>
            {   //자바스크립트 내용이므로 반드시 중괄호 안에서 map사용해야
                // map: 배열에 있는 요소들 가져와서 return
                memolist.map((memo)=>
                (
                    <div>
                        <h5> {memo.name} : {memo.text} 　 | {date.getMonth()+1}/{date.getDate()}</h5>
                    </div>
                ) )
            }
                <hr />
            </div>

        </div>
    );
}

export default MemoComp;