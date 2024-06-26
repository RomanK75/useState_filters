import "./toolbar.css"

export default function Toolbar({onFilterChange, filters, active}) {
  const changefc = (filter) => {
    onFilterChange(filter)
  }
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
