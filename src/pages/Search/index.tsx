import React from 'react';
import Form from './components/Form';
import UserInfo from './components/UserInfo';
import './styles.css';

const Search = () => (
    <div className="search-container">
        <Form />
        <UserInfo />
    </div>
);

export default Search;