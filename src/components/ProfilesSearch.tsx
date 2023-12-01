import React, { useState } from "react";

interface SearchProps {
  onSearch: (term: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="flex justify-center items-center mt-4 w-full">
      <input
        type="text"
        placeholder="Search a user"
        value={searchTerm}
        onChange={handleInputChange}
        className="border-black rounded w-60 p-2 outline-none"
      />
    </div>
  );
};

export default Search;
