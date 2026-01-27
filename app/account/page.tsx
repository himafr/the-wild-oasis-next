import { auth } from "../_lib/auth";

export const metadata = {
  description: "Manage your bookings and account details at The Wild Oasis.",
};
export default async function Page() {
const session =await auth();
console.log(session);
  return (
    <div>
      <h1>Welcome {session?.user?.name?.split(" ")[0]}</h1>
    </div>
  );
}