import React from 'react'

const LeftButton = ( onClick, onDisable ) => {
    return (
        <img
            src={process.env.PUBLIC_URL + '/img/next.png'}
            alt=""
            width="25px"
            onClick={onClick}
            onDisable={onDisable}
            height="25px"
            style={{ float: "left", marginTop: "220px", cursor: "pointer" }}
        />
    )
}

export default LeftButton