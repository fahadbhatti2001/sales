import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Header, Footer } from '@/Components'
const headerLinks = [
  {
    name: "Home", path: "/"
  },
  {
    name: "Account", path: "/"
  },
  {
    name: "My Device", path: "/"
  },
  {
    name: "Tech Services", path: "/"
  },
  {
    name: "File a Claim", path: "/step1", cstStyle: "text-primary-1"
  },
]

export const Home = () => {
  return (
    <>
      <Header headerData={headerLinks} />
      <div className="bg-primary-2 py-6 xl:px-32 lg:px-16 md:px-8 sm:px-6 px-4">
          <h1 className="text-2xl font-medium text-neutral-900">
            File a Claim
          </h1>
      </div>
      <div className="flex justify-center xl:px-80 lg:px-40 md:px-20 sm:px-12 px-8">
        <div className="container py-8">
          <div className="flex md:flex-row flex-col justify-between gap-6">
            <h1 className="text-2xl font-medium">
              Claim Pre-Qualification
            </h1>
            <div className="flex items-center gap-2 text-primary-1">
              <FontAwesomeIcon icon={faBars} className="text-xl" />
              <a href="#" className="text-lg font-medium">
                Claims History & Status
              </a>
            </div>
          </div>
          <hr className="my-8"/>
          <h1 className="text-lg font-medium text-gray-500 mb-8">
            To get started with the claim process, please answer the following questions.
          </h1>
          <div className="">
            <p className="text-lg font-medium">
              Do you still have possession of the device?
            </p>
            <div className="flex items-center gap-3 my-6">
              <input type="radio" name="possession" className="accent-primary-1 w-5 h-5" />
              <label className="text-lg" htmlFor="">Yes, I have the device</label>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <input type="radio" name="possession" className="accent-primary-1 w-5 h-5" />
              <label className="text-lg" htmlFor="">No, I do not have the device</label>
            </div>
            <hr className="my-8"/>
          </div>
          <div className="">
            <p className="text-lg font-medium">
              Is your device damaged in some way?
            </p>
            <div className="flex items-center gap-3 my-6">
              <input type="radio" name="damaged" className="accent-primary-1 w-5 h-5" />
              <label className="text-lg" htmlFor="">Yes, I have the device</label>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <input type="radio" name="damaged" className="accent-primary-1 w-5 h-5" />
              <label className="text-lg" htmlFor="">No, I do not have the device</label>
            </div>
            <hr className="my-8"/>
          </div>
          <div className="">
            <p className="text-lg font-medium mb-8">
              Confirm the device Category, Brand and Model or select this information below.
            </p>
            <div className="flex flex-col gap-3 mb-6">
              <label htmlFor="" className="text-sm font-medium text-gray-500">Device Type</label>
              <select className="md:w-1/2 w-full p-2 rounded border-2 border-gray-400 text-gray-500 font-medium" id="">
                <option value="" hidden>Select Device Type</option>
                <option value="laptop">Laptop</option>
                <option value="mobile">Mobile</option>
                <option value="tablet">Tablet</option>
              </select>
            </div>
            <div className="flex flex-col gap-3 mb-6">
              <label htmlFor="brand" className="text-sm font-medium text-gray-500">Brand</label>
              <input className="md:w-1/2 w-full p-2 rounded border-2 border-gray-400 text-gray-500 font-medium" id="brand" placeholder="Enter Brand Name" type="text" />
            </div>
            <div className="flex flex-col gap-3 mb-6">
              <label htmlFor="model" className="text-sm font-medium text-gray-500">Model</label>
              <input className="md:w-1/2 w-full p-2 rounded border-2 border-gray-400 text-gray-500 font-medium" id="model" placeholder="Enter Model Name" type="text" />
            </div>
            <div className="flex flex-col gap-3 mb-6">
              <label htmlFor="nickname" className="text-sm font-medium text-gray-500">Device Nickname</label>
              <input className="md:w-1/2 w-full p-2 rounded border-2 border-gray-400 text-gray-500 font-medium" id="nickname" placeholder="Enter Device Nick Name" type="text" />
            </div>
            <div className="flex flex-col gap-3 mb-6">
              <label htmlFor="serial" className="text-sm font-medium text-gray-500">Serial Number [Optional]</label>
              <input className="md:w-1/2 w-full p-2 rounded border-2 border-gray-400 text-gray-500 font-medium" id="serial" placeholder="Enter Serial Number" type="number" />
            </div>
            <div className="flex flex-col gap-3 mb-6">
              <label htmlFor="price" className="text-sm font-medium text-gray-500">Purchase Price</label>
              <input className="md:w-1/2 w-full p-2 rounded border-2 border-gray-400 text-gray-500 font-medium" id="price" placeholder="Enter Purchase Price" type="number" />
            </div>
            <div className="flex flex-col gap-3 mb-6">
              <label htmlFor="date" className="text-sm font-medium text-gray-500">Purchase Date</label>
              <input className="md:w-1/2 w-full p-2 rounded border-2 border-gray-400 text-gray-500 font-medium" id="date" placeholder="Enter Purchase Date" type="date" />
            </div>
          </div>
          <h1 className="text-lg font-medium text-gray-500 mb-8">
            Upon completion you'll be taken to our Assurant claims site.
          </h1>
          <div className="w-full flex justify-center">
            <button className="md:w-1/3 w-2/3 py-2 text-white font-medium bg-primary-1 rounded-full">
              Start a Claim
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
