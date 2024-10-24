import logo from "./logo.svg";
import "./App.css";
import Route from "./route/route";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  );
}

export default App;
