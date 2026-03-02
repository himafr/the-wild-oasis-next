"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { Booking } from "../_@types/types";
import { getBooking } from "./data-service";
import { redirect } from "next/navigation";

export async function signInAction() {
  await signIn("google", {
    redirectTo: "/account",
  });
}
export async function signOutAction() {
  await signOut({
    redirectTo: "/",
  });
}

export async function updateProfile(formData: FormData) {
  const session =await auth();
  if (!session) throw new Error("please login before committing this action");
  const [nationality, countryFlag] =
    formData.get("nationality")?.toString().split("%") || [];
  const nationalID = formData.get("nationalID") as string;
  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error("please provide a valid national id ");

const updatedFields={nationalID,countryFlag,nationality};

    const { error } = await supabase
    .from('guests')
    .update(updatedFields)
    .eq('id', session.user.guestId)

  if (error) 
    throw new Error('Guest could not be updated',error);

  revalidatePath("/account/profile")
}

export async function updateBooking(formData:FormData) {
  const bookingId=Number(formData.get("bookingId"));
  if(!bookingId) throw new Error("booking is not valid")
  const session =await auth();
  if (!session) throw new Error("please login before committing this action");

  const booking:Booking
  =await getBooking(bookingId);

  console.log(session.user.guestId + " mmmmmm "+booking.guestId)
  if(session.user.guestId !== booking.guestId)throw new Error("your not allow to perform this action ")
    const updatedData={
  numGuests:Number(formData.get("numGuests")),
observations:formData.get("observations")};

  const {  error } = await supabase
    .from('bookings')
    .update(updatedData)
    .eq('id', bookingId)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error('Booking could not be updated');
  }
redirect("/account/reservations")
}

export async function deleteReservation(bookingId:Booking["id"]) {

  console.log("booking")
   const session =await auth();
  if (!session) throw new Error("please login before committing this action");
  const booking:Booking
  =await getBooking(bookingId)
  if(session.user.guestId !== booking.guestId)throw new Error("your not allow to perform this action ")

     const { error } = await supabase.from('bookings').delete().eq('id', bookingId);
    
    if (error) {
        console.error(error);
        throw new Error('Booking could not be deleted');
      }
      revalidatePath("/account/reservation")
}