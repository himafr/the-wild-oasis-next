import { ReactNode } from "react";
import {Josefin_Sans} from "next/font/google";
import Header from "./_components/Header";

const josefin=Josefin_Sans({
  subsets:['latin'],
  display:"swap",
  
})

export const metadata={
  title: {template:"%s | The Wild Oasis",
  default:"Welcome | The Wild Oasis"},
  }
import "@/app/_styles/globals.css"
import { ReservationProvider } from "./_components/ReservationContext";
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body   cz-shortcut-listen="true" className={josefin.className+` antialiased bg-primary-950 min-h-screen text-primary-100 flex flex-col  relative`}>
        <Header />
        <div className="flex-1 px-8 py-12 grid"> 


        <main className="max-w-8xl mx-auto w-full">
          <ReservationProvider>
          {children}
          </ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
