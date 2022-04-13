import './App.css';
import MyTable from "./components/MyTable"
import PopUpTable from "./components/PopUpTable"
import {BrowserRouter ,Route, Routes} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyTable/>}/>
        <Route path="/popup" element={<PopUpTable/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
