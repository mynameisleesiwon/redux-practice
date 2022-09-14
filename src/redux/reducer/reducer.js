// state 초기화
let initialState = {
  count: 0,
  id: "",
  password: "",
};

// reducer는 action 매개변수를 통해 자동으로 dispatch가 던진 액션을 받아올 수 있다.
function reducer(state = initialState, action) {
  // 받아오는 지 확인 작업
  console.log("액션을 무엇일까? ", action);
  // if문 사용
  if (action.type === "PLUS") {
    // return을 통해 Store에 저장되어있는 값을 바꿈
    // reducer는 항상 return을 해줘야함
    // ...state(spread 함수)를 한 이유 : state가 여러 개 있을 경우, 기존 객체내용을 복사해 새로운 객체에 전달 가능. 그것을 return해야 store가 바뀐 것을 인식
    // 기본적으로 쳐라
    return { ...state, count: state.count + action.payload.num };
  } else if (action.type === "MINUS") {
    return { ...state, count: state.count - 1 };
  } else if (action.type === "LOGIN") {
    return {
      ...state,
      id: action.payload.id,
      password: action.payload.password,
    };
  }
  // Default
  return { ...state };

  // 또는 Switch문 사용
  //   switch (action.type) {
  //     case "PLUS":
  //       return { ...state, count: state.count + 1 };
  //     case "MINUS":
  //       return { ...state, count: state.count - 1 };
  //     case "LOGIN":
  //       return {
  //         ...state,
  //         id: action.payload.id,
  //         password: action.payload.password,
  //       };
  //     default:
  //       return { ...state };
  //   }
}

export default reducer;
