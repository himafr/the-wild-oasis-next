"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";

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
