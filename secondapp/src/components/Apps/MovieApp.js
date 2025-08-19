import React, { useState } from 'react'

function BookingForm({movie}){
    const [seats, setSeats] = useState(1)
    return(
        <div>
            <h3>Booking for {movie}</h3>
            <label>Seats: </label>
            <input type="number" min="1" value={seats}
            onChange = {(e)=>setSeats(e.target.value)} />

            <p>Total Price: ${seats *200}</p>
        </div>
    )
}

const MovieApp = () => {
  return (
    <div>
        <BookingForm movie="Avengers" />
        <BookingForm movie="Inception" />
    </div>
  )
}

export default MovieApp