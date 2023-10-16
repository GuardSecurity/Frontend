import { Link } from "react-router-dom";

import BaseButton from "../../components/Button";
import CheckBox from "../../components/Checkbox";

import Gmail from "../../assets/Gmail.jpg";
import Facebook from "../../assets/Facebook.png";
import Instagram from "../../assets/Instagram.png";
import Linkedin from "../../assets/Linkedin.png";
import Auth_bg from "../../assets/authen_bg.png";
import BaseInput from "../../components/Input/Input";

function SignUp() {
  return (
    <div class="flex flex-wrap h-screen">
      <div class="w-1/2 hidden lg:block">
        <img class="w-full h-screen object-cover" src={Auth_bg} alt="bg" />
      </div>
      <div class="flex justify-center items-center flex-col h-screen w-full lg:w-1/2">
        <div class="text-black text-3xl font-semibold leading-10">Sign Up</div>
        <div class="text-gray-400  leading-7 mt-4">
          Create your Hope UI account
        </div>
        <div class="mt-6 flex ">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
            <BaseInput label="First Name" />
            <BaseInput label="Last Name" />
            <BaseInput label="Email" />
            <BaseInput label="Phone No." />
            <BaseInput label="Password" type="password" />
            <BaseInput label="Confirm password" type="password" />
          </div>
        </div>
        <div class="flex flex-row w-96 justify-center items-center mt-2.5">
          <CheckBox
            label={
              <p class="ml-3 text-gray-400 ">I agree with the terms of use</p>
            }
          />
        </div>
        <BaseButton
          className="bg-[#3A57E8] w-48 h-11 mt-6 rounded"
          content="Sign up"
        />
        <div class="text-slate-800 mt-5">or sign up with other accounts?</div>
        <div class="flex flex-wrap mt-5">
          <img src={Gmail} alt="icon" />
          <img src={Facebook} alt="icon" />
          <img src={Instagram} alt="icon" />
          <img src={Linkedin} alt="icon" />
        </div>
        <div class="mt-1">
          <span class="text-slate-800  leading-7">Already have an Account</span>
          <Link to="/login">
            <span class="text-orange-400  leading-7"> Sign in</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
