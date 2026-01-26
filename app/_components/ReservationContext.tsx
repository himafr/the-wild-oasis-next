"use client";
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
import { DateRange } from "react-day-picker";

type ReservationContextType = {
  range: DateRange|undefined;
  setRange: Dispatch<SetStateAction<DateRange|undefined>>;
  resetRange:()=>void;
};

const ReservationContext = createContext<ReservationContextType | undefined>(
  undefined
);
const initialValue ={
    from: undefined,
    to: undefined,
  }
  function ReservationProvider({
    children,
  }: {
    children: React.ReactNode;
  }) {
    const [range, setRange] = useState<DateRange|undefined>(initialValue);
    const resetRange=()=>setRange(initialValue);

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }} >
      {children}
    </ReservationContext.Provider>
  );
}


function useReservation(){
    const context = useContext(ReservationContext);
    if(context === undefined){
        throw new Error("useReservation must be used within a ReservationContextProvider");
    }
    return context;
}

export {ReservationProvider, useReservation};