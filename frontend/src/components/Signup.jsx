import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL;

const Signup = () => {
  const [showPw, setShowPw] = useState(false);
  const [showPw2, setShowPw2] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpass, setCpass] = useState("");
  const [eUname, setUname] = useState(false);
  const [epass, setEPass] = useState(false);
  const [ecpass, setECPass] = useState(false);
  const navigate = useNavigate();

  const signUp = (event) => {
    event.preventDefault();
    if (username !== "" && password !== "") {
      if (password === cpass) {
        const data = {
          username: username,
          password: password,
        };
        axios
          .post(`${apiUrl}/signup`, data)
          .then(() => {
            console.log("success");
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        setECPass(true);
      }
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
      <div className="mt-12 bg-[#235e86] backdrop-blur-lg rounded-md px-10 py-5">
        <h1 className="text-3xl drop-shadow-xl text-[#f4f5f4] font-bold text-center mb-4">
          Signup
        </h1>
        <form onSubmit={signUp} className="flex flex-col gap-4" method="post">
          <div>
            <label
              className="text-2xl drop-shadow-xl text-[#f4f5f4] font-semi-bold  mb-4"
              htmlFor="username">
              Username:
            </label>
            <input
              type="text"
              className={`w-full drop-shadow-lg bg-[#f4f5f4] text-[#235e86] ${
                eUname ? "border border-[#ff4141]" : "border-0"
              }  p-2 outline-0 rounded`}
              name="username"
              placeholder="Enter Username..."
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

          <div className="relative">
            <label
              className="text-2xl drop-shadow-xl text-[#f4f5f4] font-semi-bold mb-4"
              htmlFor="cpassword">
              Confirm Password:
            </label>
            <input
              type={showPw2 ? "text" : "password"}
              placeholder="Confirm Password"
              name="cpassword"
              id="cpassword"
              value={cpass}
              onChange={(e) => setCpass(e.target.value)}
              className={`w-full drop-shadow-lg bg-[#f4f5f4] text-[#235e86] ${
                ecpass ? "border border-[#ff4141]" : "border-0"
              }  p-2 outline-0 rounded`}
            />
            <div className="absolute inset-y-0 top-8 right-0 flex items-center pr-3">
              {showPw2 ? (
                <FiEye
                  className="cursor-pointer"
                  onClick={() => setShowPw2(!showPw2)}
                />
              ) : (
                <FiEyeOff
                  className="cursor-pointer"
                  onClick={() => setShowPw2(!showPw2)}
                />
              )}
            </div>
          </div>
          <p className="text-[#ff4141]">
            {ecpass ? "Password don't match" : ""}
          </p>

          <div className="flex justify-between items-center mt-5">
            <Link className="text-[#f4f5f4] underline" to="/">
              Login
            </Link>
            <button
              type="submit"
              className="bg-[#f4f5f4] hover:bg-[#64b9d8] text-[#235e86] rounded px-3 py-2">
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;