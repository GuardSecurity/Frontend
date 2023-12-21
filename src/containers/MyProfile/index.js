import { useEffect, useState } from "react";
import axios from "axios";

import BaseButton from "../../components/Button";

import {
  getInfo,
  getInfoGua,
  updateImgCus,
  updateImgGua,
  updateInfo,
  updateInfoGua,
} from "../../utils/profile";
import DateTimePicker from "../../components/DateTimePicker";
import moment from "moment";
import BaseInput from "../../components/Input/Input";
import SweetAlert2 from "react-sweetalert2";
import { amountFormatting } from "../../utils/formatHelper";

function MyProfile() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [salary, setSalary] = useState("");
  const [img, setImg] = useState("");

  const [toggleUpdateForm, setToggleUpdateForm] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [file, setFile] = useState();

  const [swal, setSwal] = useState({});

  const userData = JSON.parse(localStorage.getItem("userData"));
  const { userId } = userData;
  const { role } = userData;
  // console.log('role', role);
  useEffect(() => {
    if (role === 2) {
      getInfo({ userId })
        .then((res) => {
          if (res.data) {
            const { address, firstname, lastname, dob, gender, phone, img } = res.data;
            setFirstName(firstname);
            setLastName(lastname);
            setDob(moment(dob).format('DD-MM-YYYY'));
            setAddress(address);
            setGender(gender);
            setPhone(phone);
            setImg(img);
          }
        })
        .catch((err) => console.error(err));
    }
    if (role === 3) {
      getInfoGua({ userId })
        .then((res) => {
          if (res.data) {
            const { address, firstname, lastname, dob, gender, phone, img, salary } = res.data;
            setFirstName(firstname);
            setLastName(lastname);
            setDob(moment(dob).format('DD-MM-YYYY'));
            setAddress(address);
            setGender(gender);
            setPhone(phone);
            setImg(img);
            setSalary(salary);
          }
        })
        .catch((err) => console.error(err));
    }
  }, [file]);
  

  // Get image file
  const handleChangeAvatar = (e) => setFile(e.target.files[0]);

  // POST image
  const handleUploadAvatar = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await fetch(
        "https://api.imgbb.com/1/upload?key=f7bb453322a00301accf8e38c2cd0ac0",
        {
          method: "POST",
          body: formData,
        }
      );

      const imageData = await res.json();
      const imageUrl = imageData.data.url;
      const data = {
        img: imageUrl,
      };
      if (role === 2) {
        const updateResponse = await updateImgCus({ userId, data: data });

        setSwal({
          ...swal,
          show: true,
          text: updateResponse.data.message || "",
          icon: "success",
        });
      }
      if (role === 3) {
        const updateResponse = await updateImgGua({ userId, data: data });

        setSwal({
          ...swal,
          show: true,
          text: updateResponse.data.message || "",
          icon: "success",
        });
      }
    } catch (error) {
      setSwal({
        ...swal,
        show: true,
        text: error.response
          ? error.response.data.message || ""
          : "An error occurred",
        icon: "error",
      });
    }
    setFile(false);
  };



  const UpdateForm = () => {
    const [phoneError, setPhoneError] = useState('');
    const [firstError, setFirstError] = useState('');
    const [lastError, setLastError] = useState('');
    const [addressError, setAddressError] = useState('');
    const [dobError, setDobError] = useState('');
    const [phoneEdit, setPhoneEdit] = useState(phone);
    const [firstEdit, setFirstEdit] = useState(firstname);
    const [lastEdit, setLastEdit] = useState(lastname);
    const [addressEdit, setAddressEdit] = useState(address);
    const [dobEdit, setDobEdit] = useState(dob);
    const [genderEdit, setGenderEdit] = useState(gender);


    const handleFirst = (e) => {
      const value = e.target.value
      if (!value) {
        setFirstError('required to fill in')
        return
      }
      setFirstEdit(value)
    }
    const handleLast = (e) => {
      const value = e.target.value
      if (!value) {
        setLastError('required to fill in')
        return
      }
      setLastEdit(value)
    }
    const handleAddress = (e) => {
      const value = e.target.value
      if (!value) {
        setAddressError('required to fill in')
        return
      }
      setAddressEdit(value)
    }
    const handleDob = (value) => {
      
      if (!value) {
        setDobError('Date of birth is required.');
        return
      } 
      else {
        setDobError(''); 
        setDobEdit(value); 
      }
    }
    const handlePhoneChange = (e) => { 
      const value = e.target.value;

      if (/[^0-9]/.test(value) || value === '') {
        setPhoneError('Please enter right format phone.');
        return
      } else {
        setPhoneError(''); // Xóa thông báo lỗi nếu không có ký tự chữ
      }
      setPhoneEdit(value);
    }
      const handleUpdateProfile = () => {
        if (addressEdit === address && firstEdit === firstname && lastEdit === lastname && dobEdit ===dob && phoneEdit === phone) {
          setSwal({
            ...swal,
            show: true,
            text: 'Please fill in all fields',
            icon: 'error',
          });
          return;
        }

        const data = {
          address: addressEdit,
          firstname: firstEdit,
          lastname: lastEdit,
          dob: dobEdit,
          gender: gender,
          phone: phoneEdit,
        };

        if (role === 2) {
          updateInfo({ userId, data })
            .then((res) => {
              setSwal({
                ...swal,
                show: true,
                text: res.data.message || '',
                icon: 'success',
                // didClose: () => navigate("../user-my-calendar"),
              });
              setToggleUpdateForm(false);
            })
            .catch((err) =>
              setSwal({
                ...swal,
                show: true,
                text: err.response.data.message || '',
                icon: 'error',
              })
            );
        }
        if (role === 3) {
          updateInfoGua({ userId, data })
            .then((res) =>
            {
              setSwal({
                ...swal,
                show: true,
                text: res.data.message || '',
                icon: 'success',
                // didClose: () => navigate("../user-my-calendar"),
              });
              setToggleUpdateForm(false);
              }
            )
            .catch((err) =>
              setSwal({
                ...swal,
                show: true,
                text: err.response.data.message || '',
                icon: 'error',
              })
            );
        }
        setSubmit(!submit)
      };
    const currentDate = moment();

    // Định dạng ngày hiện tại thành chuỗi 'DD-MM-YYYY' (tùy thuộc vào định dạng của DateTimePicker của bạn)
    const formattedCurrentDate = currentDate.format('DD-MM-YYYY');
    
    useEffect(() => {
      if (role === 2) {
        getInfo({ userId })
          .then((res) => {
            if (res.data) {
              const { address, firstname, lastname, dob, gender, phone, img } = res.data;
              setFirstName(firstname);
              setLastName(lastname);
              setDob(moment(dob).format('DD-MM-YYYY'));
              setAddress(address);
              setGender(gender);
              setPhone(phone);
              setImg(img);
            }
          })
          .catch((err) => console.error(err));
      }
      if (role === 3) {
        getInfoGua({ userId })
          .then((res) => {
            if (res.data) {
              const { address, firstname, lastname, dob, gender, phone, img } = res.data;
              setFirstName(firstname);
              setLastName(lastname);
              setDob(moment(dob).format('DD-MM-YYYY'));
              setAddress(address);
              setGender(gender);
              setPhone(phone);
              setImg(img);
            }
          })
          .catch((err) => console.error(err));
      }
    }, [submit]);
    
    return (
      <div className='h-5 w-full left-[539px] top-[14px] absolute '>
        <div className='h-full'>
          <div className='block md:flex'>
            <div className='w-full md:w-3/5 px-8 bg-white lg:ml-4'>
              <div className='rounded shadow p-6'>
                <div className='pb-4'>
                  <div className='font-semibold text-gray-700 block pb-1'>First Name</div>
                  <input
                    type='text'
                    className='border rounded-r px-4 py-2  rounded border-orange-400 w-full'
                    defaultValue={firstEdit}
                    onBlur={(e) => {
                      handleFirst(e);
                    }}
                  />
                  {firstError && <div className='error-message text-red-900'>{firstError}</div>}
                </div>

                <div className='pb-4'>
                  <label className='font-semibold text-gray-700 block pb-1'>Last Name</label>
                  <input
                    type='text'
                    className='border rounded-r px-4 py-2  rounded border-orange-400 w-full'
                    defaultValue={lastEdit}
                    onBlur={(e) => handleLast(e)}
                  />
                  {lastError && <div className='error-message text-red-900'>{lastError}</div>}
                </div>

                <div className='pb-4'>
                  <label className='font-semibold text-gray-700 block pb-1'>Gender</label>
                  <select
                    id='gender'
                    name='gender'
                    className='border rounded-r px-4 py-2  rounded border-orange-400 w-full'
                    onChange={(e) => setGenderEdit(String(e.target.value).toLowerCase() === 'true')}
                    defaultValue={genderEdit}
                  >
                    <option value={true}>Male</option>
                    <option value={false}>Female</option>
                  </select>
                </div>

                <div className='pb-4'>
                  <label className='font-semibold text-gray-700 block pb-1'>Phone</label>
                  <input
                    type='text'
                    className='border rounded-r px-4 py-2  rounded border-orange-400 w-full'
                    defaultValue={phoneEdit}
                    onBlur={(e) => handlePhoneChange(e)}
                  />
                  {phoneError && <div className='error-message text-red-900'>{phoneError}</div>}
                </div>

                <div className='pb-4'>
                  <label className='font-semibold text-gray-700 block pb-1'>Address</label>
                  <input
                    type='text'
                    className='border rounded-r px-4 py-2  rounded border-orange-400 w-full'
                    defaultValue={addressEdit}
                    onBlur={(e) => handleAddress(e)}
                  />
                  {addressError && <div className='error-message text-red-900'>{addressError}</div>}
                </div>

                <DateTimePicker
                  label='Date of Birth'
                  placeholder='DD-MM-YYYY'
                  dateFormat='DD-MM-YYYY'
                  timeFormat={false}
                  initialValue={dobEdit}
                  isValidDate={(currentDate, selectedDate) => {
                    return !currentDate.isAfter(moment(selectedDate));
                  }}
                  onChange={(dateOfBirth) => handleDob(dateOfBirth)}
                />

                <BaseButton className='mt-4 flex pb-4 bg-[#C7923E]' content={'Submit'} onClick={handleUpdateProfile} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='w-1/2 mx-10 my-10 h-[608px] relative'>
      <div className='w-[279px] h-[566px] left-[16px] top-[10px] absolute bg-gray-100 rounded-lg'></div>
      <div className='w-[163px] h-[163px] pl-[10.19px] pr-[10.29px] py-[10.18px] left-[74px] top-[50px] absolute justify-center items-center inline-flex'>
        <img
          src={
            img
              ? img
              : gender
              ? 'https://t4.ftcdn.net/jpg/02/83/34/87/360_F_283348729_wcG8rvBF5f1VfPGKy916pIcmgGk0PK7B.jpg'
              : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUJOcn-PL5eVYpu9Fs_4CBajb55o0rs_oehPGMqwPuYxCZXFyG1YMBLN8QA2ZfzAGzxM0&usqp=CAU'
          }
        />
      </div>

      <div className='w-42 h-[22px] left-[50px] top-[218px] absolute text-zinc-700 text-base font-semibold'>
        <label for='upload-photo' className={`ml-[${file ? 50 : 0}px] bg-blue-gray-500 p-1 rounded-lg text-cyan-50`}>
          Upload photo
        </label>
        <input
          type='file'
          accept='image/*'
          name='photo'
          onChange={handleChangeAvatar}
          id='upload-photo'
          className='hidden'
        />

        {file && (
          <BaseButton
            content='Submit'
            className='mt-2 flex justify-center items-center bg-[#C7923E] ml-4'
            onClick={handleUploadAvatar}
          />
        )}
        <div className='flex flex-col gap-4 mt-6'>
          <p>Hello {firstname + ' ' + lastname}</p>
          <p>DOB: {dob}</p>
          <p>Address: {address}</p>
          <p>Gender: {gender ? 'Male' : 'Female'}</p>
          <p>Phone: {phone}</p>
          {role === 3 && <p>Salary: {amountFormatting(salary)} VND</p>}
        </div>
      </div>

      <button
        onClick={() => setToggleUpdateForm(!toggleUpdateForm)}
        className='w-[158px] h-[54px] left-[339px] top-[101px] absolute'
      >
        <div className='w-[158px] h-[54px] left-0 top-0 absolute bg-white rounded-md border border-zinc-700'></div>
        <div className='w-[80px] h-[22px] left-[37px] top-[18px] absolute text-zinc-700 text-[15px] font-semibold'>
          Edit Profile
        </div>
      </button>
      <div className='h-5 left-[339px] top-[14px] text-2xl absolute w-full '>
        {firstname} {lastname}
      </div>

      {toggleUpdateForm && <UpdateForm />}
      <SweetAlert2 didClose={() => setSwal({ ...swal, show: false })} {...swal} />
    </div>
  );
}

export default MyProfile;
