import { years } from '@/ulils/years'

export default function ModelYears({ setCarInfo }) {
  const handleChangeYear = (e) => {
    const { value } = e.target
    setCarInfo((prevState) => ({ ...prevState, year: value }))
  }

  return (
    <>
      <label htmlFor="modelYears" className="label-custom">
        Select a Year:
      </label>
      <select
        onChange={handleChangeYear}
        id="modelYears"
        className="select-custom"
        defaultValue=""
      >
        <option value="" disabled hidden>
          Enter a Year
        </option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </>
  )
}
