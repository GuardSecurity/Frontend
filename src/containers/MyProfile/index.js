import { useEffect, useState } from "react";
import axios from "axios";

import BaseButton from "../../components/Button";

import { getInfo, updateInfo } from "../../utils/profile";
import DateTimePicker from "../../components/DateTimePicker";
import moment from "moment";
import BaseInput from "../../components/Input/Input";
import SweetAlert2 from "react-sweetalert2";

function MyProfile() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");

  const [toggleUpdateForm, setToggleUpdateForm] = useState(false);
  const [file, setFile] = useState();

  const [swal, setSwal] = useState({});

  const userData = JSON.parse(localStorage.getItem("userData"));
  const { userId } = userData;

  useEffect(() => {
    getInfo({ userId })
      .then((res) => {
        if (res.data) {
          const { address, firstname, lastname, dob, gender, phone } = res.data;
          setFirstName(firstname);
          setLastName(lastname);
          setDob(moment(dob).format("DD-MM-YYYY"));
          setAddress(address);
          setGender(gender);
          setPhone(phone);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  // Get image file
  const handleChangeAvatar = (e) => setFile(e.target.files[0]);

  // POST image
  const handleUploadAvatar = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", file);

    const result = await axios.post(
      `http://localhost:3000/customer/changeimg/${userId}`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
  };

  const handleUpdateProfile = () => {
    const data = {
      address,
      firstname,
      lastname,
      dob,
      gender,
      phone,
    };

    updateInfo({ userId, data })
      .then((res) =>
        setSwal({
          ...swal,
          show: true,
          text: res.data.message || "",
          icon: "success",
          // didClose: () => navigate("../user-my-calendar"),
        })
      )
      .catch((err) =>
        setSwal({
          ...swal,
          show: true,
          text: err.response.data.message || "",
          icon: "error",
        })
      );
  };

  const UpdateForm = () => {
    return (
      <div className="h-5 w-full left-[539px] top-[14px] absolute ">
        <div className="h-full">
          <div className="block md:flex">
            <div className="w-full md:w-3/5 px-8 bg-white lg:ml-4">
              <div className="rounded shadow p-6">
                <div className="pb-4">
                  <div className="font-semibold text-gray-700 block pb-1">
                    First Name
                  </div>
                  <input
                    type="text"
                    className="border rounded-r px-4 py-2  rounded border-orange-400 w-full"
                    defaultValue={firstname}
                    onBlur={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </div>

                <div className="pb-4">
                  <label className="font-semibold text-gray-700 block pb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="border rounded-r px-4 py-2  rounded border-orange-400 w-full"
                    defaultValue={lastname}
                    onBlur={(e) => setLastName(e.target.value)}
                  />
                </div>

                <div className="pb-4">
                  <label className="font-semibold text-gray-700 block pb-1">
                    Gender
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    className="border rounded-r px-4 py-2  rounded border-orange-400 w-full"
                    onChange={(e) => setGender(e.target.value)}
                    defaultValue={gender}
                  >
                    <option value={true}>Male</option>
                    <option value={false}>Female</option>
                  </select>
                </div>

                <div className="pb-4">
                  <label className="font-semibold text-gray-700 block pb-1">
                    Phone
                  </label>
                  <input
                    type="text"
                    className="border rounded-r px-4 py-2  rounded border-orange-400 w-full"
                    defaultValue={phone}
                    onBlur={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div className="pb-4">
                  <label className="font-semibold text-gray-700 block pb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    className="border rounded-r px-4 py-2  rounded border-orange-400 w-full"
                    defaultValue={address}
                    onBlur={(e) => setAddress(e.target.value)}
                  />
                </div>

                <DateTimePicker
                  label="Date of Birth"
                  placeholder="DD-MM-YYYY"
                  dateFormat="DD-MM-YYYY"
                  timeFormat={false}
                  initialValue={dob}
                  onChange={(dateOfBirth) => setDob(dateOfBirth)}
                />

                <BaseButton
                  className="mt-4 flex pb-4 bg-[#C7923E]"
                  content={"Submit"}
                  onClick={handleUpdateProfile}
                />
              </div>
            </div>
          </div>
        </div>
        <SweetAlert2
          didClose={() => setSwal({ ...swal, show: false })}
          {...swal}
        />
      </div>
    );
  };

  return (
    <div className="w-1/2 mx-10 my-10 h-[608px] relative">
      <div className="w-[279px] h-[566px] left-[16px] top-[10px] absolute bg-gray-100 rounded-lg"></div>
      <div className="w-[163px] h-[163px] pl-[10.19px] pr-[10.29px] py-[10.18px] left-[74px] top-[50px] absolute justify-center items-center inline-flex">
        <img src={file && URL.createObjectURL(file)} />
      </div>

      <div className="w-42 h-[22px] left-[50px] top-[218px] absolute text-zinc-700 text-base font-semibold">
        <label for="upload-photo" className={`ml-[${file ? 50 : 0}px]`}>
          Upload photo
        </label>
        <input
          type="file"
          accept="image/*"
          name="photo"
          onChange={handleChangeAvatar}
          id="upload-photo"
          className="hidden"
        />
        {file && (
          <BaseButton
            content="Submit"
            className="mt-2 flex justify-center items-center bg-[#C7923E] ml-4"
            onClick={handleUploadAvatar}
          />
        )}
      </div>

      <div className="w-[201px] h-11 left-[41px] top-[421px] absolute text-zinc-700 text-[22px] font-bold">
        John Doe - Host
      </div>
      <button
        onClick={() => setToggleUpdateForm(!toggleUpdateForm)}
        className="w-[158px] h-[54px] left-[339px] top-[101px] absolute"
      >
        <div className="w-[158px] h-[54px] left-0 top-0 absolute bg-white rounded-md border border-zinc-700"></div>
        <div className="w-[80px] h-[22px] left-[37px] top-[18px] absolute text-zinc-700 text-[15px] font-semibold">
          Edit Profile
        </div>
      </button>
      <div className="h-5 left-[339px] top-[14px] text-2xl absolute w-full ">
        {firstname} {lastname}
      </div>
      <div className="w-[178px] left-[39px] top-[462px] absolute">
        <div className="w-[149px] h-[22px] left-[29px] top-[1px] absolute text-neutral-400 text-[15px] font-medium">
          Email Confirmed
        </div>
        <div className="w-[19px] h-[19px] left-0 top-0 absolute flex-col justify-start items-start inline-flex"></div>
      </div>
      <div className="w-[180px] left-[39px] top-[490px] absolute">
        <div className="w-[151px] h-[22px] left-[29px] top-[1px] absolute text-neutral-400 text-[15px] font-medium">
          Mobile Confirmed
        </div>
        <div className="w-[19px] h-[19px] left-0 top-0 absolute flex-col justify-start items-start inline-flex"></div>
      </div>
      <div className="w-[253px] h-[30px] left-[41px] top-[283px] absolute text-zinc-700 text-lg font-bold">
        Identity Verification
      </div>
      <div className="w-[239px] h-[72px] left-[41px] top-[315px] absolute text-neutral-400 text-sm font-normal leading-tight">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor.
      </div>
      <div className="w-[105px] h-[22px] left-[374px] top-[186px] absolute text-zinc-700 text-lg font-bold">
        0 Reviews
      </div>
      {toggleUpdateForm && <UpdateForm />}
    </div>
  );
}

export default MyProfile;
