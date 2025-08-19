import React from 'react'

const Funstate = () => {
    var business = {
        name: "Vintage",
        place: "Bangalore",
        service: "Computer Science"
    }
  return (
    <div>
        <h1>
            {businessAddress(business)} provides {business.service}
        </h1>
    </div>
  )
}

function businessAddress(business){
    return business.name + " in " + business.place;
}

export default Funstate