import React from 'react';

const CurrentMonth = ({month}) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return (
        <div>
            {monthNames[month]}
        </div>
    )
}

export default CurrentMonth