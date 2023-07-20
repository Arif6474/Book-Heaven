/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { Link } from "react-router-dom";

function SingleBook({ book  }) {
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
          {/* <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div> */}
        </div>
      </Link>
    </div>
  );
}

export default SingleBook;
