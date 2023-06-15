import React from 'react'
import { Link } from 'react-router-dom'

const UserSideBar = () => {
    return (
        <div className="sidebar">
            <div className="d-flex flex-column">
                <Link to="/userallorders" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
                    Manage orders                    </div>
                </Link>
              
                <Link to="/useraddresses" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                     personal addresses                    </div>
                </Link>

                <Link to="/userprofile" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                    Profile personly
                    </div>
                </Link>


            </div>
        </div>
    )
}
export default UserSideBar