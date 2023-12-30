import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { IoPersonCircleOutline } from "react-icons/io5";
import axios from "axios";

const Login = () => {
  const [showPw, setShowPw] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [eUname, setUname] = useState(false);
  const [epass, setEPass] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [iPass, setIPass] = useState(false);

  const apiUrl = import.meta.env.VITE_API_URL;

  const login = (event) => {
    event.preventDefault();
    if (username != "" && password != "") {
      setUname(false);
      setEPass(false);
      const data = {
        username: username,
        password: password,
      };
      axios
        .post(`${apiUrl}/login`, data)
        .then((response) => {
          if (response.data.message === "Login successful") {
            navigate("/app");
            console.log(response.data.message);
          } else if (response.data.message === "User not found") {
            setNotFound(true);
            console.log(response.data.message);
          } else {
            setIPass(true);
            console.log(response.data.message);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      if (username == "" && password != "") {
        setUname(true);
        setEPass(false);
      } else if (username != "" && password == "") {
        setUname(false);
        setEPass(true);
      } else {
        setUname(true);
        setEPass(true);
      }
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      {!notFound ? null : (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert">
          <strong className="font-bold">Error! </strong>
          <span className="block sm:inline">User not found.</span>
          <span
            onClick={() => setNotFound(false)}
            className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg
              className="fill-current h-6 w-6 text-red-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20">
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
      )}
      {!iPass ? null : (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert">
          <strong className="font-bold">Error! </strong>
          <span className="block sm:inline">Incorrect Password.</span>
          <span
            onClick={() => setIPass(false)}
            className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg
              className="fill-current h-6 w-6 text-red-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20">
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
      )}
      <div className="mt-24 bg-gradient-to-b from-[#60b5d4] via-[#21597c] to-[#273d54] drop-shadow-xl rounded-md px-10 py-5">
        <IoPersonCircleOutline className="text-5xl drop-shadow-xl text-[#f4f5f4] font-bold mx-auto" />
        <h1 className="text-3xl drop-shadow-xl text-[#f4f5f4] font-semibold text-center mb-4">
          Login
        </h1>
        <form onSubmit={login} className="flex flex-col gap-4" method="post">
          <div>
            <label
              className="text-2xl drop-shadow-xl text-[#f4f5f4] font-semi-bold mb-4"
              htmlFor="username">
              Username:
            </label>
            <input
              type="text"
              placeholder="Username"
              className={`w-full drop-shadow-lg bg-[#f4f5f4] text-[#235e86] ${
                eUname ? "border border-[#ff4141]" : "border-0"
              }  p-2 outline-0 rounded`}
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <p className="text-[#ff4141]">{eUname ? "Username empty " : ""}</p>
          </div>

          <div className="relative">
            <label
              className="text-2xl drop-shadow-xl text-[#f4f5f4] font-semi-bold mb-4"
              htmlFor="password">
              Password:
            </label>
            <input
              type={showPw ? "text" : "password"}
              placeholder="Password"
              name="password"
              id="password"
              className={`w-full drop-shadow-lg bg-[#f4f5f4] text-[#235e86] ${
                epass ? "border border-[#ff4141]" : "border-0"
              }  p-2 outline-0 rounded`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="absolute inset-y-0 top-8 right-0 flex items-center pr-3">
              {showPw ? (
                <FiEye
                  className="cursor-pointer"
                  onClick={() => setShowPw(!showPw)}
                />
              ) : (
                <FiEyeOff
                  className="cursor-pointer"
                  onClick={() => setShowPw(!showPw)}
                />
              )}
            </div>
          </div>
          <p className="text-[#ff4141]">{epass ? "Password empty " : ""}</p>
          <div className="flex justify-between items-center mt-5">
            <Link className="text-[#f4f5f4] underline" to="/Signup">
              Create account
            </Link>
            <button
              type="submit"
              className="bg-[#f4f5f4] hover:bg-[#273d54] text-[#235e86] rounded px-3 py-2">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
