// 모듈폴더 속 index

// memo의 값(작성한 리덕스 모듈들)을 묶어주는 역할
// 방식: combineReducer
// 작성한 리덕스 모듈을 하나로 묶어서 사용
import { combineReducers } from "redux";

// 1 작성한 리덕스 모듈을 가져옴
import memo from "./memo";

// 2 작성한 리덕스를 객체로 묶어서 내보냄
const rootReducer = combineReducers({memo});

export default rootReducer;