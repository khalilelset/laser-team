import React from 'react';
import styles from './Navbar.css';

const ClientDropDownProfile = () => {
    const changeStatusToNull = () => {
        let answer = window.confirm("are you sure you want to logout")
        if (answer) {
            window.localStorage.setItem('status', 'null');
            window.localStorage.removeItem('email');
        }
    }
    return (
        <div className='flex flex-col dropDownProfile'>
            <ul className='flex flex-col gap-4'>


                {/* To add an element to the DropDown menu */}
                <li><a className='Profile' href='/userprofile'>Profile</a></li>
                <li><a className='MyCard' href='/MyCard'>My Card</a></li>
                <li><a className='Logout' href='/' onClick={changeStatusToNull}>Log out</a></li>
            </ul>
        </div>
    )
}

export default ClientDropDownProfile;
