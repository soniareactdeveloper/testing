import { useState } from "react";

const Validation = () => {
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailErr("Please enter your email");
    } else {
      setEmailErr("");
      alert("Email is submitted");
    }
  };

  return (
    <div className="bg-[#5d625e] w-full min-h-screen flex justify-center items-center flex-col gap-6 px-4">
      <h1 className="font-bold font-sans text-white text-4xl">Validation</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-5 w-full max-w-md"
      >
        {/* Email input */}
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="w-full px-5 py-3 border border-white outline-none rounded-md bg-white placeholder-gray-600"
          type="text"
          placeholder="Enter your email"
        />
        {emailErr && (
          <p className="text-red-300 font-medium -mt-3">{emailErr}</p>
        )}

        {/* Password input with show/hide */}
        <div className="relative w-full">
          <input
            className="w-full px-5 py-3 border border-white outline-none rounded-md bg-white placeholder-gray-600 pr-14"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-sm text-blue-600 font-semibold"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 rounded-md bg-white text-gray-800 font-semibold hover:bg-gradient-to-r from-purple-400 to-blue-300 transition-all duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Validation;
