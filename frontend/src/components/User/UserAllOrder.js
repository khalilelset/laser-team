import React from 'react'
import { Row } from 'react-bootstrap'
import UserAllOrderItem from './UserAllOrderItem'

const UserAllOrder = () => {
    return (
        <div>
        <div className="admin-content-text pb-4">KHALED HASSAN KHaled   </div>
        <Row className='justify-content-between'>
           <UserAllOrderItem />
           <UserAllOrderItem />
           <UserAllOrderItem />
        </Row>
        </div>
    )
}

export default UserAllOrder