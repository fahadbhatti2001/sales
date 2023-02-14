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

export const Step1 = () => {

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
                                    Step 1 of 4
                                </p>
                                <p className="text-xs font-medium text-gray-500">
                                    Next: Service Options
                                </p>
                            </div>
                            <div className="flex justify-between gap-0 pb-4">
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
                                Please tell us what happened
                            </h1>
                            <div className="flex flex-col gap-1 mb-4">
                                <label htmlFor="indidentDate" className="text-xs font-bold text-gray-400">Date of indident</label>
                                <input className="md:w-2/3 w-full px-2 p-1.5 rounded border-2 border-gray-400 text-gray-500 font-medium" id="indidentDate" type="date" />
                            </div>
                            <div className="flex flex-col gap-1 mb-4">
                                <label htmlFor="indidentDate" className="text-xs font-bold text-gray-400">Describe the issue or reason for your request</label>
                                <textarea className="md:w-2/3 w-full h-24 resize-none overflow-auto px-2 p-1.5 rounded border-2 border-gray-400 text-gray-500 font-medium" id="indidentDate" type="date" />
                            </div>
                            <div className="flex flex-col gap-1 mb-4">
                                <label className="text-xs font-bold text-gray-400">Select the reason for your claim/request</label>
                                <select className="md:w-2/3 w-full px-2 p-1.5 rounded border-2 border-gray-400 text-gray-500 font-medium" id="">
                                <option value="" hidden>Select Reason</option>
                                <option value="reason1">Reason 1</option>
                                <option value="reason2">Reason 2</option>
                                <option value="reason3">Reason 3</option>
                                </select>
                            </div>
                            <div className="flex items-center gap-2 my-6">
                                <input type="checkbox" className="w-4 h-4 accent-primary-1" id="" />
                                <label className="text-xs font-medium text-gray-500">I agree to the <span className="text-primary-1">Terms of Use</span> and acknowledge that I have reviewed the Fraud Notice</label>
                            </div>
                            <div className="flex justify-between w-full mb-2">
                                <Link to={"/"} className="py-1.5 px-5 border-2 border-primary-1 text-sm font-bold text-primary-1 bg-blue-50 rounded" type="button" >Back</Link>
                                <Link to={"/step2"} className="py-1.5 px-5 border-2 border-primary-1 text-sm font-bold text-white bg-primary-1 rounded" type="button" >Next</Link>
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