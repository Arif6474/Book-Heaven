/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useState } from "react";
import { useGetBooksQuery } from "../../redux/features/books/bookAPIs";
import { setSearchTerm } from "../../redux/features/search/searchSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { IBook } from "../../types/globalTypes";
import SingleBook from "./SingleBook/SingleBook";

function AllBooks() {
  const { data: books } = useGetBooksQuery(undefined);
  const [searchQuery, setSearchQuery] = useState("");
  const searchTerm = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setSearchTerm(searchQuery));
  }, [dispatch, searchQuery]);

  
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
      <div className="form-control px-10 flex flex-row justify-between">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div>
          <button className="btn btn-success text-slate-900">Add New Book</button>
        </div>
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
