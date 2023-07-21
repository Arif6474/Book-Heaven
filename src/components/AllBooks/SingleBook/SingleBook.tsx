/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */

import { Link } from "react-router-dom";
interface Book {
  _id: string;
  title: string;
  img: string;
  author: string;
  genre: string;
  publication_date: string;
  reviews: any[];
}
function SingleBook({ book }: { book: Book }) {
  return (
    <div className="card w-100 bg-base-300 shadow-xl p-4">
      <Link to={`/book-detail/${book._id}`}>
        <div className="rounded mx-auto w-48">
          <img src={book.img} alt="Shoes" className="rounded" />
        </div>
        <div className="card-body">
          <h2 className="card-title">{book.title}</h2>
          <p>Author: {book.author}</p>
          <h1>Genre: {book.genre}</h1>
          <p>published: {book.publication_date}</p>
        </div>
      </Link>
    </div>
  );
}

export default SingleBook;
