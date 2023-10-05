import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import BaseButton from "../../components/Button";

import logo from "../../assets/logo.png";
import securityBanner from "../../assets/securityBanner.jfif";
import rectangle from "../../assets/rectangle.png";
import contruction from "../../assets/contruction.png";

const navigation = [
  { name: "About", href: "#", current: true },
  { name: "Booking", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Home() {
  return (
    <>
      <div className="min-h-full mt-2 mb-2">
        <Disclosure as="nav" className="bg-white">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex flex-row items-center justify-between">
                      <img className="w-7 h-7" src={logo} alt="Your Company" />
                      <div className="w-24 ml-5 text-gray-400 text-3xl font-bold">
                        Guard
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-12 flex items-baseline space-x-11">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "text-[#C7923E]"
                                : "text-neutral-600",
                              "font-medium w-[66.75px]"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <BaseButton content={"Login"} />
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md text-[#C7923E] p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? "text-[#C7923E]" : "text-neutral-600",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <BaseButton content={"Login"} />
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <main>
          {/* max-w-7xl py-6 sm:px-6 lg:px-8 */}
          <div className="mx-auto relative">
            <img
              className="w-screen h-auto mt-3"
              src={securityBanner}
              alt="Security banner"
            />
            <div className="w-106 h-48 absolute top-16 left-24 px-12 py-2">
              <div className=" text-white text-6xl font-bold ">
                Security Services for
                <br />
                Rent: Peace of Mind
                <br />
                for Your Safety
              </div>
              <BaseButton
                className="w-60 h-14 px-3 py-4 mt-6 items-center inline-flex"
                content={"GET STARTED"}
              />
              <BaseButton
                className="w-36 h-14 px-3 py-4 px-3 py-4 mt-2 ml-4 items-center inline-flex bg-gray-500"
                content={"LEARN MORE"}
              />
            </div>
          </div>
          <div class="bg-white flex-col justify-start items-start ">
            <div class="flex-col justify-start items-center gap-16 flex">
              <div class="h-44 flex-col justify-start items-start gap-5 flex">
                <div class="w-24 h-24 relative"></div>
                <div class="text-center text-black text-5xl font-bold">
                  Select Your Plan and Enjoy
                </div>
              </div>
              <div class="w-96 h-96 relative">
                <div class="w-96 left-0 top-0 absolute justify-center items-start gap-16 inline-flex">
                  <div class="grow shrink basis-0 p-8 bg-white rounded-lg shadow border border-blue-400 flex-col justify-start items-start gap-6 inline-flex">
                    <img class="w-96 h-96" src={rectangle} />
                    <div class="h-60 flex-col justify-start items-start gap-6 flex">
                      <div class="self-stretch text-center text-slate-900 text-3xl font-bold">
                        Security Personnel
                      </div>
                      <div class="self-stretch h-16 text-center text-gray-400 text-lg font-medium ">
                        From bodyguards, to events, businesses and static
                        security, we’ll provide the right manned security
                        service and personnel tailored for you.
                      </div>
                      <div class="w-96 h-24 flex-col justify-end items-center gap-2.5 flex">
                        <BaseButton
                          className="w-60 h-14 px-3 py-4 mt-6 items-center text-xs font-bold"
                          content={"GET STARTED"}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="grow shrink basis-0 p-8 bg-white rounded-lg shadow border border-blue-400 flex-col justify-start items-start gap-6 inline-flex">
                    <img class="w-96 h-96" src={contruction} />
                    <div class="h-60 flex-col justify-start items-start gap-6 flex">
                      <div class="self-stretch text-center text-slate-900 text-3xl font-bold">
                        Construction Security
                      </div>
                      <div class="self-stretch h-16 text-center text-gray-400 text-lg font-medium ">
                        Building sites can be a target for theft. Talk to us
                        about keeping your construction site safe and secure
                        with a tailored security solution.
                      </div>
                      <div class="w-96 h-24 flex-col justify-end items-center gap-2.5 flex">
                        <BaseButton
                          className="w-60 h-14 px-3 py-4 mt-6 items-center text-xs font-bold"
                          content={"GET STARTED"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;
