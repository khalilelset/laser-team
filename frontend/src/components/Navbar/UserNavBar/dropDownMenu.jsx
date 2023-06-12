import React from 'react';
import styles from './Navbar.css';

const DropDownProfile = () => {
    return (
        <div className='flex flex-col dropDownProfile'>
            <ul className='flex flex-col gap-4'>


                {/* To add an element to the DropDown menu */}
                <li><a className='Profile' href='#Profile'>Profile</a></li>
                <li><a className='MyCard' href='#MyCard'>My Card</a></li>
                <li><a className='MyProducts' href='#MyProducts'>My Products</a></li>
                <li><a className='MyCrafts' href='#MyCrafts'>My Crafts</a></li>
                <li><a className='Logout' href='#Logout'>Log out</a></li>
            </ul>
        </div>
    )
}

export default DropDownProfile;