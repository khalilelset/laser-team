import React from 'react';
import styles from './Navbar.css';
import { Link, redirect } from 'react-router-dom';
import HomePage from '../../../Page/HomePage/HomePage';

const OwnerDropDownProfile = () => {
    const changeStatusToNull = (event) => {
        event.preventDefault();
        let answer = window.confirm("Are you sure you want to logout?");
        if (answer) {
            window.localStorage.setItem('status', 'null');
            window.localStorage.removeItem('email');
            window.location.href = '/';
        }
    };

    return (
        <div className='flex flex-col dropDownProfile'>
            <ul className='flex flex-col gap-4'>
                <li><a className='Profile' href='/adminprofile'>Profile</a></li>
                <li><a className='MyProducts' href='/adminallproducts'>My Products</a></li>
                <li><a className='MyCrafts' href='/adminallCrafts'>My Crafts</a></li>
                <li><a className='Logout' onClick={changeStatusToNull}>Log out</a></li>
            </ul>
        </div>
    );
};

export default OwnerDropDownProfile;
