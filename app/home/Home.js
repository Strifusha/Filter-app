'use client'

import { useState, useEffect } from 'react'
import { Suspense } from 'react'
import VehicleTypeList from '@/components/VehicleTypeList'
import ModelYears from '@/components/ModelYears'
import NextButton from '@/components/NextButton'

export default function Page() {
  const [isDisabled, setIsDisabled] = useState(true)
  const [carInfo, setCarInfo] = useState({})

  useEffect(() => {
    const hasRequiredFields = carInfo.makeId && carInfo.year
    setIsDisabled(!hasRequiredFields)
  }, [carInfo])

  return (
    <div className="container relative">
      <h1 className="h1-custom">Find a car</h1>
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
        <div className="mt-6">
          <Suspense fallback={<p>Loading vehicle types...</p>}>
            <VehicleTypeList setCarInfo={setCarInfo} />
          </Suspense>
          <ModelYears setCarInfo={setCarInfo} />
          <NextButton isDisabled={isDisabled} carInfo={carInfo} />
        </div>
      </div>
    </div>
  )
}
