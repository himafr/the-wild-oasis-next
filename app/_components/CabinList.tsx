import { getCabins } from "../_lib/data-service";
import { Cabin } from "../_types/types";
import CabinCard from "./CabinCard";

const CabinList : React.FC =async()=> {
      // CHANGE
  const cabins:Cabin[] = await getCabins();
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {cabins.map((cabin) => (
            <CabinCard cabin={cabin} key={cabin.id} />
          ))}
        </div>
      )
}

export default CabinList
