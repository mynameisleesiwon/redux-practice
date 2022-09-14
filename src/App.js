import { useDispatch, useSelector } from "react-redux/es/exports";
import "./App.css";
import Box from "./component/Box";

function App() {
  // useSelector는 state를 매게변수로 받음
  // state중에서 count만 가져온다. 그것을 count에 쏙 넣음
  let count = useSelector((state) => state.count);
  let id = useSelector((state) => state.id);
  let pwd = useSelector((state) => state.password);
  const dispatch = useDispatch();

  const minus = () => {
    if (count !== 0) {
      dispatch({ type: "MINUS" });
    } else {
      count = 0;
    }
  };
  const plus = () => {
    // useDispatch를 통해 Action(객체)을 던짐
    // Action안에는 반드시 type이라는 키와 payload(선택사항)라는 키가 있어야함
    // type : Action의 이름
    // payload : 함수의 매개변수같은 느낌, 내가 원하는 정보를 보내줄 수 있음
    dispatch({ type: "PLUS", payload: { num: 5 } });
  };

  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "siwon", password: "123" } });
  };

  return (
    <div>
      <h1>
        {id},{pwd}
      </h1>
      <h1>{count}</h1>
      <button onClick={minus}>-1</button>
      <button onClick={plus}>+1</button>
      <button onClick={login}>Login</button>
      <Box />
    </div>
  );
}

export default App;
