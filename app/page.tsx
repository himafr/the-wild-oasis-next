import Counter from "@/app/_components/Counter";
import Image from "next/image";
import Link from "next/link";
import bg from "@/public/bg.png"

export default async function Page() {
  try{
    const res=await fetch('https://nothingIsUseful.org');
    if(res.ok){
      const data =await res.json();
      console.log(data)
    }else{

      
     console.error(res.url)
    }
  }catch(e ){
    if(e instanceof Error)
      console.error("catch: ",e.message)

 }
 
  return (
    <main className="mt-24">
         <Image src={bg} fill className="object-cover object-top" placeholder="blur" alt="Mountains and forests with two cabins" />
   
         <div className="relative z-10 text-center">
           <h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal">
             Welcome to paradise.
           </h1>
           <Link
             href="/cabins"
             className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
           >
             Explore luxury cabins
           </Link>
         </div>
       </main>
  );
}