/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useParams } from "react-router-dom";
import { useSingleBookQuery } from "../../../redux/features/books/bookAPIs";

function BookDetails() {
  const { id } = useParams();
  const { data: book } = useSingleBookQuery(id);
  console.log("🚀 ~ file: BookDetails.tsx:7 ~ BookDetails ~ book:", book);
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
            <span className="text-gray-300 font-bold px-2">
              {book?.genre}
            </span>
          </p>
          <p>
            Publication Date:{" "}
            <span className="font-bold px-2">{book?.publication_date}</span>
          </p>
        </div>
      </div>

      <div className="flex max-w-12xl mx-auto items-center border-gray-300 pb-8 px-32 pt-4">
        {/* {data?.reviews?.map((review: string) => (
          <>
            <div className="w-10 rounded-full mr-4">
              <img src={data?.profile} />
            </div>
            <div>
              <p>{review}</p>
            </div>
          </>
        ))} */}
      </div>
    </div>
  );
}

export default BookDetails;
