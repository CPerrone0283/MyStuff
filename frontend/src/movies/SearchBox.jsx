function SearchBox({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search...."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

export default SearchBox