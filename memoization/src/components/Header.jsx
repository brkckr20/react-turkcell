import React, { memo } from 'react'

const Header = ({ increment }) => {

    console.log("header re-rendered")
    return (
        <div>
            <p>Header</p>

            <button onClick={increment}>Headerdan Arttır</button>
        </div>
    )
}

export default memo(Header)