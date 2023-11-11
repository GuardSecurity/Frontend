import { Link } from "react-router-dom";

export default function EventDetail() {
  const handleViewCalendar = () => {};

  const Descriptions = ({ title, content, className }) => (
    <div className={className}>
      <div className="font-medium">{title}</div>
      <div className="text-gray-500 mt-1">{content}</div>
    </div>
  );

  return (
    <div class="w-full my-10 px-10">
      <div className="flex items-center">
        <div className="font-medium">FPT</div>
        <Link
          className="rounded-full bg-gray-500 py-2 px-3 ml-5 text-white font-medium"
          to="../user-my-calendar"
        >
          View calendar
        </Link>
      </div>
      <div className="bg-white rounded-lg shadow-lg px-5 py-6 mt-5">
        <Descriptions
          title="Service"
          content="If you have any question, Let us help you!"
        />
        <Descriptions
          title="Address"
          content="If you have any question, Let us help you!"
          className="mt-4"
        />
        <Descriptions
          title="Country"
          content="If you have any question, Let us help you!"
          className="mt-4"
        />
      </div>
      <div className="bg-white rounded-lg shadow-lg px-5 py-6 mt-5">
        <div className="bg-green-300 w-24 py-1 flex justify-center font-medium rounded-2xl">
          {"2"} Guard
        </div>
        <Descriptions
          title="Do Quang Duy"
          content="Security"
          className="mt-4"
        />
        <Descriptions
          title="Do Quang Duy"
          content="Security"
          className="mt-4"
        />
      </div>
      <div className="flex justify-center mt-20">
        <div class="grid grid-cols-3 gap-6 w-2/3 h-26">
          <div className="flex justify-center font-medium bg-gray-300">
            Date
          </div>
          <div className="flex justify-center font-medium bg-gray-300">
            Time
          </div>
          <div className="flex justify-center font-medium bg-gray-300">
            Customer
          </div>
          <div className="flex justify-center">05</div>
          <div className="flex justify-center">05</div>
          <div className="flex justify-center">05</div>
        </div>

        {/* <div class="grid grid-cols-3 gap-6 w-2/3 h-26">
          <div className="flex justify-center font-medium bg-gray-300">
            Image
          </div>
          <div className="flex justify-center font-medium bg-gray-300">
            First Name
          </div>
          <div className="flex justify-center font-medium bg-gray-300">
            Last Name
          </div>
          <div className="flex justify-center">05</div>
          <div className="flex justify-center">05</div>
          <div className="flex justify-center">05</div>
        </div> */}
      </div>
    </div>
  );
}
