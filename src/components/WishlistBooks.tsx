import { Book } from "../redux/features/wishlist/wishlistSlice";
import { useAppSelector } from "../redux/hooks";
import SingleBook from "./AllBooks/SingleBook/SingleBook";

function WishlistBooks() {
  const wishlist = useAppSelector((state) => state.wishlist.books);
  return (
    <>
      <h1 className="text-center text-xl font-bold pt-10">Wishlist Books</h1>

      <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-20 p-8 ">
        {wishlist?.map((book: Book) => (
          <SingleBook key={book._id} book={book} />
        ))}
      </div>
    </>
  );
}

export default WishlistBooks;
