import { useRouter } from 'next/navigation'

export default function NextButton({ isDisabled, carInfo }) {
  const router = useRouter()
  const { makeId, year } = carInfo

  const handleClick = () => {
    if (!isDisabled) {
      router.push(`/result/${makeId}/${year}`)
    }
  }

  return (
    <div className="flex justify-end p-4">
      <button
        role="button"
        className="btn"
        disabled={isDisabled}
        onClick={handleClick}
      >
        Next
      </button>
    </div>
  )
}
