import React from 'react'

export const ShortDetail = () => {
  return (
    <div className="md:col-span-4 col-span-12 md:order-2 order-1">
        <div className="p-4 bg-white rounded shadow">
            <div className="flex items-center gap-2 px-2 mb-2">
            <img src="/images/shopping.png" className="w-14 h-14" />
            <div className="">
                <h1 className="font-bold">Diane's Macbook</h1>
                <h1 className="text-gray-600 font-medium">MacBook Pro</h1>
            </div>
            </div>
            <div className="w-full">
            <div className="flex justify-between items-center py-3">
                <p className="text-xs font-medium text-gray-500">Policy Number</p>
                <p className="text-xs font-bold text-gray-600">0973-041-0588-100214</p>
            </div>
            <hr /> 
            </div>
            <div className="w-full">
            <div className="flex justify-between items-center py-3">
                <p className="text-xs font-medium text-gray-500">Serial Number</p>
                <p className="text-xs font-bold text-gray-600">983837210377777365</p>
            </div>
            <hr /> 
            </div>
            <div className="w-full">
            <div className="flex justify-between items-center py-3">
                <p className="text-xs font-medium text-gray-500">Policy Start Date</p>
                <p className="text-xs font-bold text-gray-600">08/03/2019</p>
            </div>
            <hr /> 
            </div>
            <div className="w-full mb-2">
            <div className="flex justify-between items-center py-3">
                <p className="text-xs font-medium text-gray-500">Policy End Date</p>
                <p className="text-xs font-bold text-gray-600">08/03/2023</p>
            </div>
            <hr /> 
            </div>
        </div>
    </div>
  )
}
