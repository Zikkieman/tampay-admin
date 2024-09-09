import { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

interface PaginationProps<T> {
  entries: T[];
  onPageChange: (entries: T[]) => void;
}

const Pagination = <T,>({ entries, onPageChange }: PaginationProps<T>) => {
  const entriesPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const totalEntries = entries.length;
  const totalPages = Math.ceil(totalEntries / entriesPerPage);

  const currentEntries = entries.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  useEffect(() => {
    onPageChange(currentEntries);
  }, [currentPage, currentEntries, onPageChange]);

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      handlePageClick(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      handlePageClick(currentPage + 1);
    }
  };

  if (totalEntries <= entriesPerPage) {
    return null;
  }

  return (
    <div className="flex items-center space-x-2 justify-center mt-4">
      <button
        className={`p-2 rounded-full border ${
          currentPage === 1 ? "text-gray-300" : "text-gray-500"
        }`}
        onClick={handlePreviousClick}
        disabled={currentPage === 1}
      >
        <HiChevronLeft size={18} />
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => handlePageClick(index + 1)}
          className={`px-3 py-1 rounded-md border ${
            currentPage === index + 1
              ? "border-green-500 text-green-500"
              : "text-gray-500"
          }`}
        >
          {index + 1}
        </button>
      ))}

      <button
        className={`p-2 rounded-full border ${
          currentPage === totalPages ? "text-gray-300" : "text-gray-500"
        }`}
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
      >
        <HiChevronRight size={18} />
      </button>
    </div>
  );
};

export default Pagination;
