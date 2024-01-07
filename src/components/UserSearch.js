import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './us.css';
import Search from './Search';
import UserTable from './UserTable';
import Pagination from './Pagination';

const UserSearch = () => {
  const [searchInput, setSearchInput] = useState('');
  const [response, setResponse ]= useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.github.com/search/users?q=${searchInput}&sort=followers&per_page=${usersPerPage}&page=${currentPage}`);
      setResponse(response.data);
    } catch (error) {
      console.error('Error searching GitHub users:', error);
    }
  };
  useEffect(()=>{
    handleSearch();
  },[currentPage])

  return (
    <div className="search">
        
        <Search setSearchInput={setSearchInput} handleSearch={handleSearch} searchInput={searchInput}/>
        <UserTable users={response?.items}/>
        {Object.keys(response).length ?  <Pagination
            usersPerPage={usersPerPage}
            totalUsers={response.total_count}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
        /> : null}
    </div>
  );
};

export default UserSearch;
