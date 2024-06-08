import "./toolbar.css"

export default function Toolbar({onFilterChange, filters, active}) {
  const changefc = (filter) => {
    onFilterChange(filter)
  }
  console.log("active", active)
  return (
    <div className="toolbar">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => {
            changefc(filter)
          }}
          className={filter == active? "tb-btn active" : "tb-btn"}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}
