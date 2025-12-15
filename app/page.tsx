import Counter from "@/app/_components/Counter";

export default async function Page() {
  try{
    const res=await fetch('https://nothingIsUseful.org');
    if(res.ok){
      const data =await res.json();
    }else{
     console.log(res.url)

    }
  }catch(e ){
    if(e instanceof Error)
      console.error("catch: ",e.message)

 }
 
  return (
    <div>
      <h1>Home</h1>
      <Counter name="Hema Sallem" />
    </div>
  );
}