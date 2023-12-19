import { useEffect, useState } from "react";
import { getSummaryAdmin } from "../../../utils/admin";
import {
  CurrencyDollarIcon,
  UserIcon,
  ShieldCheckIcon,
  NewspaperIcon,
  Bars3CenterLeftIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";
import { amountFormatting } from "../../../utils/formatHelper";

function Quantity() {
  const [summary, setSummary] = useState({});
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await getSummaryAdmin();
      setSummary(res?.data || {});
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-10 w-full h-full bg-yellow-50 grid grid-cols-4 gap-2">
      <div className="rounded-lg border border-stroke bg-white py-6 px-4 shadow-default h-52">
        <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2">
          <UserIcon className="h-14 w-14" />
        </div>

        <div className="mt-4 flex items-end justify-between">
          <div>
            <h4 className="text-title-md font-bold text-black dark:text-white">
              {summary?.totalCustomer}
            </h4>
            <span className="text-sm font-medium">Total customer</span>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-stroke bg-white py-6 px-4 shadow-default h-52">
        <div className="flex items-center justify-center">
          <ShieldCheckIcon className="h-14 w-14" />
        </div>

        <div className="mt-4 flex items-end justify-between">
          <div>
            <h4 className="text-title-md font-bold text-black dark:text-white">
              {summary?.totalGuard}
            </h4>
            <span className="text-sm font-medium">Total guard</span>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-stroke bg-white py-6 px-4 shadow-default h-52">
        <div className="flex items-center justify-center rounded-full">
          <NewspaperIcon className="h-14 w-14" />
        </div>

        <div className="mt-4 flex items-end justify-between">
          <div>
            <h4 className="text-title-md font-bold text-black dark:text-white">
              {summary?.total_booking}
            </h4>
            <span className="text-sm font-medium">Total bookings</span>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-stroke bg-white py-6 px-4 shadow-default h-52">
        <div className="flex items-center justify-center rounded-full bg-meta-2">
          <CurrencyDollarIcon className="h-14 w-14" />
        </div>

        <div className="mt-4 flex items-end justify-between">
          <div>
            <h4 className="text-title-md font-bold text-black dark:text-white">
              {amountFormatting(summary?.total_amount)} VND
            </h4>
            <span className="text-sm font-medium">Total amount</span>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-stroke bg-white py-6 px-4 shadow-default h-52">
        <div className="flex items-center justify-center rounded-full bg-meta-2">
          <Bars3CenterLeftIcon className="h-14 w-14" />
        </div>

        <div className="flex items-end justify-between">
          <div>
            <h4 className="text-title-md font-bold text-black dark:text-white">
              {amountFormatting(summary?.total_salary)} VND
            </h4>
            <span className="text-sm font-medium">Total salary</span>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-stroke bg-white py-6 px-4 shadow-default h-52">
        <div className="flex items-center justify-center rounded-full bg-meta-2">
          <CheckBadgeIcon className="h-14 w-14" />
        </div>

        <div className="flex items-end justify-between">
          <div>
            <h4 className="text-title-md font-bold text-black dark:text-white">
              {amountFormatting(summary?.total_profit)} VND
            </h4>
            <span className="text-sm font-medium">Total profit</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quantity;
