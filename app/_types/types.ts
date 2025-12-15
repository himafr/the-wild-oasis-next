
export interface Cabin {
     id: number;
      name: string;
       maxCapacity: number;
       regularPrice: number;
       discount: number;
       image: string;
}
export interface Booking {
     id: number;
    guestId: number;
    startDate: string;
    endDate: string;
    numNights: number;
    totalPrice: number;
    numGuests: number;
    status: string;
    created_at: string;
    cabins: Cabin,
}