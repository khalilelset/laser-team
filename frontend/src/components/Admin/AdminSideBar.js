import React from 'react'
import { Link } from 'react-router-dom'

const AdminSideBar = () => {
    return (
        <div className="sidebar">
            <div className="d-flex flex-column">
                <Link to="/adminallorders" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
                    Manage orders                    </div>
                </Link>
                <Link to="/adminallproducts" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                    Product management                    </div>
                </Link>
                {/* <Link to="/adminaddbrand" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                    Add a brand
                    </div>
                </Link>

                <Link to="/adminaddcategory" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                    Add a category
                    </div>
                </Link>

                <Link to="/adminaddsubcategory" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                    Add a subcategory
                    </div>
                </Link> */}
                <Link to="/adminaddproduct" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                    Add a product
                    </div>
                </Link>

                <Link to="/adminprofile" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                   Profile
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default AdminSideBar