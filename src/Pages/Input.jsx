import { useState } from "react";

const Input = () => {
  const [text, setText] = useState("");

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#1e293b] text-white">
      <h1 className="text-2xl font-bold mb-6 text-purple-400 animate-pulse">Live Input Preview</h1>

      <input
        onChange={(e) => setText(e.target.value)}
        type={text? text : "please enter something"}
        placeholder="Type something..."
        className="w-64 px-4 py-2 rounded-lg bg-[#334155] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
      />

      <p className="mt-4 text-lg font-medium text-purple-200">{text}</p>
    </div>
  );
};

export default Input;
