import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { addmemo } from "../modules/memo";

const MemoComp = () => {
    // 인풋박스 내부 데이터 관리
    const memolist = useSelector((state)=>state.memo.memolist);
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const date = new Date();

    // useDispatch()를 통해 추가한 새 리스트 생성 
    // > memo.js 모듈생성
    const dispatch = useDispatch();
    // useCallback 사용시, 입력값에 따라바뀔수 있도록
    const addMemo = useCallback(()=>{ 
        dispatch(addmemo( {name:name, text:text} ) )
    },[dispatch,name,text]);


    return ( 
        <div>
            <h1>방명록을 작성해주세요</h1>
            
            <div className="guest-form">
            <button className="move-btn">
                <Link to="/" style={{textDecorationLine:'none', color:'brown'}}>
                홈으로 돌아가기</Link>
            </button>
                <hr />
            <input type="text" placeholder="이름" onChange={(e)=>{setName(e.target.value)}}/>
            <input type="text"  placeholder="내용을 작성하세요" onChange={(e)=>{setText(e.target.value)}}/>
            <button onClick={addMemo}>등록</button>
            {   
                // map: 배열에 있는 요소들 가져와 return
                memolist.map((memo)=>(
                    <div>
                        <h5> {memo.name} : {memo.text} 　 | {date.getMonth()+1}월{date.getDate()}일</h5>
                    </div>
                ))
            }
                <hr />
            </div>

        </div>
    );
}

export default MemoComp;