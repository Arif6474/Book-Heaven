/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { toast } from "react-toastify";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSingleBookQuery, useUpdateBookMutation } from "../../../redux/features/books/bookAPIs";
function EditBook() {
  const { id } = useParams();

  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().slice(0, 10);
  const { data: book } = useSingleBookQuery(id);
  const [updatedData, setUpdatedData] = useState({
    title: book.title,
    author: book.author,
    genre: book.genre,
    publication_date: formattedDate,
    img: book.img,
    reviews: book.review,
  });

  const [updateBook] = useUpdateBookMutation();

  const handleUpdateBook = () => {
    updateBook({ id, updatedData })
      .unwrap()
      .then(() => {
        toast.success("Book updated successfully", {
          theme: "dark",
          });
        setUpdatedData({
            title: "",
            author: "",
            img: "",
            genre: "",
            publication_date: "",
            reviews: [],
          });
      })
      .catch((err) => {
        // Handle errors if the update fails
        toast.error("Error updating book:", err);
      });
  };
  return (
    <div className="max-w-[500px] mx-auto mt-10 bg-slate-500 p-10 rounded-lg">
      <h1 className="text-xl text-slate-300 font-medium text-center pb-4">
        Edit Book
      </h1>

      {/* <form onSubmit={handleUpdateBook}> */}
      <>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text text-slate-300">Title</span>
          </label>
          <input
            type="text"
            placeholder="Enter book title"
            className="input input-bordered w-full "
            name="title"
            value={updatedData.title}
            onChange={(e) =>
              setUpdatedData({ ...updatedData, title: e.target.value })
            }
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text text-slate-300">Author</span>
          </label>
          <input
            type="text"
            placeholder="Enter book author"
            className="input input-bordered w-full "
            name="author"
            value={updatedData.author}
            onChange={(e) =>
              setUpdatedData({ ...updatedData, author: e.target.value })
            }
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text text-slate-300">Image</span>
          </label>
          <input
            type="text"
            placeholder="Enter book image link"
            className="input input-bordered w-full "
            name="img"
            value={updatedData.img}
            onChange={(e) =>
              setUpdatedData({ ...updatedData, img: e.target.value })
            }
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text text-slate-300">Genre</span>
          </label>
          <input
            type="text"
            name="genre"
            placeholder="Enter book genre"
            className="input input-bordered w-full "
            value={updatedData.genre}
            onChange={(e) =>
              setUpdatedData({ ...updatedData, genre: e.target.value })
            }
          />
        </div>
        <div className="pt-8">
          <button
            onClick={handleUpdateBook}
            type="submit"
            className="btn bg-cyan-900 border-none w-full text-slate-100"
          >
            Edit Book
          </button>
        </div>
      </>
      {/* </form> */}
    </div>
  );
}

export default EditBook;
