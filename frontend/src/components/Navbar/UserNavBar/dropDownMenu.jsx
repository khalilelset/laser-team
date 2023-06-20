import React from 'react';
import styles from './Navbar.css';

const OwnerDropDownProfile = () => {
    const changeStatusToNull = () => {
        window.localStorage.setItem('status', 'null');
        window.localStorage.removeItem('email');
    }
    return (
        <div className='flex flex-col dropDownProfile'>
            <ul className='flex flex-col gap-4'>


                {/* To add an element to the DropDown menu */}
                <li><a className='Profile' href='/adminprofile'>Profile</a></li>
                <li><a className='MyProducts' href='/MyProducts'>My Products</a></li>
                <li><a className='MyCrafts' href='/MyCrafts'>My Crafts</a></li>
                <li><a className='Logout' href='/' onClick={changeStatusToNull}>Log out</a></li>
            </ul>
        </div>
    )
}

export default OwnerDropDownProfile;