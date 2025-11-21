import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isMember, setIsMember] = useState(true);
  function toggleSignIn() {
    setIsMember(!isMember);
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/58622d3e-49bc-482d-8b16-bddc4b672e8e/web/TW-zh-20251110-TRIFECTA-perspective_090abb8b-c981-4b8c-8233-29cf7103a52e_small.jpg"
          alt="background-img"
        />
      </div>
      <form
        className="bg-black absolute w-3/12 p-12 my-36 mx-auto left-0 right-0 rounded-md text-white bg-opacity-70"
        action=""
      >
        <h1 className="font-bold text-2xl p-4">{isMember ? "登入" : "註冊"}</h1>
        {!isMember && (
          <input
            className="w-full m-2 p-2 rounded-lg bg-gray-700"
            type="text"
            placeholder="姓名"
          />
        )}
        <input
          className="w-full m-2 p-2 rounded-lg bg-gray-700"
          type="text"
          placeholder="電子郵件地址或手機號碼"
        />
        <input
          className="w-full m-2 p-2 rounded-lg bg-gray-700"
          type="password"
          placeholder="密碼"
        />
        <button className="bg-red-700 p-2 m-2 w-full rounded-lg">
          {isMember ? "登入" : "註冊"}
        </button>
        <p onClick={toggleSignIn} className="p-2 m-2 cursor-pointer">
          {isMember ? "尚未加入 Netflix？馬上註冊。" : "已經是會員？請登入"}
        </p>
      </form>
    </div>
  );
};

export default Login;
