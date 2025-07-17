import React, { useState } from "react";

const Toggle = () => {
  const [visible, setVisible] = useState(false);

  const handleBtn = () => {
    setVisible(!visible);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#1e293b] text-white transition-all duration-300">
      <h1 className="text-3xl font-bold text-purple-400 mb-6 animate-pulse">Toggle Visibility</h1>

      <button
        onClick={handleBtn}
        className="px-6 py-2 mb-4 bg-purple-600 hover:bg-purple-500 text-white rounded-full shadow-lg transition duration-300"
      >
        {visible ? "Hide" : "Show"}
      </button>

      {visible && (
        <p className="max-w-md text-center text-lg text-purple-200 px-4 animate-fadeIn">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate iure ut
          suscipit optio corporis aliquam sapiente odit, quis neque distinctio.
        </p>
      )}
    </div>
  );
};

export default Toggle;

