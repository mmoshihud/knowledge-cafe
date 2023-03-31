const BookmarkedBlog = (props) => {
  return (
    <div className="card w-5/12 bg-base-100 shadow-2xl h-1/2 mt-4">
      <div className="card-body">
        <div className="card bg-neutral text-neutral-content mb-4">
          <div className="card-body">
            <h1 className="card-title text-2xl text-bold">
              Spent time on read: {props.time} min
            </h1>
          </div>
        </div>
        <h2 className="card-title mb-4 text-bold">
          Bookmarked Blogs: {props.bookmark.length}
        </h2>
        {props.bookmark.map((item) => (
          <div className="card bg-primary-focus text-primary-content">
            <div className="card-body">
              <div key={item}>
                <h2 className="card-title">{item}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookmarkedBlog;
