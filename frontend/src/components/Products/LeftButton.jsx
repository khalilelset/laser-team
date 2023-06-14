import React from 'react'
import next from '../../assets/img/next.png'
const LeftButton = ( onClick, onDisable ) => {
    return (
        <img
            src={next}
            alt=""
            width="35px"
            onClick={onClick}
            onDisable={onDisable}
            height="35px"
            style={{ float: "left", marginTop: "220px", cursor: "pointer" }}
        />
    )
}

export default LeftButton