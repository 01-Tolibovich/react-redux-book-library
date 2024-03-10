import { useSelector, useDispatch } from "react-redux";
import { deleteBook } from "../../redux/books/actionCreators";

import "./styles.css";

const BookList = () => {
  const books = useSelector(state => state.books)
  const dispatch = useDispatch();

  const deleteHandle = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <div className="app-block book-list">
      <h2>Book list</h2>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {books.map((book, i) => (
            <li key={book.id}>
              <div className="book-info">
                {++i}) {book.title} by <strong>{book.author}</strong>
              </div>
              <button onClick={() => deleteHandle(book.id)} className="book-actions">Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
