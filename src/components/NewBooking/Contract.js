import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { createTw } from "react-pdf-tailwind";

import { getCustomerUnpaidBookingDetail } from "../../utils/booking";
import { amountFormatting, dateTimeFormatting } from "../../utils/formatHelper";

// const styles = StyleSheet.create({

// })

function Contract() {
  const { bookingName } = useParams();
  const navigate = useNavigate();

  const [detail, setDetail] = useState({});

  useEffect(() => {
    unpaidBookingData();
  }, [bookingName]);

  if (!bookingName) return null;

  const unpaidBookingData = async () => {
    try {
      const res = await getCustomerUnpaidBookingDetail({
        bookingname: bookingName,
      });
      setDetail(res?.data[0] || {});
    } catch (error) {
      console.error(error);
    }
  };

  const ContractOfCustomer = () => {
    return (
      <Document>
        <Page size="A4" className="grid grid-cols-1" style={{ padding: 20 }}>
          <View
            // className="flex text-4xl font-bold justify-center"
            style={{
              fontSize: 40,
              fontWeight: "bold",
              justifyContent: "center",
              flex: 1,
            }}
          >
            <Text>Economic contracts</Text>
          </View>
          <View className="mt-10">
            <Text className="h-10 text-xl font-bold">Guard System</Text>
            <View
              className="grid grid-cols-5 pt-4"
              style={{
                flex: 1,
                width: "100%",
              }}
            >
              <Text className="font-bold">Representative</Text>
              <Text>Vuong Cong Dung</Text>

              <Text></Text>

              <Text className="font-bold">Position</Text>
              <Text>Manager</Text>

              <Text className="font-bold mt-4">Address</Text>
              <Text className="mt-4">P. Hoa Hai, Q. Ngu Hanh Son, Da Nang</Text>

              <Text></Text>

              <Text className="font-bold mt-4">Phone Number</Text>
              <Text className="mt-4">0123123123</Text>
            </View>
          </View>

          <View className="mt-10">
            <Text className="h-10 text-xl font-bold">Customer</Text>
            <View className="grid grid-cols-5 pt-4">
              <Text className="font-bold">Full Name</Text>
              <Text>{detail?.customername}</Text>

              <Text></Text>
              <Text></Text>
              <Text></Text>

              <Text className="font-bold mt-4">Address</Text>
              <Text className="mt-4">{detail?.addressCustomer}</Text>

              <Text></Text>

              <Text className="font-bold mt-4">Phone Number</Text>
              <Text className="mt-4">{detail?.phone}</Text>

              <Text className="font-bold mt-4">Service</Text>
              <Text className="mt-4">{detail?.service}</Text>

              <Text></Text>

              <Text className="font-bold mt-4">Address Service</Text>
              <Text className="mt-4">{detail?.address}</Text>

              <Text className="font-bold mt-4">Start Date</Text>
              <Text className="mt-4">
                {detail?.dataBooking?.length &&
                  dateTimeFormatting(
                    detail?.dataBooking?.length &&
                      detail?.dataBooking[0]?.time_start
                  )}
              </Text>

              <Text></Text>

              <Text className="font-bold mt-4">Completion Date:</Text>
              <Text className="mt-4">
                {dateTimeFormatting(
                  detail?.dataBooking?.length &&
                    detail?.dataBooking[detail?.dataBooking.length - 1]
                      ?.time_end
                )}
              </Text>
            </View>
          </View>
          <View className="mt-6">
            <Text className="font-bold">Guard</Text>

            <View className="grid grid-cols-2 mt-4 border-solid border-2 border-gray-700 p-1 font-bold">
              <Text>Name</Text>
              <Text>Price</Text>
            </View>

            {detail?.guard?.length > 0 &&
              detail?.guard.map((g) => (
                <View className="grid grid-cols-2 border-solid border-1 border-gray-300 p-1">
                  <Text>
                    {g.firstname} {g.lastname}
                  </Text>
                  <Text>
                    {amountFormatting(
                      detail?.total_amount / detail.guard.length
                    )}{" "}
                    VND
                  </Text>
                </View>
              ))}

            <View className="grid grid-cols-2 mt-4 p-1">
              <Text>Total</Text>
              <Text>{amountFormatting(detail?.total_amount)} VND</Text>
            </View>
          </View>
        </Page>
      </Document>
    );
  };

  return (
    <View>
      <ContractOfCustomer />

      <View className="w-full flex justify-end">
        <View
          className="h-10 w-28 bg-blue-gray-400 cursor-pointer flex justify-center items-center rounded-md text-white mr-4"
          onClick={() => navigate("/")}
        >
          Cancel
        </View>

        <View className="h-10 w-28 bg-[#C7923E] cursor-pointer flex justify-center items-center rounded-md text-white mr-4">
          Accept
        </View>

        <PDFDownloadLink
          document={<ContractOfCustomer />}
          fileName="EconomicContract"
        >
          <View className="h-10 w-28 bg-cyan-700 cursor-pointer flex justify-center items-center rounded-md text-white">
            Export to PDF
          </View>
        </PDFDownloadLink>
      </View>
    </View>
  );
}

export default Contract;
