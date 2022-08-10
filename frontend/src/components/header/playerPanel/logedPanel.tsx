import React, { useEffect } from 'react'

export default function LogedPanel() {
    let userData: string = ''

    useEffect(() => {
        userData = JSON.parse(localStorage.getItem("userData") || '');
    }, [])
    return (
        <div>
            {/* {userData.name} */}
        </div>
    )
}
