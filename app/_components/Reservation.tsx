import { Cabin } from "../_@types/types"
import { auth } from "../_lib/auth"
import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service"
import DateSelector from "./DateSelector"
import LoginMessage from "./LoginMessage"
import ReservationForm from "./ReservationForm"

const Reservation : React.FC<{cabin:Cabin}> = async ({cabin}) => {
const [settings,bookedDates]=await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id)
])
const session=await auth()
    return (
       <div className="grid grid-cols-2 min-h-[400px] border border-primary-800">
        <DateSelector cabin={cabin} bookedDates={bookedDates} settings={settings} />
         {session?.user ? 
          <ReservationForm user={session.user} cabin={cabin} />
         :
         <LoginMessage />
         }
        </div>
    )
}

export default Reservation
