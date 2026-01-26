"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"

const Filter : React.FC =()=> {
    const router=useRouter();
    const searchParams=useSearchParams();
    const pathname=usePathname();
    function filter(filter:string){
        const params=new URLSearchParams(searchParams);
        params.set("capacity" ,filter)
        router.replace(`${pathname}?${params.toString()}`,{scroll:false})
    }
    return (
        <div className="border border-primary-800 flex">
            <button onClick={()=>filter("all")} className="px-5 py-2 cursor-pointer hover:bg-primary-700">All Cabins</button>
            <button onClick={()=>filter("small")} className="px-5 py-2 cursor-pointer hover:bg-primary-700">1&mdash;3</button>
            <button onClick={()=>filter("medium")} className="px-5 py-2 cursor-pointer hover:bg-primary-700">4&mdash;7</button>
            <button onClick={()=>filter("large")} className="px-5 py-2 cursor-pointer hover:bg-primary-700">8&mdash;12</button>
        </div>
    )
}

export default Filter
