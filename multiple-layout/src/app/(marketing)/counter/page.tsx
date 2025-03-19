import React from 'react'
import Counter from './counter'
import { Metadata } from 'next'

export const metadata = {
  title:"Counter App"
}

function page() {
  return (
    <div>
      <Counter/>
    </div>
  )
}

export default page
