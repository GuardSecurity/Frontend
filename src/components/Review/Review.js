import { Rating } from "@material-tailwind/react";

import { customerPostReview } from "../../utils/reviewFetching";
import { useState } from "react";

function Review({ guard, bookingName, customerId, setDisplayPopup, setSwal }) {
  const { guard_id } = guard;

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSendFeedback = async () => {
    setDisplayPopup(false);

    const data = {
      bookingname: bookingName,
      customer_id: customerId,
      guard_id,
      rating,
      comment,
    };

    try {
      const res = await customerPostReview({ data });

      setSwal({
        show: true,
        text: res.data || "",
        icon: "success",
      });
    } catch (error) {
      setSwal({
        show: true,
        text: error.response.data.message || "",
        icon: "error",
      });
    }
  };

  return (
    <div className="">
      <p className="text-[30px] font-bold">Feedback my service</p>

      <p>We want to listen to your opinions to get better day by day</p>

      <div className="flex items-center justify-between rounded-md shadow-md px-4 py-4 my-4">
        <div className="flex items-center">
          <img
            src="https://source.unsplash.com/random"
            alt="User Avatar"
            className="h-10 w-10 rounded-full"
          />

          <p className="ml-4">{guard?.firstname + " " + guard?.lastname}</p>
        </div>

        <Rating
          unratedColor="amber"
          ratedColor="amber"
          className="my-2"
          onChange={(value) => setRating(value)}
        />
      </div>

      <p className="text-gray-900 text-lg">Share Your Message</p>

      <textarea
        className="w-full h-[159px] p-3 rounded-[5px] bg-[#EEF3FF] border border-indigo-50 mt-1"
        placeholder="Message"
        onBlur={(e) => setComment(e.target.value)}
      />

      <div className="w-full flex justify-center mt-5">
        <button
          className="bg-[#C7923E] text-white px-4 py-1 rounded-md"
          onClick={handleSendFeedback}
        >
          Send Feedback
        </button>
      </div>
    </div>
  );
}

export default Review;
