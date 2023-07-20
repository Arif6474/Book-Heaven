/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useGetBooksQuery } from "../../redux/features/books/bookAPIs";
import { setSearchTerm } from "../../redux/features/search/searchSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { IBook } from "../../types/globalTypes";
import SingleBook from "./SingleBook/SingleBook";

function AllBooks() {
  const { data: books } = useGetBooksQuery(undefined);
  const searchTerm = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  const handleSearchChange = (e: { target: { value: any } }) => {
    const searchTerm = e.target.value;
    dispatch(setSearchTerm(searchTerm));
  };

  const filteredData = books?.filter(
    (item: { title: string; author: string; genre: string }) => {
      const itemValues = Object.values(item).map((value) =>
        value.toString().toLowerCase()
      );

      return itemValues.some((value) =>
        value.includes(searchTerm.toLowerCase())
      );
    }
  );

  return (
    <div className="p-10">
      <div className="form-control w-48 flex flex-row">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto"
          onChange={handleSearchChange}
        />
        {/* <button className="btn btn-accent" onClick={handleSearch}>Search</button> */}
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-20 p-10 mt-10">
        {filteredData?.map((book: IBook) => (
          <SingleBook key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default AllBooks;
