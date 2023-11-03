import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";

import BaseInput from "../../components/Input/Input";
import BaseButton from "../../components/Button";
import CheckBox from "../../components/Checkbox";
import Gmail from "../../assets/Gmail.jpg";
import Facebook from "../../assets/Facebook.png";
import Instagram from "../../assets/Instagram.png";
import Linkedin from "../../assets/Linkedin.png";
import Auth_bg from "../../assets/authen_bg.png";
import { useAuth } from "../../hooks/Auth";

function Login() {
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  const [errorLogin, setErrorLogin] = useState("");

  const { login } = useAuth();

  const handleLogin = async () => {
    if (email && passwd) {
      const dataLogin = await login({ username: email, passwd });

      if (dataLogin?.message) {
        setErrorLogin(dataLogin.message);
      }
    }
  };

  return (
    <div className="flex flex-wrap h-screen">
      <div className="flex justify-center items-center flex-col h-screen w-full lg:w-1/2">
        <div className="text-black text-3xl font-semibold leading-10">Sign In</div>
        {errorLogin ? (
          <div className="text-red-400 mt-4">{errorLogin}</div>
        ) : (
          <div className="text-gray-400  leading-7 mt-4">
            Sign in to stay connected.
          </div>
        )}
        <BaseInput
          classExtend="mt-4"
          classInput="w-96"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <BaseInput
          classExtend="mt-4"
          classInput="w-96"
          label="Password"
          type="password"
          onChange={(e) => setPasswd(e.target.value)}
        />
        <div className="flex flex-row w-96 justify-between items-center mt-2.5">
          <CheckBox label={<p className="ml-3 text-gray-400 ">Remember me?</p>} />
          <Link to="/reset-password">
            <div className="text-[#C7923E]  leading-7">Forgot Password</div>
          </Link>
        </div>
        <BaseButton
          className="bg-[#3A57E8] w-48 h-11 mt-6 rounded"
          content="Sign in"
          disabled={email.length < 1 || passwd.length < 1}
          onClick={handleLogin}
        />
        <div className="text-slate-800 mt-5">or sign in with other accounts?</div>
        <div className="flex flex-wrap mt-5">
          <img src={Gmail} alt="icon" />
          <img src={Facebook} alt="icon" />
          <img src={Instagram} alt="icon" />
          <img src={Linkedin} alt="icon" />
        </div>
        <div className="mt-1">
          <span className="text-slate-800  leading-7">Don’t have an account? </span>
          <Link to="/signup">
            <span className="text-[#C7923E]  leading-7">
              Click here to sign up.
            </span>
          </Link>
        </div>
      </div>
      <div className="w-1/2 hidden lg:block">
        <img className="w-full h-screen object-cover" src={Auth_bg} alt="bg" />
      </div>
    </div>
  );
}

export default Login;
