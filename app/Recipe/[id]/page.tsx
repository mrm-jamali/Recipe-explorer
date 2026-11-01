

interface PropsParams {
  params:Promise<{id:string}>
}


 async function Page({params}:PropsParams) {

    const {id}=await params;
  // const { id } = await params;
  return (
    <div>{id}</div>
  )
}

export default Page