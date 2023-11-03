import { useState } from "react";

import BaseButton from "../../components/Button";

function MyProfile() {
  const [toggleUpdateForm, setToggleUpdateForm] = useState(false);

  const UpdateForm = () => {
    return (
      <div className="h-5 w-full left-[539px] top-[14px] absolute ">
        <div className="h-full">
          <div className="block md:flex">
            <div className="w-full md:w-3/5 px-8 bg-white lg:ml-4">
              <div className="rounded shadow p-6">
                <div className="pb-4">
                  <label className="font-semibold text-gray-700 block pb-1">
                    First Name
                  </label>
                  <div className="flex border-2 rounded-r px-4 py-2 w-full">
                    <input disabled type="text" value="Truong" />
                  </div>
                </div>
                <div className="pb-4">
                  <label className="font-semibold text-gray-700 block pb-1">
                    Last Name
                  </label>
                  <div className="flex border-2 rounded-r px-4 py-2 w-full">
                    <input disabled type="text" value="Tan Duy" />
                  </div>
                </div>
                <div className="pb-4">
                  <label className="font-semibold text-gray-700 block pb-1">
                    Phone
                  </label>
                  <div className="flex border-2 rounded-r px-4 py-2 w-full">
                    <input disabled type="text" value="0327012688" />
                  </div>
                </div>
                <div className="pb-4">
                  <label className="font-semibold text-gray-700 block pb-1">
                    Address
                  </label>
                  <div className="flex border-2 rounded-r px-4 py-2 w-full">
                    <input disabled type="text" value="Ngu Hanh Son" />
                  </div>
                </div>
                <BaseButton
                  className="mt-2 flex pb-4 bg-[#C7923E]"
                  content={"Submit"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-1/2 mx-10 my-10 h-[608px] relative">
      <div className="w-[279px] h-[566px] left-[16px] top-[10px] absolute bg-gray-100 rounded-lg"></div>
      <div className="w-[163px] h-[163px] pl-[10.19px] pr-[10.29px] py-[10.18px] left-[74px] top-[50px] absolute justify-center items-center inline-flex"></div>
      <div className="w-32 h-[22px] left-[92px] top-[218px] absolute text-zinc-700 text-base font-semibold">
        Upload a Photo
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
      <div className="h-5 left-[339px] top-[14px] text-2xl absolute ">
        Truong Tan Duy
      </div>
      <div className="w-[111px] h-5 left-[339px] top-[56px] absolute text-neutral-400 text-sm font-medium">
        Joined in 2021
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
