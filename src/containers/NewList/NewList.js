import React, { useEffect, useState } from 'react'
import { getAllNews } from '../../utils/admin';
import { dateFormatting, dateTimeFormatting } from '../../utils/formatHelper';
import { Link } from 'react-router-dom';
import '../../index.css';

function truncateHtml(content) {
  const truncatedContent = content?.replace(/<[^>]*>?/gm, '').slice(0, 300);
  return `${truncatedContent}...`;
}
function extractFirstImageSrc(htmlContent) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, 'text/html');

  const imgElements = doc.querySelectorAll('img');

  if (imgElements.length > 0) {
    // Lấy src của ảnh đầu tiên
    const firstImageSrc = imgElements[0].getAttribute('src');
    return firstImageSrc;
  } else {
    // Trả về null nếu không có ảnh
    return null;
  }
}
const NewList = () => {
  const [newsArr, setNewArr] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getAllNews();
        const data = response.data;
        setNewArr(data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };
    fetchNews();
  }, [])

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNews = newsArr.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(newsArr.length / itemsPerPage);


  const NewComponents = ({ sculpture }) => {
    return (
      <div className='p-8 w-[80%]'>
        <Link to={`/news/${sculpture.id}`}>
          <div className='flex rounded overflow-hidden shadow-lg zoom p-7 relative'>
            <img src={extractFirstImageSrc(sculpture.content)} alt='New Image' height={'300px'} width={'250px'} />
            <div className='px-6 py-4 w-full '>
              <div className='font-bold text-xl mb-2'>{sculpture.title}</div>
              <p
                className='text-gray-700 text-base w-70%'
                dangerouslySetInnerHTML={{
                  __html: truncateHtml(sculpture.content),
                }}
              ></p>
            </div>
            <p className='absolute bottom-0 right-1 text-gray-700 text-base font-semibold'>
              <span className='font-semibold text-xs'>Date Public: </span>
              {dateFormatting(sculpture.publish_date)}
            </p>
          </div>
        </Link>
      </div>
    );
  };
  return (
    <div className='flex flex-col items-center p-8 w-full justify-center min-h-[800px]'>
      {currentNews.map((news) => (
        <NewComponents sculpture={news} />
      ))}
      <div className='w-full flex justify-center mt-10'>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={`pagination-button ${currentPage === page ? 'bg-yellow-500 p-3' : 'p-3'}`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}

export default NewList
