import './Search.scss'

export const Search = () => {
  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        placeholder="Search a Product..."
      />
      <button className="search__button">Search</button>
    </div>
  )
}
