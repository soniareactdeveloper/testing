import { Route, Routes } from "react-router";
import "./App.css";
import Counter from "./Pages/Counter";
import Input from "./Pages/Input";
import Toggle from "./Pages/Toggle";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/input" element={<Input />} />
        <Route path="/toggle" element={<Toggle/>} />
        
      </Routes>
    </>
  );
}

export default App;
