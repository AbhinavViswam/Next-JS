import React from 'react'

// export const metadata = {
//   title:"hello login page"
// }

//or the following function can also be used

import { Metadata } from 'next'

export const generateMetadata =  () => {
  return (
    {
      title:"NEW LOGIN"
    }
  )
}


function page() {
  return (
    <div>
      login
    </div>
  )
}

export default page
