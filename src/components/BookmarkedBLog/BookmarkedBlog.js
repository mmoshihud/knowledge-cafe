const BookmarkedBlog = (props) => {
  return (
    <div className="card w-5/12 bg-base-100 shadow-2xl h-1/2 mt-4">
      <div className="card-body">
        <div className="card bg-neutral text-neutral-content mb-4">
          <div className="card-body">
            <h1 className="card-title text-2xl font-bold">
              Spent time on read: {props.time} min
            </h1>
          </div>
        </div>
        <h2 className="card-title mb-4 text-3xl font-bold">
          Bookmarked Blogs: {props.bookmark.length}
        </h2>
        {props.bookmark.map((item, index) => (
          <div
            className="card bg-primary-focus text-primary-content"
            key={index}
          >
            <div className="card-body">
              <div>
                <h2 className="card-title">{item.title}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookmarkedBlog;
