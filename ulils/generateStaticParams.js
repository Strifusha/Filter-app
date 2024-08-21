import { vehicleTypesResource } from './fetchVehicleTypes'
import { years } from './years'

export async function fetchCarModels(makeId, year) {
  const baseUrl = process.env.NEXT_PUBLIC_CAR_MODELS_API_URL
  const url = `${baseUrl}/makeId/${makeId}/modelyear/${year}?format=json`

  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`HTTP Error ${response.status}: ${response.statusText}`)
    }

    const data = await response.json()
    const makeName = data.Results[0]?.Make_Name || 'Unknown Make'

    return { makeName, models: data.Results }
  } catch (error) {
    console.error('Failed to fetch car models:', error)
    return { makeName: 'Unknown Make', models: [] }
  }
}

export function generateStaticParams() {
  const vehicleTypes = vehicleTypesResource.read()

  return vehicleTypes.flatMap((vehicleType) =>
    years.map((year) => ({
      makeId: vehicleType.MakeId.toString(),
      makeName: vehicleType.MakeName.toString(),
      year: year.toString(),
    }))
  )
}
