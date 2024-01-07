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

import { getCustomerUnpaidBookingDetail, vnPayMent } from "../../utils/booking";
import { amountFormatting, dateTimeFormatting } from "../../utils/formatHelper";
import { Font } from '@react-pdf/renderer';

Font.register({
  family: 'Arial', // Tên mà bạn muốn đặt cho font chữ
});
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
  
  const handlePayment = async () => {
    try {
      const dataVNPay = {
        amount: detail.total_amount,
        bookingname: detail.bookingName,
      };
      const res1 = await vnPayMent(dataVNPay);
      window.location.href = res1.data;
    } catch (error) {
      console.log('err', error);
    }
  }


  const ContractOfCustomer = () => {
    return (
      <Document file='someone.pdf'>
        <Page size='A4' className='grid grid-cols-1' style={{ padding: 20 }}>
          <View
            className='flex text-4xl font-bold justify-center'
            style={{
              display: 'flex',
              fontSize: '4rem',
              fontWeight: 'bold',
              justifyContent: 'center',
            }}
          >
            <Text>Economic contracts</Text>
          </View>

          <View
            className='mt-10'
            style={{
              marginTop: '2.5rem',
            }}
          >
            <Text style={{ height: '2.5rem', fontSize: '1.25rem', fontWeight: 'bold' }}>Guard System</Text>
            <View
              className='grid grid-cols-5 pt-4'
              style={{
                flex: '1',
                width: '100%',
              }}
            >
              <Text style={{ fontWeight: 'bold' }}>Representative</Text>
              <Text>Vuong Cong Dung</Text>

              <Text></Text>

              <Text style={{ fontWeight: 'bold' }}>Position</Text>
              <Text>Manager</Text>

              <Text style={{ fontWeight: 'bold', marginTop: '1rem' }}>Address</Text>
              <Text style={{ marginTop: '1rem' }}>P. Hoa Hai, Q. Ngu Hanh Son, Da Nang</Text>

              <Text></Text>

              <Text style={{ fontWeight: 'bold', marginTop: '1rem' }}>Phone Number</Text>
              <Text style={{ marginTop: '1rem' }}>0123123123</Text>
            </View>
          </View>

          <View
            className='mt-10'
            style={{
              marginTop: '2.5rem',
            }}
          >
            <Text style={{ height: '2.5rem', fontSize: '1.25rem', fontWeight: 'bold' }}>Customer</Text>
            <View className='grid grid-cols-5 pt-4'>
              <Text style={{ fontWeight: 'bold' }}>Full Name</Text>
              <Text>{detail?.customername}</Text>

              <Text></Text>
              <Text></Text>
              <Text></Text>

              <Text style={{ fontWeight: 'bold', marginTop: '1rem' }}>Address</Text>
              <Text style={{ marginTop: '1rem' }}>{detail?.addressCustomer}</Text>

              <Text></Text>

              <Text style={{ fontWeight: 'bold', marginTop: '1rem' }}>Phone Number</Text>
              <Text style={{ marginTop: '1rem' }}>{detail?.phone}</Text>

              <Text style={{ fontWeight: 'bold', marginTop: '1rem' }}>Service</Text>
              <Text style={{ marginTop: '1rem' }}>{detail?.service}</Text>

              <Text></Text>

              <Text style={{ fontWeight: 'bold', marginTop: '1rem' }}>Address Service</Text>
              <Text style={{ marginTop: '1rem' }}>{detail?.address}</Text>

              <Text style={{ fontWeight: 'bold', marginTop: '1rem' }}>Start Date</Text>
              <Text style={{ marginTop: '1rem' }}>
                {detail?.dataBooking?.length && dateTimeFormatting(detail?.dataBooking[0]?.time_start)}
              </Text>

              <Text></Text>

              <Text style={{ fontWeight: 'bold', marginTop: '1rem' }}>Completion Date:</Text>
              <Text style={{ marginTop: '1rem' }}>
                {dateTimeFormatting(
                  detail?.dataBooking?.length && detail?.dataBooking[detail?.dataBooking.length - 1]?.time_end
                )}
              </Text>
            </View>
          </View>

          <View
            className='mt-6'
            style={{
              marginTop: '1.5rem',
            }}
          >
            <Text style={{ fontWeight: 'bold' }}>Guard</Text>
            <View
              className='grid grid-cols-2 mt-4'
              style={{ border: '2px solid #718096', padding: '0.25rem', fontWeight: 'bold' }}
            >
              <Text>Name</Text>
              <Text>Price</Text>
            </View>
          </View>
        </Page>
      </Document>
    );
  };
  
  return (
    <View>
      <ContractOfCustomer />

      <View className='w-full flex justify-end pr-4'>
        <View
          className='h-10 w-28 bg-blue-gray-400 cursor-pointer flex justify-center items-center rounded-md text-white mr-4'
          onClick={() => navigate('/user-my-calendar')}
        >
          Back
        </View>

        <View
          onClick={handlePayment}
          className='h-10 w-28 bg-[#C7923E] cursor-pointer flex justify-center items-center rounded-md text-white mr-4'
        >
          Payment
        </View>

        <PDFDownloadLink document={<ContractOfCustomer />} fileName='EconomicContract'>
          <View className='h-10 w-28 bg-cyan-700 cursor-pointer flex justify-center items-center rounded-md text-white'>
            Export to PDF
          </View>
        </PDFDownloadLink>
      </View>
    </View>
  );
}

export default Contract;
