import { useEffect, useState } from "react";

import { getManagerNotificationList } from "../../../utils/admin";
import { Chip, ListItemSuffix } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { classNames } from "../../../components/Header/NotificationOnHeader";
import { dateTimeFormatting } from "../../../utils/formatHelper";

function AdminNotification({ handleTabClick }) {
  const [notificationList, setNotificationList] = useState([]);
  const userData = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    userData?.userId && getNotificationListData();
  }, []);

  const getNotificationListData = async () => {
    try {
      const res = await getManagerNotificationList();
      if (res?.data && res?.data.length) setNotificationList(res?.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full bg-white p-10">
      <h1 class="block font-sans text-4xl antialiased font-semibold leading-tight tracking-normal text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text mb-6">
        Notifications
      </h1>
      {notificationList.map((n) => (
        <Link
          className={classNames(
            "hover:bg-[#C7923E] hover:text-white block px-4 py-3 text-sm text-gray-700 w-4/5 rounded-lg"
          )}
          onClick={() => handleTabClick("bookings")}
        >
          <div className="w-full flex">
            {n?.content}

            <ListItemSuffix>
              <Chip
                value={dateTimeFormatting(n?.publish_date)}
                variant="ghost"
                size="sm"
                className="rounded-full"
              />
            </ListItemSuffix>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default AdminNotification;
