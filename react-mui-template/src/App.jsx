import { useState } from "react";
import "./styles/index.scss";
import RouterView from "./components/router-view";
import Main from "./components/main";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Main></Main>
    </div>
  );
}

export default App;
