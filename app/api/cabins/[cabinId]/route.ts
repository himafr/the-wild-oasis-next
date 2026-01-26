import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

export async function GET(req: Request,{params}:{params:Promise<{cabinId:string}>}) {
try{
  const cabinId=Number((await params).cabinId)
  const [cabin ,bookedCabins]=await Promise.all([getCabin(cabinId),
    getBookedDatesByCabinId(cabinId)])
  return Response.json({
    status: 200,
    cabin,
    bookedCabins
  });
}catch{
    return Response.json({
        status:500,
        error:"Could not fetch cabin data"
    });
  }
}
