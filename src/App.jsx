import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Home, Step1, Step2, Step3, Step4, Complete } from "@/Components"
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/step1" element={<Step1/>} />
        <Route path="/step2" element={<Step2/>} />
        <Route path="/step3" element={<Step3/>} />
        <Route path="/step4" element={<Step4/>} />
        <Route path="/success" element={<Complete/>} />
      </Routes>
    </>
  )
}
