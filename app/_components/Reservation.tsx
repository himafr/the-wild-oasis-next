import { Cabin } from "../_@types/types"
import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service"
import DateSelector from "./DateSelector"
import ReservationForm from "./ReservationForm"

const Reservation : React.FC<{cabin:Cabin}> = async ({cabin}) => {
const [settings,bookedDates]=await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id)
])
    return (
       <div className="grid grid-cols-2 min-h-[400px] border border-primary-800">
        <DateSelector cabin={cabin} bookedDates={bookedDates} settings={settings} />
          <ReservationForm cabin={cabin} />
        </div>
    )
}

export default Reservation
