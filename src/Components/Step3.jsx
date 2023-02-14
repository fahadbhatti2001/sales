import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
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

export const Step3 = () => {

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
                                    Step 3 of 4
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
                                    <div className="w-7 h-7 border-2 border-primary-1 rounded-full flex justify-center items-center">
                                        <span className="w-5 h-5 rounded-full bg-gray-400">
                                        <div className="h-full w-full flex justify-center items-center bg-white border-2 border-gray-400 rounded-full">
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
                                        <div className="h-full w-full flex justify-center items-center bg-white border-2 border-gray-400 rounded-full">
                                            <FontAwesomeIcon icon={faCheck} className="text-white" />
                                        </div>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4">
                            <h1 className="text-sm mb-4 font-bold text-gray-700">
                                Mail in Repair
                            </h1>
                            <p className="text-sm text-gray-600">
                                Once your device is repaired it will be shipped to the address provided below via <span className="text-primary-1">standard shipping</span> (1 business day)
                            </p>
                            <div className="flex items-center gap-4 my-4">
                                <div className="flex items-center gap-1">
                                <input type="radio" name="address" className="accent-primary-1 w-4 h-4" />
                                <label className="text-sm" htmlFor="">Same as policy</label>
                                </div>
                                <div className="flex items-center gap-1">
                                <input type="radio" name="address" className="accent-primary-1 w-4 h-4" />
                                <label className="text-sm" htmlFor="">New Address</label>
                                </div>
                            </div>
                            <div className="mb-6">
                                <p className="text-sm font-bold text-gray-700">
                                Steve Smith
                                </p>
                                <p className="text-sm font-medium text-gray-500">
                                123 Main Street
                                </p>
                                <p className="text-sm font-medium text-gray-500">
                                Adanta, Georga 30031
                                </p>
                                <p className="text-sm font-medium text-gray-500">
                                United States
                                </p>
                                <p className="text-sm font-medium text-gray-500">
                                steve.smith@gmail.com
                                </p>
                            </div>
                            <div className="flex justify-between w-full mb-2">
                                <Link to={"/step2"} className="py-1.5 px-5 border-2 border-primary-1 text-sm font-bold text-primary-1 bg-blue-50 rounded" type="button" >Back</Link>
                                <Link to={"/step4"} className="py-1.5 px-5 border-2 border-primary-1 text-sm font-bold text-white bg-primary-1 rounded" type="button" >Next</Link>
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
