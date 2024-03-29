import { useDispatch, useSelector } from "react-redux";

import { setTitleFilter, setAuthorFilter, setOnlyFavorite, selectOnlyFavorite, selectTitleFilter, selectAuthorFilter, resetFilters } from "../../redux/slices/filterSlice";

import "./styles.css";

const Filter = () => {

  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  const onlyFavorite = useSelector(selectOnlyFavorite);

  const hadnleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value))
  }

  const hadnleAuthorFilterChange = (e) => {
    dispatch(setAuthorFilter(e.target.value));
  }

  const handleResetFilters = () => {
    dispatch(resetFilters())
  }

  const handleOnlyFavorite = () => {
    dispatch(setOnlyFavorite())
  }

  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input value={titleFilter} type="text" placeholder="Filter by title..." onChange={hadnleTitleFilterChange} />
        </div>
        <div className="filter-group">
          <input value={authorFilter} type="text" placeholder="Filter by author..." onChange={hadnleAuthorFilterChange} />
        </div>
        <div className="filter-group">
          <input id="favorite" type="checkbox" checked={onlyFavorite} onChange={handleOnlyFavorite} />
          <label htmlFor="favorite">Only favorite</label>
        </div>
        <button type="button" onClick={handleResetFilters}>Reset</button>
      </div>
    </div>
  );
};

export default Filter;
