/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useState } from "react";
import { useGetBooksQuery } from "../../redux/features/books/bookAPIs";
import { setSearchTerm } from "../../redux/features/search/searchSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import SingleBook from "./SingleBook/SingleBook";
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
function AllBooks() {
  const { data: books } = useGetBooksQuery(undefined);
  const [searchQuery, setSearchQuery] = useState("");
  const searchTerm = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setSearchTerm(searchQuery));
  }, [dispatch, searchQuery]);

  const searchAndFilterBook = books?.filter(
    (item: { title: string; author: string; genre: string }) => {
      const itemValues = Object.values(item).map((value) =>
        value.toString().toLowerCase()
      );
      return itemValues.some((value) =>
        value.includes(searchTerm.toLowerCase())
      );
    }
  );

  //filter
  const [filterByGenre, setFilterByGenre] = useState("");
  const [filterByYear, setFilterByYear] = useState("");

   const handleFilterByGenre = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterByGenre(e.target.value);
  };

  const handleFilterByYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterByYear(e.target.value);
  };

  const filteredBooks = searchAndFilterBook?.filter(
    (book: { genre: string; publication_date: string | string[] }) => {
      const genreMatch =
        filterByGenre === "" ||
        book.genre.toLowerCase().includes(filterByGenre.toLowerCase());
      const yearMatch =
        filterByYear === "" || book.publication_date.includes(filterByYear);
      return genreMatch && yearMatch;
    }
  );
  return (
    <div className="p-10">
      <div className="form-control px-10 flex flex-row justify-between">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered border-accent w-24 md:w-auto"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Link to="/addNewBook">
          <button className="btn btn-success text-slate-900">
            Add New Book
          </button>
        </Link>
      </div>
      <div className=" pt-4 flex gap-4 mx-10">
        
        <select
          value={filterByGenre}
          onChange={handleFilterByGenre}
          className="select select-accent w-[200px] max-w-xs "
        >
          <option value="">Filter by Genre</option>
           {
            books?.map((book: Book) =>
              <option key={book._id} value={book.genre}>{book.genre}</option>
              )
           }
        </select>
        <select
         value={filterByYear}
         onChange={handleFilterByYear}
          className="select select-accent  w-[200px] max-w-xs"
        >
          <option value="">Filter by Publication Year</option>
           {
            books?.map((book: Book) =>
              <option key={book._id} value={book.publication_date}>{book.publication_date}</option>
              )
           }
        </select>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-20 p-10 mt-10">
        {filteredBooks?.map((book: Book) => (
          <SingleBook key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default AllBooks;
