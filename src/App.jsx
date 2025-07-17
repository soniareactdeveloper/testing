import { Route, Routes } from "react-router";
import "./App.css";
import Counter from "./Pages/Counter";
import Input from "./Pages/Input";
import Toggle from "./Pages/Toggle";
import DarkMode from "./Pages/DarkMode";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/input" element={<Input />} />
        <Route path="/toggle" element={<Toggle/>} />
        <Route path="/dark-mode" element={<DarkMode/>} />
        
      </Routes>
    </>
  );
}

export default App;
