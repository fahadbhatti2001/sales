import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPen, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import {Header, Footer, ShortDetail} from '@/Components'

const headerLinks = [

    {
      name: "FAQs", path: "/", cstStyle: "text-primary-1"
    },
    {
      name: "Contact Us", path: "/", cstStyle: "text-primary-1"
    },
    {
      name: "File a Claim", path: "/step1", cstStyle: "text-primary-1"
    },
  ]

export const Complete = () => {
  return (
    <>
      <Header headerData={headerLinks} />
      <div className="bg-primary-1 py-6 xl:px-32 lg:px-16 md:px-8 sm:px-6 px-4">
          <h1 className="text-2xl font-medium text-white">
              File a Claim
          </h1>
      </div>
      <div className="flex justify-center xl:px-40 lg:px-20 md:px-10 sm:px-6 px-4 bg-primary-4">
        <div className="container py-8 md:px-12 ">
          <div className="grid grid-cols-12 gap-6 w-full">
            <div className="md:col-span-8 col-span-12 md:order-1 order-2 bg-white rounded shadow">
                <div className="p-4">
                    <h1 className="text-sm mb-4 font-bold text-gray-700">
                    Claim number: DX543271RD5
                    </h1>
                    <p className="text-sm font-medium text-gray-600">
                    Your claim has been submitted and we are just checking the last few details. If your claim is approved, we will send you a shipping label so you can send us your defective device for repair. <br /> <br /> We will be back in the touch within 1-2 working days with your claim decision in the meantime you can check the status of your claim on your dashboard
                    </p>
                    <div className="w-full">
                    <div className="flex items-center gap-2 py-2">
                        <p className="text-sm font-bold text-gray-600">Deductible Fee</p>
                        <FontAwesomeIcon icon={faCircleInfo} className="text-gray-300" />
                    </div>
                    <hr />
                    </div>
                    <div className="py-6">
                    <div className="flex justify-center gap-4">
                        <div className="flex">
                        <div className="rounded-full flex justify-center items-center">
                            <span className="w-5 h-5 rounded-full bg-gray-400">
                                <div className="h-full w-full flex justify-center items-center bg-green-600 border-2 border-green-600 rounded-full">
                                <FontAwesomeIcon icon={faCheck} className="text-white" />
                                </div>
                            </span>
                        </div>
                        </div>
                        <h1 className="font-medium text-gray-700">
                        Thank you - your payment details have been confirmed
                        </h1>
                    </div>
                    <div className="flex justify-center my-4">
                        <img src="/images/payment.PNG" />
                    </div>
                    <p className="text-xs text-gray-600">
                        In that event you are unable to successfully submit your deductible payment <span className="text-primary-1 underline">please contact us</span>
                    </p>
                    </div>
                    <div className="mb-4">
                    <div className="w-full">
                        <div className="flex justify-between items-center py-3">
                        <p className="text-sm font-bold text-gray-600">Claim Details</p>
                        </div>
                        <hr /> 
                    </div>
                    <div className="w-full">
                        <div className="flex justify-between items-center py-3">
                        <p className="text-xs font-medium text-gray-500">Date of incident</p>
                        <p className="text-xs font-medium text-gray-500">12/15/2021</p>
                        </div>
                        <hr />
                    </div>
                    <div className="w-full">
                        <div className="flex justify-between items-center py-3">
                        <p className="text-xs font-medium text-gray-500">Reason for claim</p>
                        <p className="text-xs font-medium text-gray-500">My phone is not functioning properly</p>
                        </div>
                        <hr />
                    </div>
                    <div className="w-full">
                        <div className="flex justify-between items-center py-3">
                        <p className="text-xs font-medium text-gray-500">Description</p>
                        <p className="text-xs font-medium text-gray-500">Loerm ipsum is typed here</p>
                        </div>
                        <hr />
                    </div>
                    </div>
                    <div className="mb-4">
                    <div className="w-full">
                        <div className="flex md:flex-row flex-col justify-between items-center py-2">
                        <p className="text-sm font-bold text-gray-600">Fulfillment information</p>
                        <p className="text-sm font-bold text-primary-1">Need a Different Repair Option</p>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="flex justify-between items-center py-3">
                        <p className="text-xs font-bold text-gray-500">Send To Us</p>
                        </div>
                        <hr />
                    </div>
                    <div className="w-full">
                        <div className="flex justify-between items-center py-3">
                        <p className="text-xs font-medium text-gray-500">Delivery Address</p>
                        <p className="text-xs font-medium text-gray-500">2 Cherry Road</p>
                        </div>
                        <hr />
                    </div>
                    </div>
                    <div className="mb-4">
                    <div className="w-full">
                        <div className="flex justify-between items-center py-3">
                        <p className="text-sm font-bold text-gray-600">Personal Information</p>
                        <div className="flex items-center gap-1 text-primary-1">
                            <FontAwesomeIcon icon={faPen} className="text-xs" />
                            <p className="text-sm font-bold">Edit</p>
                        </div>
                        </div>
                        <hr /> 
                    </div>
                    <div className="w-full">
                        <div className="flex justify-between items-center py-3">
                        <p className="text-xs font-medium text-gray-500">Full Name</p>
                        <p className="text-xs font-medium text-gray-500">Steve Smith</p>
                        </div>
                        <hr />
                    </div>
                    <div className="w-full">
                        <div className="flex justify-between items-center py-3">
                        <p className="text-xs font-medium text-gray-500">Address</p>
                        <p className="text-xs font-medium text-gray-500">123 Main Street</p>
                        </div>
                        <hr />
                    </div>
                    <div className="w-full">
                        <div className="flex justify-between items-center py-3">
                        <p className="text-xs font-medium text-gray-500">Email Address</p>
                        <p className="text-xs font-medium text-gray-500">steve.smith@gmail.com</p>
                        </div>
                        <hr />
                    </div>
                    <div className="w-full">
                        <div className="flex justify-between items-center py-3">
                        <p className="text-xs font-medium text-gray-500">Contact Number</p>
                        <p className="text-xs font-medium text-gray-500">(770) 5123-155</p>
                        </div>
                        <hr />
                    </div>
                    </div>
                    <div className="mb-4">
                    <div className="w-full">
                        <div className="flex justify-between items-center py-2">
                        <p className="text-sm font-bold text-gray-600">Claim History</p>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="flex gap-4 py-3">
                        <div className="rounded-full flex justify-center">
                            <span className="w-4 h-4 rounded-full bg-gray-400">
                                <div className="h-full w-full flex justify-center items-center bg-primary-1 border-prbg-primary-1 rounded-full">
                                <FontAwesomeIcon icon={faCheck} className="text-white" />
                                </div>
                            </span>
                        </div>
                        <div className="">
                            <p className="text-xs font-bold text-gray-500 mb-1">Claim Submitted</p>
                            <p className="text-xs font-medium text-gray-500">Date Reported: August end, 2019</p>
                        </div>
                        </div>
                        <hr />
                    </div>
                    </div>
                    <div className="mb-4">
                    <button className="mx-4 px-6 py-2 text-sm font-bold text-white bg-primary-1 rounded" type="button">
                        Go to Claim Dashboard
                    </button>
                    </div>
                </div>
            </div>
            <ShortDetail/>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
