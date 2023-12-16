import { useEffect, useState } from "react";
import {
  Card,
  Chip,
  List,
  ListItem,
  ListItemSuffix,
  Typography,
} from "@material-tailwind/react";
import Popup from "reactjs-popup";
import { useNavigate } from "react-router-dom";

import { amountFormatting, dateFormatting } from "../../utils/formatHelper";
import { getCustomerUnpaidBooking } from "../../utils/booking";
import UnpaidBookingDetail from "./UnpaidBookingDetail";

const UnpaidBookingItem = ({
  companyName,
  bookingDate,
  totalAmount,
  handleToggleDetail,
}) => (
  <Card
    className="w-96 my-2 ml-10 mt-4"
    onClick={() => handleToggleDetail(companyName)}
  >
    <List>
      <ListItem>
        <div>
          <Typography variant="h6" color="blue-gray" className="mb-2 break-all">
            {companyName}
          </Typography>
          {amountFormatting(totalAmount)} VND
        </div>

        <ListItemSuffix>
          <Chip
            value={dateFormatting(bookingDate)}
            variant="ghost"
            size="sm"
            className="rounded-full"
          />
        </ListItemSuffix>
      </ListItem>
    </List>
  </Card>
);

function CustomerUnpaidList() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const navigate = useNavigate();

  const [unpaidList, setUnpaidList] = useState([]);
  const [isDisplayPopup, setDisplayPopup] = useState(false);
  const [bookingName, setBookingName] = useState("");
  const [companyName, setCompanyName] = useState("");

  useEffect(() => {
    (userData?.role === 2 || userData?.userId) && unpaidBookingData();
  }, []);

  const unpaidBookingData = async () => {
    try {
      const res = await getCustomerUnpaidBooking({
        customerId: userData?.userId,
      });
      setUnpaidList(res?.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  if (userData?.role !== 2 || !userData?.userId) {
    return null;
  }

  const handleToggleDetail = (companyName) => {
    setDisplayPopup(true);
    setBookingName(userData?.userId + companyName);
    setCompanyName(companyName);
  };

  return (
    <div className="p-10">
      <p className="text-2xl font-bold">Unpaid bookings</p>

      {unpaidList.length ? (
        unpaidList.map((booking) => (
          <UnpaidBookingItem
            companyName={booking.companyname}
            bookingDate={booking.booking_date}
            totalAmount={booking.total_amount}
            handleToggleDetail={handleToggleDetail}
          />
        ))
      ) : (
        <div className="h-96" />
      )}

      <Popup
        open={isDisplayPopup}
        onClose={() => isDisplayPopup && setDisplayPopup(false)}
        modal
        {...{
          contentStyle: { width: "80%", borderRadius: 4, padding: 20 },
        }}
      >
        <div>
          <div className="content">
            <UnpaidBookingDetail
              bookingName={bookingName}
              companyName={companyName}
            />
          </div>
          <div className="w-full flex justify-center mt-10">
            <button
              className="bg-gray-400 text-white px-4 py-1 rounded-sm mr-10"
              onClick={() => setDisplayPopup(false)}
            >
              CANCEL
            </button>

            <button
              className="bg-blue-500 text-white px-4 py-1 rounded-sm"
              onClick={() =>
                navigate(
                  `../user-my-calendar/new-booking/payment/${companyName}`
                )
              }
            >
              PAYMENT
            </button>
          </div>
        </div>
      </Popup>
    </div>
  );
}

export default CustomerUnpaidList;
