
import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import AdminAllProductsCard from './AdminAllProductsCard'
import { v4 as uuidv4 } from 'uuid';

const AdminAllProducts = () => {

    const [craftOwnerproduct, setCraftOwnerproduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchCraftOwnerInfo = async () => {
          try {
            const emailL= window.localStorage.getItem("email");
            const email=emailL.slice(1, -1);
            
            const response = await fetch(`http://localhost:4000/api/craftowner/getproduct/${email}`);
            const data = await response.json();
            setCraftOwnerproduct(data)
            setIsLoading(false);
            
          } catch (error) {
            
          }
          
        };
        
        fetchCraftOwnerInfo();
      }, []);


      
     const sketchItems=(data)=>{
        return data.map((n)=> {
            return (<AdminAllProductsCard _id={n._id} mainProductImage={n.mainProductImage} price={n.price}
                 productAvailableQuantity={n.productAvailableQuantity} productCategory={n.productCategory} 
                 productDescription={n.productDescription} productTitle={n.productTitle}
                 productImage={n.productImage}


                />)
        })}

    return (
        <>             
        {!isLoading ? ( 

         <div>
            <div className='admin-content-text'>Your Product posted</div>
            <Row className='justify-content-start'>
              
            {sketchItems(craftOwnerproduct)}

            </Row>
           </div>
       
     ) : (<div className="loading-container">
     <div className="loading-spinner"></div>
     <p>Loading...</p> </div>)}
 </>
    )
}

export default AdminAllProducts