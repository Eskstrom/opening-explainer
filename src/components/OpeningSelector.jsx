function OpeningSelector({ openings, selectedId, onSelect }) {
  return (
    <label className="opening-selector">
      <span>Opening</span>
      <select
        value={selectedId}
        onChange={(e) => onSelect(e.target.value)}
      >
        {openings.map((opening) => (
          <option key={opening.id} value={opening.id}>
            {opening.name} ({opening.eco})
          </option>
        ))}
      </select>
    </label>
  )
}

export default OpeningSelector
