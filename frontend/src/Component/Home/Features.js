import React from 'react'
import back from '../../images/info2.jpg'
import craft from '../../images/craft.jpg'
import craft2 from '../../images/craft2.webp'
const Features = () => {
    return (
        <div className='mainFeatures'>
         <div className='containerFeatures'>
            <div className='blockimg'><img src={back} style={{width:'250px' ,height:'300px'}}/></div>
                <div className='blocktext'>
                <br/>   <h1>
                Crafts Connect For
                </h1>
                    <h1>
                    Customers
                    </h1><br/>
                    <p>
                    PC-A ne peut pas communiquer avec PC-B car ils se trouvent
                     sur des réseaux différents, ce qui nécessite l'utilisation
                      d'un routeur de passerelle par défaut pour router les paquets
                      .
                    </p>

                </div>
                
            </div>

           <div className='containerimg'>
           <img src={craft} style={{width:'250px' ,height:'300px'}}/>
           <img src={craft2} style={{width:'250px' ,height:'300px'}}/>
           </div>

            <div className='containerFeatures'>
            <div className='blockimg'><img src={back} style={{width:'250px' ,height:'300px'}}/></div>
                <div className='blocktext'>
                <br/> <h1>
                    Crafts Connect For
                </h1>
                    <h1>
                    Craft Owners
                    </h1>
                    <br/>
                    <p>
                    PC-A ne peut pas communiquer avec PC-B car ils se trouvent
                     sur des réseaux différents, ce qui nécessite l'utilisation
                      d'un routeur de passerelle par défaut pour router les paquets
                      .
                    </p>

                </div>

            </div>

        </div>
    )
}

export default Features
