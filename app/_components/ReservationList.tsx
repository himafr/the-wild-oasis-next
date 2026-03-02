"use client"
import { Booking } from "../_@types/types"
import ReservationCard from "./ReservationCard"
import { deleteReservation } from '../_lib/actions';
import { useOptimistic } from "react";

const ReservationList : React.FC<{bookings:Booking[]}> =({bookings})=> {
    const [optimistBookings,optimisticDelete]=useOptimistic(bookings,(_curBookings,bookingId):Booking[]=>{
        return _curBookings.filter((booking)=>booking.id != bookingId)
    })

    async function handleDelete(bookingId:number) {
        optimisticDelete(bookingId);
        await deleteReservation(bookingId);
        
    }
    return (
        <ul className="space-y-6">
          {optimistBookings.map((booking) => (
            <ReservationCard onDelete={handleDelete}  booking={booking} key={booking.id} />
          ))}
        </ul>
    )
}

export default ReservationList
