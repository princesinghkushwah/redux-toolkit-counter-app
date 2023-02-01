import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Inc, Dec } from "./states/reducers/index";



const App = () => {
  const curState = useSelector((state)=> state.number)

  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>{curState}</h1>
      <button onClick={()=>dispatch(Inc(10))}>inc</button>
      <button onClick={()=>dispatch(Dec(5))}>dec</button>
    </div>
  );
};

export default App;
