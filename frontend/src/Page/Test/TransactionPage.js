import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Transaction from './Transaction'
import axios from 'axios'

const TransactionPage = () => {
  const [tran,setTran]=useState([]);

 const getAllTrans = async ()=>{
const res =await axios.get("http://localhost:4000/api/transaction/getAll")
setTran(res.data)
 }

  useEffect(()=>{
getAllTrans();
  },[])
  // console.log(tran)


  return (



    <Container >
    <Row className='py-3'>
    <Col sm="3" xs="2" md="2">
      <div className="sidebar">
            <div className="d-flex flex-column">
                <Link to="/ContactPage" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
                    Contact                    </div>
                </Link>
                <Link to="/Transaction" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                    Transaction                    </div>
                </Link>
            </div>
        </div>
        </Col>
        <Col sm="9" xs="10" md="10">
        {
          tran.map((ti,index)=>{
            {console.log(ti)}
          return(  <Transaction cartid={ti.cartId} craftid={ti.clientId} location={ti.Location}/>)
          })
        }


          {/* <Transaction cartid="6496b4fb442baf442e6f1945" craftid="6496b4fb442baf442e6f1945" location="tripolie"/>
          <Transaction/>
          <Transaction/>
          <Transaction/>
          <Transaction/>
          <Transaction/>
          <Transaction/>
          <Transaction/> */}
        </Col>
    </Row>
</Container>
  )
}

export default TransactionPage
