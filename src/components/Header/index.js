import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

import BaseButton from "../Button";
import logo from "../../assets/logo.png";
import { useAuth } from "../../hooks/Auth";
import { Fragment } from "react";

const navigation = [
  { name: "About", path: "" },
  { name: "Booking", path: "booking" },
  { name: "Contact", path: "contract" },
];

const privateNavigation = [
  { name: "About", path: "user-about" },
  { name: "My Calendar", path: "user-my-calendar" },
  { name: "Send Application", path: "user-send-application" },
];

const userNavigation = [
  { name: "My profile", path: "my-profile" },
  { name: "Logout", href: "#" },
];

const Header = () => {
  const location = useLocation();
  const { cookies, logout } = useAuth();

  //destructuring pathname from location
  const { pathname } = location;
  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/")[1];

  const navs = cookies.token ? privateNavigation : navigation;

  const NavigationBar = () =>
    navs.map((item) => (
      <Link
        key={`key${item.path}`}
        className={`font-medium w-32 flex justify-center ${
          splitLocation === item.path && "text-[#C7923E]"
        } ${item.name === "Send Application" ? "ml-12" : "ml-6"}`}
        to={`/${item.path}`}
      >
        {item.name}
      </Link>
    ));

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto px-4 sm:px-6 lg:px-8 mt-2">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex flex-row items-center justify-between">
                  <img className="w-7 h-7" src={logo} alt="Your Company" />
                  <div className="w-24 ml-5 text-gray-400 text-3xl font-bold">
                    Guard
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-8 flex justify-center items-baseline">
                    <NavigationBar />
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  {cookies.token ? (
                    // <BaseButton
                    //   onClick={logout}
                    //   className="mt-2 flex justify-center items-center bg-[#C7923E]"
                    //   content={"Logout"}
                    // />
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            // src={user.imageUrl}
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                My profile
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <div
                                onClick={logout}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-[#C7923E]"
                                )}
                              >
                                Logout
                              </div>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  ) : (
                    <Link to="/login">
                      <BaseButton
                        className="mt-2 flex justify-center items-center bg-[#C7923E]"
                        content={"Login"}
                      />
                    </Link>
                  )}
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md text-[#C7923E] p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              <NavigationBar />
            </div>
            <div className="border-t border-gray-700 pb-3 pt-4">
              <div className="flex items-center px-5">
                {cookies.token ? (
                  <BaseButton
                    className="mt-2 flex justify-center items-center bg-[#C7923E]"
                    content={"Logout"}
                  />
                ) : (
                  <Link to="/login">
                    <BaseButton
                      className="mt-2 flex justify-center items-center bg-[#C7923E]"
                      content={"Login"}
                    />
                  </Link>
                )}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
