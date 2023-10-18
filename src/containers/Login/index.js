import BaseInput from "../../components/Input/Input";

import BaseButton from "../../components/Button";
import CheckBox from "../../components/Checkbox";

import Gmail from "../../assets/Gmail.jpg";
import Facebook from "../../assets/Facebook.png";
import Instagram from "../../assets/Instagram.png";
import Linkedin from "../../assets/Linkedin.png";
import Auth_bg from "../../assets/authen_bg.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div class="flex flex-wrap h-screen">
      <div class="flex justify-center items-center flex-col h-screen w-full lg:w-1/2">
        <div class="text-black text-3xl font-semibold leading-10">Sign In</div>
        <div class="text-gray-400  leading-7 mt-4">
          Sign in to stay connected.
        </div>
        <BaseInput classExtend="mt-4" classInput="w-96" label="Email" />
        <BaseInput classExtend="mt-4" classInput="w-96" label="Password" />
        <div class="flex flex-row w-96 justify-between items-center mt-2.5">
          <CheckBox label={<p class="ml-3 text-gray-400 ">Remember me?</p>} />
          <Link to="/reset-password">
            <div class="text-[#C7923E]  leading-7">Forgot Password</div>
          </Link>
        </div>
        <BaseButton
          className="bg-[#3A57E8] w-48 h-11 mt-6 rounded"
          content="Sign in"
        />
        <div class="text-slate-800 mt-5">or sign in with other accounts?</div>
        <div class="flex flex-wrap mt-5">
          <img src={Gmail} alt="icon" />
          <img src={Facebook} alt="icon" />
          <img src={Instagram} alt="icon" />
          <img src={Linkedin} alt="icon" />
        </div>
        <div class="mt-1">
          <span class="text-slate-800  leading-7">Don’t have an account? </span>
          <Link to="/signup">
            <span class="text-[#C7923E]  leading-7">
              Click here to sign up.
            </span>
          </Link>
        </div>
      </div>
      <div class="w-1/2 hidden lg:block">
        <img class="w-full h-screen object-cover" src={Auth_bg} alt="bg" />
      </div>
    </div>
  );
}

export default Login;