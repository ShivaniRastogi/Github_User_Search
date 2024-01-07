import React from 'react';
import './us.css'; // Import your CSS for styling

const Pagination = ({ usersPerPage, totalUsers, currentPage, setCurrentPage }) => {
  const pageNumbers = [];

  const totalPages = Math.ceil(totalUsers / usersPerPage);


  const maxPagesToShow = 5;
  let startPage, endPage;

  if (totalPages <= maxPagesToShow) {
    startPage = 1;
    endPage = totalPages;
  } else {
    if (currentPage <= Math.floor(maxPagesToShow / 2)) {
      startPage = 1;
      endPage = maxPagesToShow;
    } else if (currentPage + Math.floor(maxPagesToShow / 2) >= totalPages) {
      startPage = totalPages - maxPagesToShow + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - Math.floor(maxPagesToShow / 2);
      endPage = currentPage + Math.floor(maxPagesToShow / 2);
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <button
        className={`page-btn ${currentPage === 1 ? 'disabled' : ''}`}
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {pageNumbers.map((number) => (
        <span
          key={number}
          className={`page-btn ${number === currentPage ? 'active' : ''}`}
          onClick={() => setCurrentPage(number)}
        >
          {number}
        </span>
      ))}

      <button
        className={`page-btn ${currentPage === totalPages ? 'disabled' : ''}`}
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
