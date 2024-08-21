export default function Loader() {
  return (
    <div className="loader-overlay">
      <div className="flex items-center">
        <div className="loader-spinner"></div>
        <p className="loader-text">Loading...</p>
      </div>
    </div>
  )
}
