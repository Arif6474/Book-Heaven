/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useDeleteBookMutation,
  useGetReviewsQuery,
  usePostReviewMutation,
  useSingleBookQuery,
} from "../../../redux/features/books/bookAPIs";
import { useState } from "react";
import { toast } from "react-toastify";

function BookDetails() {
  const [deleteBook] = useDeleteBookMutation();
  const { id } = useParams();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState<string>("");
  const { data: book } = useSingleBookQuery(id);

  const [postReview] = usePostReviewMutation();
  
  const { data } = useGetReviewsQuery(id);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(inputValue);
    const options = {
      id: id,
      data: { review: inputValue },
    };

    postReview(options);

    setInputValue("");
  };

  const handleDeleteBook = () => {
    const confirmed = window.confirm("Are you sure  you want to delete book");
    if (confirmed) {
      deleteBook(id)
        .unwrap()
        .then(() => {
          toast.success("Book deleted successfully");
          navigate("/");
        })
        .catch((err) => {
          toast.error("Error deleting book:", err);
        });
    }
  };
  return (
    <div className="pt-10">
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300 pb-8 px-32">
        <div className="w-[50%]">
          <img src={book?.img} alt="" />
        </div>
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold">{book?.title}</h1>
          <p>
            by -{" "}
            <span className="text-gray-300 font-bold px-2">{book?.author}</span>
          </p>
          <p>
            Category:{" "}
            <span className="text-gray-300 font-bold px-2">{book?.genre}</span>
          </p>
          <p>
            Publication Date:{" "}
            <span className="font-bold px-2">{book?.publication_date}</span>
          </p>
          <div className="flex gap-4 ">
            <Link to={`/editBook/${book?._id}`}>
              <button className="btn bg-cyan-900 btn-sm">Edit Book</button>
            </Link>
            <button
              className="btn bg-red-900 btn-sm"
              onClick={handleDeleteBook}
            >
              Delete Book
            </button>
          </div>
        </div>
      </div>

      <div className="flex max-w-12xl mx-auto items-center border-gray-300 pb-8 px-32 pt-4">
        <form onSubmit={handleSubmit} className="w-[75%] flex items-center">
          <textarea
            className="textarea textarea-primary w-[75%]"
            placeholder="Review"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          ></textarea>
          <button
            type="submit"
            className="btn bg-primary p-4 rounded-lg ml-2 cursor-pointer"
          >
            submit
          </button>
        </form>
      </div>
      <div className="bg-gray-700 w-[600px] ml-32 rounded text-start">
        {data?.reviews?.map((review: string) => (
          <div className="flex max-w-12xl mx-auto items-center border-b-slate-950 pb-4  pl-4 pt-1">
            <p>{review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookDetails;
