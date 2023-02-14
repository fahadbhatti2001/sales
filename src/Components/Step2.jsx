import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faLocationDot } from '@fortawesome/free-solid-svg-icons'
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

export const Step2 = () => {

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
                                    Step 2 of 4
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
                                Select how you would like your product to be serviced
                            </h1>
                            <div className="flex md:flex-row flex-col gap-4 p-4 bg-blue-50 rounded mb-6">
                                <div className="">
                                <FontAwesomeIcon icon={faLocationDot} className="text-gray-400 w-8 h-8" />
                                </div>
                                <div className="w-full flex flex-col gap-2">
                                <p className="text-xs">
                                    Service option(s) are for your prouct located at:
                                </p>
                                <p className="text-xs py-1 font-bold text-gray-600">
                                    1155 Ponce Deleon Long address name Ave. Atlanta GA, 12345
                                </p>
                                <span className="h-px w-full bg-gray-300"></span>
                                <p className="text-xs py-2">
                                    Not your product location? <a href="#" className="text-primary-1 font-medium underline">Enter a new address</a>
                                </p>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-4">
                                <button className="text-left col-span-1 flex flex-col gap-2 rounded-lg border-2 shadow focus:border-primary-1 p-4">
                                <div className="flex items-center gap-2">
                                    <img src="/images/E-reader.png" className="w-10 h-10" />
                                    <h1 className="text-sm font-bold">
                                    Mail In Repair
                                    </h1>
                                </div>
                                <p className="text-xs font-medium w-full text-gray-500 h-16">
                                    If your claim is approved we will send you a shipping label so you can send us your defective device for repair
                                </p>
                                <div className="flex justify-between w-full">
                                    <p className="text-xs font-bold text-gray-600">Deductible</p>
                                    <p className="text-xs font-bold text-gray-600">$89.00</p>
                                </div>
                                </button>
                                <button className="text-left col-span-1 flex flex-col gap-2 rounded-lg border-2 shadow focus:border-primary-1 p-4">
                                <div className="flex items-center gap-2">
                                    <img src="/images/e-readers.png" className="w-10 h-10" />
                                    <h1 className="text-sm font-bold">
                                    In Store Repair
                                    </h1>
                                </div>
                                <p className="text-xs font-medium w-full text-gray-500 h-16">
                                    You will be given a choice of which repair facility to take your device
                                </p>
                                <div className="flex justify-between w-full">
                                    <p className="text-xs font-bold text-gray-600">Deductible</p>
                                    <p className="text-xs font-bold text-gray-600">$89.00</p>
                                </div>
                                </button>
                                <button className="text-left col-span-1 flex flex-col gap-2 rounded-lg border-2 shadow focus:border-primary-1 p-4">
                                <div className="flex items-center gap-2">
                                    <img src="/images/Smart-speakers.png" className="w-10 h-10" />
                                    <h1 className="text-sm font-bold">
                                    Refurbishment
                                    </h1>
                                </div>
                                <p className="text-xs font-medium w-full text-gray-500 h-16">
                                    We'll reimburse you quickly and conveniently
                                </p>
                                </button>
                            </div>
                            <div className="flex justify-between w-full mb-2">
                                <Link to={"/step1"} className="py-1.5 px-5 border-2 border-primary-1 text-sm font-bold text-primary-1 bg-blue-50 rounded" type="button" >Back</Link>
                                <Link to={"/step3"} className="py-1.5 px-5 border-2 border-primary-1 text-sm font-bold text-white bg-primary-1 rounded" type="button" >Next</Link>
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
