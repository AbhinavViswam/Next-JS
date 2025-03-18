import React from 'react'

async function page({params}:{params:{productId:string}}) {
    const productId = params.productId
  return (
    <div>details about products {productId}</div>
  )
}

export default page