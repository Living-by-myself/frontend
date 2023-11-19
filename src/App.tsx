import ModalView from "./components/common/modalView";
import Router from "./shared/Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Router></Router>
      <ModalView />
    </BrowserRouter>
  );
}

export default App;
