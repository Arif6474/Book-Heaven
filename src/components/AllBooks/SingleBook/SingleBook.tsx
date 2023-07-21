/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { RiHeart3Line,RiDeleteBinLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { addToWishlist, removeFromWishlist } from "../../../redux/features/wishlist/wishlistSlice";
import { toast } from "react-toastify";
interface Book {
  _id: string;
  title: string;
  img: string;
  author: string;
  genre: string;
  publication_date: string;
  reviews: any[];
}
function SingleBook({ book }: { book: Book }) {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const wishlist = useAppSelector((state) => state.wishlist.books);
  const checkWishlistBook = wishlist?.find(b =>b._id === book._id)
  // useEffect(() => {
  //  );
  // }, [dispatch , book]);
  return (
    <div className="card w-100 bg-base-300 shadow-xl p-4 relative">
      {!pathname.includes("/wishlist") && (
        <div
          onClick={() =>{
            dispatch(addToWishlist(book))
            if (!checkWishlistBook) {
              toast.success("Added to wishlist")
            }else{
              toast.error("Already Added to wishlist")
            }
          }}
          className="text-red-600 cursor-pointer text-2xl absolute top-4 right-4"
        >
          <RiHeart3Line />
        </div>
      )}
      {pathname.includes("/wishlist") && (
        <div
          onClick={() => dispatch(removeFromWishlist(book._id))}
          className="text-red-600 cursor-pointer text-2xl absolute top-4 right-4"
        >
          <RiDeleteBinLine />
        </div>
      )}
      <div className="rounded mx-auto w-48">
        <img src={book.img} alt="Shoes" className="rounded" />
      </div>
      <div className="card-body">
        <h2 className="card-title">{book.title}</h2>
        <p>Author: {book.author}</p>
        <h1>Genre: {book.genre}</h1>
        <p>published: {book.publication_date}</p>
      </div>
      <Link className=" mx-auto" to={`/book-detail/${book._id}`}>
        <button className="btn btn-sm bg-emerald-700">Details</button>
      </Link>
    </div>
  );
}

export default SingleBook;
