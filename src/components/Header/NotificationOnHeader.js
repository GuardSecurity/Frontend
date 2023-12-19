import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { getNotificationList } from "../../utils/notification";
import {
  Badge,
  Chip,
  IconButton,
  ListItemSuffix,
} from "@material-tailwind/react";
import { dateFormatting } from "../../utils/formatHelper";
import { BellIcon } from "@heroicons/react/24/outline";

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const NotificationOnHeader = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const { pathname } = useLocation();

  const [notificationList, setNotificationList] = useState([]);
  // const [numberOfUnread, setNumberOfUnread] = useState(0);

  useEffect(() => {
    userData?.userId && getNotificationListData();
  }, [pathname]);

  // useEffect(() => {
  //   setNumberOfUnread(notificationList.length);
  // }, [notificationList.length]);

  const getNotificationListData = async () => {
    try {
      const res = await getNotificationList({ userId: userData?.userId });
      if (res?.data && res?.data.length) setNotificationList(res?.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!userData?.userId) return null;

  return (
    <Menu as="div" className="relative mx-4">
      {/* <Badge color="red" content={String(numberOfUnread)}> */}
      <Menu.Button className="relative flex max-w-xs items-center text-sm focus:outline-none hover:bg-yellow-100 rounded-md p-1">
        <IconButton size="sm" color="amber">
          <BellIcon className="h-6 w-6" />
        </IconButton>
      </Menu.Button>
      {/* </Badge> */}

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-96 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {notificationList.map((n) => (
            <Menu.Item className="w-full">
              {({ active }) => (
                <Link
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                  to={`contract/${n?.bookingname}`}
                >
                  <div className="w-full flex">
                    {n?.content}

                    <ListItemSuffix>
                      <Chip
                        value={dateFormatting(n?.publish_date)}
                        variant="ghost"
                        size="sm"
                        className="rounded-full"
                      />
                    </ListItemSuffix>
                  </div>
                </Link>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default NotificationOnHeader;
