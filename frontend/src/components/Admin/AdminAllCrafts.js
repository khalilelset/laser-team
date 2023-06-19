
import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import AdminAllCraftsCard from './AdminAllCraftsCard'


const AdminAllCrafts = () => {

    const [craftOwnercraft, setCraftOwnercraft] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchCraftOwnerInfo = async () => {
          try {
            const emailL= window.localStorage.getItem("email");
            const email=emailL.slice(1, -1);
            
            const response = await fetch(`http://localhost:4000/api/craftowner/getcraft/${email}`);
            const data = await response.json();
           
            setCraftOwnercraft(data)
            setIsLoading(false);
            
          } catch (error) {
            
          }
          
        };
        
        fetchCraftOwnerInfo();
      }, []);


      
     const sketchItems=(data)=>{
        return data.map((n)=> {
            return (<AdminAllCraftsCard _id={n._id} craftDescription={n.craftDescription} craftTitle={n.craftTitle}
                mainCraftImage={n.mainCraftImage}  craftImage={n.craftImage}/>)
        })}

    return (
        <>             
        {!isLoading ? ( 

         <div>
            <div className='admin-content-text'>Your Crafts posted</div>
            <Row className='justify-content-start'>
              
           {sketchItems(craftOwnercraft)}

            </Row>
           </div>
       
     ) : (<div className="loading-container">
     <div className="loading-spinner"></div>
     <p>Loading...</p> </div>)}
 </>
    )
}

export default AdminAllCrafts