// 방명록 메모배열 저징
// 1 초기값
const initialState = {
    memolist : [
        {
            name : "짱구",
            text : "내가 왔다!"
        }
    ]
}

// 액션함수 내보내기
export const addmemo = (memo) => ({type:"addMemo", payload: memo})

// 2 리듀서값(변경값)
function memo (state=initialState, action) {
    switch (action.type) {
        // 새로운 메모생성
        case "addMemo":
            const newMemo = {
                name : action.payload.name,
                text : action.payload.text,
            }
            // 새로운 메모를 가지는 리스트
            const newMemoList = state.memolist.concat(newMemo);
            // 전체state에서, add로 객체를 추가(newMemoList)한다는 내용
            return { ...state, memolist : newMemoList }

        default:
            return state;
    }
}

// 3 만든 리듀서 내보내기
export default memo;