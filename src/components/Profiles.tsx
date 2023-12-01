import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Search from "./ProfilesSearch";
import ProfileFilters from './ProfileFilters';
import Pagination from "./Pagination";
import Users from "./Users";
import { ApiResponse, User } from "../types/index";
import { errorMessage } from '../constants/index';

const ViewProfiles = () => {
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [displayedUsers, setDisplayedUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedGender, setSelectedGender] = useState<string | null>("");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  
  useEffect(() => {
    const storedGender = localStorage.getItem("selectedGender");
    if (storedGender) {
      navigate(`?gender=${storedGender}`);
    }
  }, [navigate]);

  useEffect(() => {
    fetchUsers(currentPage, selectedGender);    
  }, [currentPage]);

  useEffect(() => {
    let filteredUsers = allUsers;

    if (searchTerm) {
      const searchTermLowerCase = searchTerm.toLowerCase();
      filteredUsers = filteredUsers.filter((user) =>
        `${user.name.first} ${user.name.last}`
          .toLowerCase()
          .includes(searchTermLowerCase)
      );
    }

    setDisplayedUsers(filteredUsers);
  }, [allUsers, searchTerm]);

  const fetchUsers = async (page: number, selectedGender?: string | null) => {
    try {
      console.log('run', selectedGender === "")
      setLoading(true);
      localStorage.setItem("selectedGender", selectedGender || "");

      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}?page=${page}&inc=gender,name,nat,picture,login,location,email&results=10${
          selectedGender !== "" ? `&gender=${selectedGender}` : ""
        }`, 
        { 
          method: "GET" 
        }
      );

      if (response.ok) {
        const data : ApiResponse = await response.json();
        setAllUsers(data.results);
        setLoading(false);
      } else {
        const errorData = await response.json();
        if (errorData && errorData.error) {
          toast.error(errorData.error);
        } else {
          toast.error(errorMessage);
        }
      }
    } catch (error) {
      toast.error(errorMessage);
    }
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleGenderChange = (newGender: string) => {
    setSelectedGender(newGender);
    console.log(newGender)
    if(newGender !== "") navigate(`?gender=${newGender}`);
    else navigate('')
    fetchUsers(1, newGender);
    
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  if(loading) return <p>Loading...</p>

  return (
    <div className="flex flex-col relative dark:bg-gray-700 justify-center items-center w-full m-auto h-full">

      <ProfileFilters selectedGender={selectedGender} onGenderChange={handleGenderChange} />

      <Search onSearch={handleSearch} />

      <Users displayedUsers={displayedUsers} />

      <Pagination currentPage={currentPage} onNextPage={handleNextPage} onPreviousPage={handlePreviousPage} />

    </div>
  );
};

export default ViewProfiles;
