import { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import moment from 'moment';

import helloAdmin from '../../assets/helloAdmin.png';
import { getGuardById, getGuardList, searchByName } from '../../utils/admin';
import GuardDetail from './Detail/GuardDetail';

const HEADER_TABLE = [
  { label: 'Image', sortable: false },
  { label: 'Name', sortable: true, field: 'name' },
  { label: 'Gender', sortable: true, field: 'gender' },
  { label: 'Phone', sortable: true, field: 'phone' },
  { label: 'Status', sortable: true, field: 'status' },
  { label: 'Date of birth', sortable: true, field: 'dob' },
  { label: '', sortable: false },
];

function GuardList({ setShowNotificationPopup }) {
  const [guardList, setGuardList] = useState([]);
  const [isDisplayPopup, setDisplayPopup] = useState(false);
  const [guardDetail, setGuardDetail] = useState({});
  const [sortField, setSortField] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentItems, setCurrentItems] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleSort = (header) => {
    if (header.sortable) {
      setSortField(header.field);
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    }
  };

  const HeaderTable = HEADER_TABLE.map((header, index) => (
    <th
      className='border-b border-gray-300 bg-slate-200 py-3 cursor-pointer'
      key={header.label}
      onClick={() => handleSort(header)}
    >
      <div className={`${index < 2 && 'ml-2'} flex`}>
        <div className='flex'>
          {header.label}
          {header.sortable && (
            <button
              className='ml-2 text-gray-500 focus:outline-none'
              onClick={(e) => {
                e.stopPropagation();
                handleSort(header);
              }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-4 h-4 '
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5'
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </th>
  ));

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
        setShowNotificationPopup(false);

  };
  useEffect(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    setCurrentItems(guardList.slice(indexOfFirstItem, indexOfLastItem));
  }, [guardList, currentPage]);
  const totalPages = Math.ceil(guardList.length / itemsPerPage);
  const BodyTable = () =>
    currentItems.map((guard) => (
      <BodyTableRow
        key={guard.guard_id}
        guardId={guard.guard_id}
        name={guard.firstname + ' ' + guard.lastname}
        gender={guard.gender}
        status={guard.status}
        phone={guard.phone}
        img={guard.img}
        dob={moment(guard.dob).format('DD-MM-YYYY')}
        handleDisplayDetail={handleDisplayDetail}
      />
    ));

  useEffect(() => {
    getGuardList()
      .then((res) => res?.data && res?.data.length > 0 && setGuardList(res?.data))
      .catch((err) => console.error('ERROR: ', err));
  }, []);

  useEffect(() => {
    const sortedList = [...currentItems].sort((a, b) => {
      if (sortField) {
        const fieldA = a[sortField];
        const fieldB = b[sortField];

        if (sortField === 'name') {
          const nameA = a.firstname.toLowerCase();
          const nameB = b.firstname.toLowerCase();

          if (sortOrder === 'asc') {
            return nameA.localeCompare(nameB);
          } else {
            return nameB.localeCompare(nameA);
          }
        }

        if (sortOrder === 'asc') {
          return fieldA > fieldB ? 1 : -1;
        } else {
          return fieldA < fieldB ? 1 : -1;
        }
      }
      return 0;
    });

    setCurrentItems(sortedList);
  }, [sortField, sortOrder]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searchQuery) {
          const response = await searchByName(searchQuery);
          if (response.status === 200) {
            setCurrentItems(response.data);
          } else {
            console.error('Failed to fetch guard list. Status:', response.status);
          }
        }
        if (searchQuery === '') {
          const response = await getGuardList();
          if (response?.data && response?.data.length > 0) {
            setGuardList(response.data);
          } else {
            console.error('Failed to fetch guard list using getGuardList');
          }
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [searchQuery]);

  const handleDisplayDetail = async (guardId) => {
    try {
      const res = await getGuardById({ guardId });
      setGuardDetail(res.data);
          setShowNotificationPopup(false);

    } catch (error) {
      console.error(console.error());
    }
    setDisplayPopup(true);
  };

  return (
    <div>
      <img src={helloAdmin} className='w-full' />
      <input
        type='text'
        placeholder='Search by name...'
        value={searchQuery}
        onChange={handleSearch}
        className='w-1/4 m-2 p-2 border border-gray-300 '
      />
      <div className='flex justify-center w-full mt-4'>
        <table className='w-[98%] bg-white border border-gray-300'>
          <thead>
            <tr className='border border-gray-300 '>{HeaderTable}</tr>
          </thead>
          {guardList.length > 0 && <BodyTable />}
        </table>
      </div>
      <Popup
        open={isDisplayPopup}
        onClose={() => isDisplayPopup && setDisplayPopup(false)}
        modal
        {...{
          contentStyle: { width: '80%', borderRadius: 4, padding: 20 },
        }}
      >
        <div>
          <div className='content'>
            <GuardDetail details={guardDetail} />
          </div>
          <div className='w-full flex justify-center mt-4'>
            <button className='bg-blue-500 text-white px-4 py-1 rounded-sm' onClick={() => setDisplayPopup(false)}>
              OK
            </button>
          </div>
        </div>
      </Popup>
      {!searchQuery && (
        <div className='absolute bottom w-full flex justify-center p-5'>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`pagination-button ${currentPage === page ? 'bg-yellow-500 p-3' : 'p-3'}`}
              onClick={() => {
                setCurrentPage(page);         setShowNotificationPopup(false);
}}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

const BodyTableRow = ({ guardId, name, gender, phone, img, dob, status, handleDisplayDetail }) => {
  return (
    <tbody>
      <tr>
        <td className='py-3 border-b border-gray-300 pl-2'>
          <img
            className='w-8 h-8 rounded-full'
            src={
              img
                ? img
                : gender
                ? 'https://t4.ftcdn.net/jpg/02/83/34/87/360_F_283348729_wcG8rvBF5f1VfPGKy916pIcmgGk0PK7B.jpg'
                : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUJOcn-PL5eVYpu9Fs_4CBajb55o0rs_oehPGMqwPuYxCZXFyG1YMBLN8QA2ZfzAGzxM0&usqp=CAU'
            }
          />
        </td>
        <td className='py-3 border-b border-gray-300 pl-2'>{name}</td>
        <td className='py-3 border-b border-gray-300'>{gender ? 'Male' : 'Female'}</td>
        <td className='py-3  border-b border-gray-300'>{phone}</td>
        <td className='py-3  border-b border-gray-300'>
          {status === 1 && <span className='bg-lime-500 rounded-md p-1 text-white font-semibold'>Free</span>}
          {status === 0 && <span className='bg-red-600 rounded-md p-1 text-white font-semibold'>Busy</span>}
        </td>
        <td className='py-3 border-b border-gray-300'>{dob}</td>
        <td className='py-3 border-b border-gray-300' onClick={() => handleDisplayDetail(guardId)}>
          <button className='hover:bg-blue-100 text-blue-700 rounded-full text-xs ml-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default GuardList;
