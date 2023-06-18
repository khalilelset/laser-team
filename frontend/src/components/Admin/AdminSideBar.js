import React from 'react'
import { Link } from 'react-router-dom'

const AdminSideBar = () => {
    return (
        <div className="sidebar">
            <div className="d-flex flex-column">
                

            <Link to="/adminprofile" style={{ textDecoration: 'none' }}>
                 <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                Profile
                 </div>
             </Link>       

                <Link to="/adminaddproduct" style={{ textDecoration: 'none' }}>
                  <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                  Add a product
                  </div>
                </Link>

              
                <Link to="/adminallproducts" style={{ textDecoration: 'none' }}>
                 <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                 Product management                    </div>
                </Link>
              
              <Link to="/adminaddcraft" style={{ textDecoration: 'none' }}>
                 <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                 Add a Craft </div>
                </Link>
              

            </div>
        </div>
    )
}

export default AdminSideBar                   