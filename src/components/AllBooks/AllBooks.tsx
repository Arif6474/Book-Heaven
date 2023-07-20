/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useGetBooksQuery } from "../../redux/features/books/bookAPIs";
import { IBook } from "../../types/globalTypes";
import SingleBook from "./SingleBook/SingleBook";

function AllBooks() {
  const { data: books } = useGetBooksQuery(undefined);
  return (
    <div className="p-10">
      <div className="form-control w-48">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto"
        />
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-20 p-10 mt-10">
        {books?.map((book: IBook) => (
          <SingleBook key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default AllBooks;
