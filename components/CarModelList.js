export default function CarModelsList({ carModels }) {
  if (carModels.length === 0) {
    return <li className="no-models-found">No models found.</li>
  }

  return (
    <ul className="car-models-list">
      {carModels.map((model) => (
        <li key={model.Model_ID} className="car-model-item">
          <span className="car-model-name">{model.Model_Name}</span>
          <span className="car-model-id">Model ID: {model.Model_ID}</span>
        </li>
      ))}
    </ul>
  )
}
