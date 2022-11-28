import React from 'react'

const User = ({ user }) => {

    console.log("user rendered")

    return (
        <div>
            <p>
                User
            </p>
            <pre>
                {
                    JSON.stringify(user, null, 2)
                }
            </pre>

        </div>
    )
}

export default React.memo(User)