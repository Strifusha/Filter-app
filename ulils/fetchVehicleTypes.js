function createResource(promise) {
  let status = 'pending'
  let result

  const suspender = promise
    .then((data) => {
      status = 'success'
      result = data
    })
    .catch((error) => {
      status = 'error'
      result = error
    })

  return {
    read() {
      if (status === 'pending') {
        throw suspender
      } else if (status === 'error') {
        throw result
      } else if (status === 'success') {
        return result
      }
    },
  }
}

function fetchVehicleTypes() {
  const apiUrl = process.env.NEXT_PUBLIC_VEHICLE_TYPES_API_URL

  const promise = fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return response.json()
    })
    .then((data) => data.Results)

  return createResource(promise)
}

export const vehicleTypesResource = fetchVehicleTypes()
