/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useGetBooksQuery } from "../../redux/features/books/bookAPIs";
import { IBook } from "../../types/globalTypes";
import SingleBook from "../AllBooks/SingleBook/SingleBook";


function Books() {
    const { data: books } = useGetBooksQuery(undefined); 
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-20 p-10 mt-10">
        {
            books?.map((book: IBook) => <SingleBook  key={book._id} book={book}/>)
        }
    </div>
  )
}

export default Books