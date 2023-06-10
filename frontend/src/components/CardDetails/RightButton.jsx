import React from 'react'

const RightButton = ( onClick, onDisable ) => {
    return (
        <img
            src={process.env.PUBLIC_URL + '/img/prev.png'}
            alt=""
            width="25px"
            onClick={onClick}
            onDisable={onDisable}
            height="25px"
            style={{ float: "right", marginTop: "220px", cursor: "pointer" }}
        />
    )
}


export default RightButton