import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(10);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#1e293b] text-white">
      <h1 className="text-3xl font-bold mb-6 animate-pulse text-purple-400">React Counter</h1>

      <div className="flex items-center space-x-4">
        <button
          onClick={() => setCount((item) => item + 1)}
          className="bg-purple-600 hover:bg-purple-500 text-white font-bold text-xl px-4 py-2 rounded-full shadow-lg transition duration-300"
        >
          +
        </button>

        <p className="text-2xl font-semibold w-10 text-center">{count}</p>

        <button
          onClick={() => setCount((item) => item - 1)}
          disabled={count === 0}
          className={`${
            count === 0
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-purple-600 hover:bg-purple-500'
          } text-white font-bold text-xl px-4 py-2 rounded-full shadow-lg transition duration-300`}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
