'use client'

import { fetchCarModels } from '@/ulils/generateStaticParams'
import Loader from '@/components/Loader'
import { useEffect, useState, useCallback } from 'react'
import CarModelsList from '@/components/CarModelList'

export default function Page({ params }) {
  const { makeId, year } = params
  const [carModels, setCarModels] = useState([])
  const [makeName, setMakeName] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchCarModelsData = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      const { makeName, models } = await fetchCarModels(makeId, year)
      setMakeName(makeName)
      setCarModels(models)
    } catch (error) {
      setError('Failed to fetch car models.')
    } finally {
      setLoading(false)
    }
  }, [makeId, year])

  useEffect(() => {
    fetchCarModelsData()
  }, [fetchCarModelsData])

  if (loading)
    return (
      <Loader className="loader-overlay" spinnerClassName="loader-spinner" />
    )
  if (error) return <div className="error-message">{error}</div>

  return (
    <div className="container">
      <h1 className="heading">
        Car Models for {makeName}, Year: {year}
      </h1>
      <div className="car-models-container">
        <CarModelsList carModels={carModels} />
      </div>
    </div>
  )
}
