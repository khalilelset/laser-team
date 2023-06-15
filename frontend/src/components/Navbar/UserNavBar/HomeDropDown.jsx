import React from 'react';

const HomeDropDown = () => {
    return (
        <div className='flex flex-col HomeDropDown'>
            <ul className='flex flex-col gap-4'>


                {/* To add an element to the DropDown menu */}
                <li><a className='Services' href='/#services'>Services</a></li>
                <li><a className='Features' href='/#features'>Features</a></li>
                <li><a className='Team' href='/#team'>Team</a></li>
                <li><a className='Contact' href='/#contact'>Contact</a></li>
            </ul>
        </div>
    )
}

export default HomeDropDown;