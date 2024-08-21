import { useMemo } from 'react'
import { vehicleTypesResource } from '@/ulils/fetchVehicleTypes'

export default function VehicleTypeList({ setCarInfo }) {
  const vehicleTypes = vehicleTypesResource.read()

  const findVehicleId = useMemo(() => {
    return vehicleTypes.reduce((acc, type) => {
      acc[type.MakeName] = type.MakeId
      return acc
    }, {})
  }, [vehicleTypes])

  const handleChangeVehicle = (e) => {
    const { value } = e.target
    const vehicleTypeId = findVehicleId[value]
    setCarInfo((prevState) => ({ ...prevState, makeId: vehicleTypeId }))
  }

  return (
    <>
      <label htmlFor="vehicleType" className="label-custom">
        Select Vehicle Type:
      </label>

      <select
        onChange={handleChangeVehicle}
        id="vehicleType"
        className="w-full select-custom"
        defaultValue=""
      >
        <option value="" disabled hidden>
          Enter a Vehicle Type
        </option>
        {vehicleTypes.map((type) => (
          <option key={type.MakeId} value={type.MakeName}>
            {type.MakeName}
          </option>
        ))}
      </select>
    </>
  )
}
