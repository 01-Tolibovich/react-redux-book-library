import { useSelector, useDispatch } from "react-redux";
import { deleteBook, toggleFavorite } from "../../redux/books/actionCreators";
import { selectAuthorFilter, selectTitleFilter, selectOnlyFavorite } from "../../redux/slices/filterSlice";

import { BsBookmarkStar, BsBookmarkStarFill  } from "react-icons/bs"

import "./styles.css";

const BookList = () => {
  const books = useSelector(state => state.books)
  const filterByTitile = useSelector(selectTitleFilter)
  const filterByAuthor = useSelector(selectAuthorFilter)
  const filterOnlyFavorite = useSelector(selectOnlyFavorite)
  const dispatch = useDispatch();

  const deleteHandle = (id) => {
    dispatch(deleteBook(id));
  };

  const toggleFavoriteHandle = (id) => {
    dispatch(toggleFavorite(id))
  }

  const filteredBooks = books.filter((book) => {
    const matchesTitle = book.title
      .toLowerCase()
      .includes(filterByTitile.toLowerCase());

    const matchesAuthor = book.author
      .toLowerCase()
      .includes(filterByAuthor.toLowerCase());

    const matchesFavorite = filterOnlyFavorite ? book.isFavorite : true;

    return matchesTitle && matchesAuthor && matchesFavorite;
  })

  return (
    <div className="app-block book-list">
      <h2>Book list</h2>
      {filteredBooks.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {filteredBooks.map((book, i) => (
            <li key={book.id}>
              <div className="book-info">
                {++i}) {book.title} by <strong>{book.author}</strong>
              </div>
              <div className="book-actions">
                <span role="button" onClick={() => toggleFavoriteHandle(book.id)}>
                {book.isFavorite ? (
                  <BsBookmarkStarFill className="star-icon" />
                ) : (
                  <BsBookmarkStar className="star-icon" />
                )}
                </span>
                <button onClick={() => deleteHandle(book.id)} className="book-actions">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
