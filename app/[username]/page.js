import React from 'react'
import PaymentPage from '../components/PaymentPage'
import { notFound } from 'next/navigation'
import connectDb from '@/db/connectDb'
import User from '@/models/User'
const page = async({params}) => {
 
    const checkUser = async ()=>{
    await connectDb()
   let u = await User.findOne({ username: params.username })
    if(!u){
  return    notFound()
    }
  }
  await checkUser()

  return (
  <div className="">
      <PaymentPage username={params.username} />
  </div>
  )
}


export default page
export async function generateMetadata({ params }) {
  return {
    title: `${params.username}- get me a chai`,
  }
}
