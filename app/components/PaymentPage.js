
"use client"
import React, { useState, useEffect } from 'react'
import Script from 'next/script'
import { fetchpayments, initiate, fetchuser } from '@/action/useraction'
import { ToastContainer, toast } from 'react-toastify';
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'   
import Image from 'next/image'


const PaymentPage = ({ username }) => {


const [paymentform, setPaymentform] = useState({ name: "", message: "", amount: "" })
  const [currentuser, setcurrentuser] = useState({})
  const [payments, setpayments] = useState([])
  const searchParams = useSearchParams()
    const router = useRouter()




    useEffect(() => {
    const getData = async () => {
        let u = await fetchuser(username)
        setcurrentuser(u)
        let dbpayments = await fetchpayments(username)
        setpayments(dbpayments) 
    }

    getData()
}, [username])


    useEffect(() => {
    if (searchParams.get("paymentdone") === "true") {
        toast('Thanks for your donation!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    router.push(`/${username}`)
}, [searchParams, router, username])


    const handleChange = (e) => {
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }


  const pay = async (amount) => {
    let a = await initiate(amount, username, paymentform)
    let orderId = a.id
    var options = {
      key: currentuser.razorpayid,
      amount: amount,
      currency: "INR",
      name: "Get Me A Chai",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: orderId,
      callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9000090000"
      },
      notes: {
        address: "Razorpay Corporate Office"
      },
      theme: {
        color: "#3399cc"
      }
    }
    var rzp1 = new Razorpay(options);
    rzp1.open();
  }

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick={false} rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />

      <div className="w-full">
        <div >
          <img className='mx-auto w-full h-[50vh] object-cover' src={currentuser.coverpic} />
     
        </div>


        <div className="flex flex-col items-center justify-center mt-[-4rem] mb-4 text-center">
  <img className=" md:h-32 md:w-32 border-2 border-gray-900 rounded-full mb-4 object-cover" src={currentuser.profilepic}
    alt="Profile" />
   


  <h1 className='text-white font-bold text-2xl md:text-3xl'>{username}</h1>
               <div className='text-slate-400'>
                 Lets help {username} get a chai!

                </div>
            <div className='text-slate-400'>
                 {payments.length} Payments .   ₹{payments.reduce((a, b) => a + b.amount, 0)} raised
              </div>

</div>


        <div className="w-full h-px bg-zinc-700 my-4"></div>

        <div className="flex flex-col md:flex-row h-auto md:h-[70vh] p-4 md:p-10 gap-4">
          <div className="w-full md:w-[50%] bg-gray-800">
            <div className="px-4 py-6 md:px-12">
              <h1 className='text-xl md:text-2xl font-bold'>Supports</h1>
              <ul>
                {payments.length == 0 && <li>No user </li>}
                {payments.map((p, i) => (
                  <li key={i} className='my-4 flex gap-2 items-center'>
                    <Image className='rounded-full' width={33} height={33} src="/donor.gif" alt="" />
                    <span>{p.name} donated <span className='font-bold'>₹{p.amount}</span></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full md:w-[50%] bg-gray-800">
            <div className="px-4 py-6 md:px-12 flex flex-col gap-3">
              <h1 className='text-xl md:text-2xl font-bold'>Make a Payment</h1>

              <input onChange={handleChange} value={paymentform.name} name='name' type="text" placeholder='Enter Name' className='bg-gray-700 rounded-md w-full py-2 px-3' />
              <input onChange={handleChange} value={paymentform.message} name='message' type="text" placeholder='Enter Message' className='bg-gray-700 rounded-md w-full py-2 px-3' />
              <input onChange={handleChange} value={paymentform.amount} name='amount' type="text" placeholder='Enter Amount' className='bg-gray-700 rounded-md w-full py-2 px-3' />

              <button onClick={() => pay(Number.parseInt(paymentform.amount) * 100)} type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Pay</button>
            </div>

            <div className="px-4 md:px-12 pb-6 flex flex-wrap gap-2">
              <button onClick={() => pay(3000)} className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Pay 10 ₹</button>
              <button onClick={() => pay(3000)} className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Pay 15 ₹</button>
              <button onClick={() => pay(3000)} className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Pay 25 ₹</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentPage




