import "./App.css";
import { UserView } from "./features/user/UserView";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SingleUser } from "./features/user/SingleUser";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<UserView />}></Route>
          <Route path="/id" element={<SingleUser />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
