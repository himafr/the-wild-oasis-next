import { getCabin, getCabins } from "@/app/_lib/data-service";
import { Cabin as CabinType } from "@/app/_@types/types";

import Reservation from "@/app/_components/Reservation";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";
import Cabin from "@/app/_components/Cabin";

export async function generateMetadata({params}:{params:Promise<{cabinId:string}>}){
    const id=(await params).cabinId;
    const cabin:CabinType =await getCabin(Number(id))
    return {
        title:"Cabin "+cabin.name,
        description:cabin.description
    }
}

export async function generateStaticParams() {
  const cabins:CabinType[]=await getCabins();
  const ids:{cabinId:string}[]=cabins.map(({id})=>({cabinId:id.toString()}))
  return ids;
}

export default async function Page({params}:PageProps<'/cabins/[cabinId]'>) {
    const cabinId=(await params).cabinId
const cabin=await getCabin(Number(cabinId))
  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin}/>
      <div className="absolute left-0 w-[99%]">
        <h2 className="text-5xl font-semibold text-center mb-2">
          Reserve {cabin.name} today. Pay on arrival.
        </h2>
        <Suspense fallback={<Spinner />}>
       <Reservation cabin={cabin}/>
        </Suspense>
      </div>
    </div>
  );
}
