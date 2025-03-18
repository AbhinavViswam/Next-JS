import React from 'react'
import { notFound } from 'next/navigation';

async function page({params}:{params:Promise<{productId:string,reviewId:string}>}) {
  const {productId,reviewId} = await params
  if(parseInt(reviewId)>100){
    notFound();
  }
  else{
  return (
    <div>review {reviewId} from product {productId}</div>
  )
}
}

export default page