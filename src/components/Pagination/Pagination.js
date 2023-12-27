import React from 'react'

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const maxVisiblePages = 5; // Số trang tối đa bạn muốn hiển thị

  const renderPageNumbers = () => {
    let startPage = 1;
    let endPage = totalPages;

    if (totalPages > maxVisiblePages) {
      const half = Math.floor(maxVisiblePages / 2);
      startPage = Math.max(currentPage - half, 1);
      endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);
      
      if (endPage - startPage < maxVisiblePages - 1) {
        startPage = endPage - maxVisiblePages + 1;
      }
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages.map((page) => (
      <button
        key={page}
        className={`pagination-button ${currentPage === page ? 'bg-yellow-500 p-3' : 'p-3'}`}
        onClick={() => onPageChange(page)}
      >
        {page}
      </button>
    ));
  };

  return (
    <div className='absolute bottom w-full flex justify-center p-5'>
      {renderPageNumbers()}
    </div>
  );
};

export default Pagination
