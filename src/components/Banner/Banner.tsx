import './Banner.css'
function Banner() {
  return (
    <div className="hero min-h-screen banner ">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-slate-300">Book Heaven</h1>
          <p className="py-6 text-slate-300 font-medium">
            A book catalog is a comprehensive list or database of books,
            typically organized in a systematic manner.
          </p>
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
  );
}

export default Banner;
