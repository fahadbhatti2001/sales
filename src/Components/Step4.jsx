import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPen } from '@fortawesome/free-solid-svg-icons'
import {Header, Footer, ShortDetail} from '@/Components'
import { Link } from 'react-router-dom'

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

export const Step4 = () => {

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
                        <div className="p-4 bg-gray-50 rounded-t shadow">
                            <h1 className="font-bold text-gray-700">
                            Incident Information
                            </h1>
                            <div className="flex justify-between items-center my-2 w-full">
                                <p className="text-xs font-medium text-gray-500">
                                    Step 4 of 4
                                </p>
                                <p className="text-xs font-medium text-gray-500">
                                    Next: Service Options
                                </p>
                            </div>
                            <div className="flex justify-between gap-0 pb-4">
                                <div className="flex">
                                    <div className="rounded-full flex justify-center items-center">
                                        <span className="w-5 h-5 rounded-full bg-gray-400">
                                        <div className="h-full w-full flex justify-center items-center bg-green-600 border-2 border-green-600 rounded-full">
                                            <FontAwesomeIcon icon={faCheck} className="text-white" />
                                        </div>
                                        </span>
                                    </div>
                                </div>
                                <div className="flex w-full">
                                    <div className="w-full flex items-center">
                                        <div className="w-full h-1 bg-gray-200"></div>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="rounded-full flex justify-center items-center">
                                        <span className="w-5 h-5 rounded-full bg-gray-400">
                                        <div className="h-full w-full flex justify-center items-center bg-green-600 border-2 border-green-600 rounded-full">
                                            <FontAwesomeIcon icon={faCheck} className="text-white" />
                                        </div>
                                        </span>
                                    </div>
                                </div>
                                <div className="flex w-full">
                                    <div className="w-full flex items-center">
                                        <div className="w-full h-1 bg-gray-200"></div>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="rounded-full flex justify-center items-center">
                                        <span className="w-5 h-5 rounded-full bg-gray-400">
                                        <div className="h-full w-full flex justify-center items-center bg-green-600 border-2 border-green-600 rounded-full">
                                            <FontAwesomeIcon icon={faCheck} className="text-white" />
                                        </div>
                                        </span>
                                    </div>
                                </div>
                                <div className="flex w-full">
                                    <div className="w-full flex items-center">
                                        <div className="w-full h-1 bg-gray-200"></div>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="w-7 h-7 border-2 border-primary-1 rounded-full flex justify-center items-center">
                                        <span className="w-5 h-5 rounded-full bg-gray-400">
                                        <div className="h-full w-full flex justify-center items-center bg-white border-2 border-gray-400 rounded-full">
                                            <FontAwesomeIcon icon={faCheck} className="text-white" />
                                        </div>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="mb-4">
                            <div className="w-full">
                                <div className="flex justify-between items-center py-3">
                                <p className="text-sm font-bold text-gray-600">Claim Details</p>
                                <div className="flex items-center gap-1 text-primary-1">
                                    <FontAwesomeIcon icon={faPen} className="text-xs" />
                                    <p className="text-sm font-bold">Edit</p>
                                </div>
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
                                <p className="text-xs font-medium text-gray-500">Not functioning properly</p>
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
                            <div className="flex justify-between w-full mb-2">
                                <Link to={"/step3"} className="py-1.5 px-5 border-2 border-primary-1 text-sm font-bold text-primary-1 bg-blue-50 rounded" type="button" >Back</Link>
                                <Link to={"/success"} className="py-1.5 px-5 border-2 border-primary-1 text-sm font-bold text-white bg-primary-1 rounded" type="button" >Submit</Link>
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
