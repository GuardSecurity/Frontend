import { useState } from 'react';
import { Link } from 'react-router-dom';

import BaseButton from '../../components/Button';
import CheckBox from '../../components/Checkbox';

import Gmail from '../../assets/Gmail.jpg';
import Facebook from '../../assets/Facebook.png';
import Instagram from '../../assets/Instagram.png';
import Linkedin from '../../assets/Linkedin.png';
import Auth_bg from '../../assets/authen_bg.png';
import BaseInput from '../../components/Input/Input';
import { signUp } from '../../utils/auth';

function SignUp() {
  const [firstname, setfirstname] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [passwd, setPasswd] = useState('');
  const [confirmpasswd, setconfirmpasswd] = useState('');
  const [errorMatchPasswd, setErrorMatchPasswd] = useState('');
  const [role, setRole] = useState('2');
  const [salary, setSalary] = useState('7');
  const [error, setError] = useState('');
  const [isSignUpSuccess, setSignUpSuccess] = useState(false);
  const [isCheck, setCheck] = useState(true);

  const handleSignUp = () => {
    if (passwd.length > 0 && confirmpasswd.length > 0 && passwd !== confirmpasswd) {
      setErrorMatchPasswd('Password do not match!');
      return;
    } else {
      setErrorMatchPasswd('');
    }

    if (firstname && lastName && phone && email && passwd && confirmpasswd && role && salary) {
      signUp({
        email,
        passwd,
        confirmpasswd,
        role,
        salary,
        firstname,
        lastName,
        phone,
      }).then((result) => {
        setError('');
        setErrorMatchPasswd('');

        if (result.data) {
          setError('');
          setSignUpSuccess(true);
        } else {
          setError(result.response.data.error);
        }
      });
    } else {
      setErrorMatchPasswd('Please fill all fields!');
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
          <div className='text-gray-400  leading-7 mt-4'>{error ? error : 'Create your Hope UI account'}</div>
          <div className='mt-6 flex'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6'>
              <BaseInput label='First Name' onBlur={(e) => setfirstname(e.target.value)} />
              <BaseInput label='Last Name' onBlur={(e) => setLastName(e.target.value)} />
              <BaseInput label='Email' onChange={(e) => setEmail(e.target.value)} />
              <BaseInput label='Phone No.' onChange={(e) => setPhone(e.target.value)} />
              <BaseInput label='Password' type='password' onChange={(e) => setPasswd(e.target.value)} />
              <BaseInput
                error={errorMatchPasswd}
                label='Confirm password'
                type='password'
                onChange={(e) => setconfirmpasswd(e.target.value)}
              />
              <div>
                <div className='text-gray-400 leading-7 mb-2'>Role</div>
                <select
                  id='role'
                  name='role'
                  className='h-11 w-full px-4 bg-white rounded border border-orange-400'
                  onChange={(e) => {
                    setRole(e.target.value);
                  }}
                >
                  <option value='2'>Guard</option>
                  <option value='3'>Customer</option>
                </select>
              </div>
              {role === '2' && (
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
                    <option value='7'>0 - 1 year</option>
                    <option value='8.5'>1 - 3 year</option>
                    <option value='11'>3 - 5 year</option>
                    <option value='15'>5 - 15 year</option>
                  </select>
                </div>
              )}
            </div>
          </div>
          <div className='flex flex-row w-96 justify-center items-center mt-2.5'>
            <CheckBox
              label={<p className='ml-3 text-gray-400 '>I agree with the terms of use</p>}
              onClick={() => setCheck(!isCheck)}
              isChecked={isCheck}
            />
          </div>
          <BaseButton
            disabled={email.length === 0 || passwd.length === 0 || confirmpasswd.length === 0}
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
              <span className='text-orange-400 leading-7'> Sign in</span>
            </Link>
          </div>
        </form>
      )}
    </div>
  );
}

export default SignUp;
