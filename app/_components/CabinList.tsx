import { getCabins  } from "../_lib/data-service";
import { Cabin } from "../_@types/types";
import CabinCard from "./CabinCard";
// import { unstable_noStore as noStore } from "next/cache";

const CabinList : React.FC<{filter:string}> =async({filter})=> {
  // noStore();
  const cabins:Cabin[] = await getCabins();

  let displayedCabins
  if(filter==="small"){
    displayedCabins=cabins.filter(c=>c.maxCapacity<=3)
  }else if(filter==="medium"){
    displayedCabins=cabins.filter(c=>c.maxCapacity>=4&&c.maxCapacity<=7)
  }else if(filter==="large"){
    displayedCabins=cabins.filter(c=>c.maxCapacity>=8)
  }else{
    displayedCabins=cabins
  }
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {displayedCabins.map((cabin) => (
            <CabinCard cabin={cabin} key={cabin.id} />
          ))}
        </div>
      )
}

export default CabinList
