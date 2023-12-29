import { useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import BaseButton from "../../components/Button";
import CheckBox from "../../components/Checkbox";

import Gmail from "../../assets/Gmail.jpg";
import Facebook from "../../assets/Facebook.png";
import Instagram from "../../assets/Instagram.png";
import Linkedin from "../../assets/Linkedin.png";
import Auth_bg from "../../assets/authen_bg.png";
import BaseInput from "../../components/Input/Input";
import { signUp } from "../../utils/auth";
import DateTimePicker from "../../components/DateTimePicker";

function SignUp() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [passwd, setPasswd] = useState("");
  const [confirmpasswd, setconfirmpasswd] = useState("");
  const [address, setAddress] = useState("");
  const [errorMatchPasswd, setErrorMatchPasswd] = useState("");
  const [role, setRole] = useState(2);
  const [gender, setGender] = useState(true);
  const [salary, setSalary] = useState("7000000");
  const [error, setError] = useState("");
  const [isSignUpSuccess, setSignUpSuccess] = useState(false);
  const [isChecked, setChecked] = useState(false);

  const [emailError, setEmailError] = useState('');
  



const validateEmail = (mail) => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (regex.test(mail)) {
    return true;
  }
  return false;
};



  
  const handleSignUp = () => {
    if (
      firstname &&
      lastname &&
      phone &&
      email &&
      gender &&
      address &&
      dob &&
      confirmpasswd &&
      role &&
      salary &&
      isChecked &&
      error === '') {
      signUp({
        email,
        address,
        dob,
        gender,
        passwd,
        confirmpasswd,
        role,
        salary,
        firstname,
        lastname,
        phone,
      }).then((result) => {
        setErrorMatchPasswd('');
        if (result.data) {
          setError('');
          setSignUpSuccess(true);
        } else {
          setError(result.response.data.error);
        }
      });
    } else {
      setError('Please fill all fields!');
      setSignUpSuccess(false);
    }
  };

  return (
    <div className='flex flex-wrap h-screen'>
      <div className='w-1/2 hidden lg:block'>
        <img className='w-full h-screen object-cover' src={Auth_bg} alt='bg' />
      </div>
      {isSignUpSuccess ? (
        <div className='flex justify-center items-center flex-col h-screen w-full lg:w-1/2'>
          <p className='text-green-700 text-2xl'>Sign up successfully !</p>
          <Link to='/login'>
            <p className='text-orange-400 text-xl mt-6'>Login here</p>
          </Link>
        </div>
      ) : (
        <form className='flex justify-center items-center flex-col h-screen w-full lg:w-1/2'>
          <div className='text-black text-3xl font-semibold leading-10'>Sign Up</div>
          <div className='text-gray-400 leading-7 mt-4'>Create your Hope UI account</div>
          {error && <div className='text-red-400 leading-7 mt-4'>{error}</div>}
          <div className='mt-6 flex'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6'>
              <BaseInput
                label='First Name'
                onChange={(e) => {
                  setfirstname(e.target.value);
                }}
                onBlur={() => {
                  if (firstname.length === 0) {
                    setError('First Name is required!');
                  } else {
                    setError('');
                  }
                }}
                // error={firstname.length === 0 ? 'Required' : false}
              />

              <BaseInput
                label='Last Name'
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                onBlur={() => {
                  if (lastname.length === 0) {
                    setError('Last Name is required!');
                  } else {
                    setError('');
                  }
                }}
                // error={lastname.length === 0 ? 'Required' : false}
              />

              <BaseInput
                label='Email'
                onChange={(e) => {
                  setEmail(e.target.value);
                  // validateEmail(email);
                }}
                onBlur={() => {
                  if (email.length === 0) {
                    setError('Email is required!');
                  } else if (!validateEmail(email)) {
                    setError('Check your email format example@gmail.com');
                  } else {
                    setError('');
                  }
                }}
                error={emailError}
              />

              <BaseInput
                label='Phone No.'
                type={'number'}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                onBlur={() => {
                  if (phone.length === 0) {
                    setError('Phone is required!');
                  } else if (phone.length !== 10) {
                    setError('Phone must be at least 10');
                  } else {
                    setError('');
                  }
                }}
              />

              <BaseInput
                label='Address'
                type='text'
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                onBlur={() => {
                  if (address.length === 0) {
                    setError('Address is required!');
                  } else {
                    setError('');
                  }
                }}
                // error={address.length === 0 ? 'Required' : false}
              />

              <DateTimePicker
                label='Date of Birth'

                placeholder='DD-MM-YYYY'

                dateFormat='YYYY-MM-DD'
                timeFormat={false}
                isValidDate={(currentDate, selectedDate) => {
                  return currentDate.isBefore(moment(selectedDate));
                }}
                onChange={(dateOfBirth) => setDob(dateOfBirth)}
                // onChange={(dateOfBirth) => setDob(dateOfBirth)}
              />

              <BaseInput
                label='Password'
                type='password'
                onChange={(e) => {
                  setPasswd(e.target.value);
                }}
                onBlur={() => {
                  if (passwd.length < 8) {
                    setError('Password must be at least 8 characters');
                  } else {
                    setError('');
                  }
                }}
                // error={passwd.length < 8 ? 'Password must be at least 8 characters' : false}
              />

              <BaseInput
                error={errorMatchPasswd}
                label='Confirm password'
                type='password'
                onChange={(e) => setconfirmpasswd(e.target.value)}
                onBlur={() => {
                  if (passwd !== confirmpasswd) {
                    setError('Confirm passwords is not match');
                  } else {
                    setError('');
                  }
                }}
              />

              <div>
                <div className='text-gray-400 leading-7 mb-2'>Gender</div>
                <select
                  id='gender'
                  name='gender'
                  className='h-11 w-full px-4 bg-white rounded border border-orange-400'
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value={true}>Male</option>
                  <option value={false}>Female</option>
                </select>
              </div>

              <div>
                <div className='text-gray-400 leading-7 mb-2'>Role</div>
                <select
                  id='role'
                  name='role'
                  className='h-11 w-full px-4 bg-white rounded border border-orange-400'
                  onChange={(e) => setRole(Number(e.target.value))}
                >
                  <option value={2}>Customer</option>
                  <option value={3}>Guard</option>
                </select>
              </div>

              {role === 3 && (
                <div>
                  <div className='text-gray-400 leading-7 mb-2'>Experience</div>
                  <select
                    id='cars'
                    name='cars'
                    className='h-11 w-full px-4 bg-white rounded border border-orange-400'
                    onChange={(e) => {
                      setSalary(e.target.value);
                    }}
                  >
                    <option value='7000000'>0 - 1 year</option>
                    <option value='8500000'>1 - 3 year</option>
                    <option value='11000000'>3 - 5 year</option>
                    <option value='15000000'>5 - 15 year</option>
                  </select>
                </div>
              )}
            </div>
          </div>

          <div className='flex flex-row w-96 justify-center items-center mt-2.5'>
            <CheckBox
              isChecked={isChecked}
              onCheck={() => setChecked(!isChecked)}
              label={<p className='ml-3 text-gray-400 '>I agree with the terms of use</p>}
            />
          </div>

          <BaseButton
            disabled={email.length === 0 || passwd.length === 0 || confirmpasswd.length === 0 || !isChecked}
            className='bg-[#3A57E8] w-48 h-11 mt-6 rounded'
            content='Sign up'
            onClick={handleSignUp}
          />

          <div className='text-slate-800 mt-5'>or sign up with other accounts?</div>

          <div className='flex flex-wrap mt-5'>
            <img src={Gmail} alt='icon' />
            <img src={Facebook} alt='icon' />
            <img src={Instagram} alt='icon' />
            <img src={Linkedin} alt='icon' />
          </div>

          <div className='mt-1'>
            <span className='text-slate-800  leading-7'>Already have an Account?</span>
            <Link to='/login'>
              <span className='text-orange-400 leading-7'>Sign in</span>
            </Link>
          </div>
        </form>
      )}
    </div>
  );
}

export default SignUp;
