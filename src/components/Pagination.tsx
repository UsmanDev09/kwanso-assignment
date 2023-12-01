import React from "react";

interface PaginationProps {
  currentPage: number;
  onPreviousPage: () => void;
  onNextPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  onPreviousPage,
  onNextPage,
}) => {
  return (
    <div className="flex justify-center items-center mt-4 w-full">
      <button
        onClick={onPreviousPage}
        disabled={currentPage === 1}
        className="mx-2 px-4 py-2 border rounded bg-blue-500 text-white"
      >
        Previous Page
      </button>
      <button
        onClick={onNextPage}
        className="mx-2 px-4 py-2 border rounded bg-blue-500 text-white"
      >
        Next Page
      </button>
    </div>
  );
};

export default Pagination;
