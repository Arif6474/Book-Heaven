/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useGetBooksQuery } from "../../redux/features/books/bookAPIs";
import SingleBook from "../AllBooks/SingleBook/SingleBook";
interface Book {
  _id: string;
  title: string;
  img: string;
  author: string;
  genre: string;
  publication_date: string;
  reviews: any[];
}
function Books() {
  const { data: books } = useGetBooksQuery(undefined);
  // console.log("🚀 ~ file: Books.tsx:10 ~ Books ~ books:", books)
  const reversedBooksArr =books?.length && Array.from(books).reverse();
  return (
    <>
      <h1 className="text-center text-xl font-bold pt-10">Latest Books</h1>

      <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-20 p-8 ">
        {reversedBooksArr?.slice(0,10)?.map((book: Book) => (
          <SingleBook key={book._id} book={book} />
        ))}
      </div>
    </>
  );
}

export default Books;
