import { Route, Routes } from "react-router";
import "./App.css";
import Counter from "./Pages/Counter";
import Input from "./Pages/Input";
import Toggle from "./Pages/Toggle";
import DarkMode from "./Pages/DarkMode";
import Validation from "./Pages/Validation";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/input" element={<Input />} />
        <Route path="/toggle" element={<Toggle/>} />
        <Route path="/dark-mode" element={<DarkMode/>} />
        <Route path="/validation" element={<Validation/>}/>
        
      </Routes>
    </>
  );
}

export default App;
