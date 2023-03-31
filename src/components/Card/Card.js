import blogger from "../../images/blogger-1.jpg";
const Card = (props) => {
  return (
    <div className="card w-7/12 bg-base-100 shadow-2xl p-4 mt-4">
      {props.blog.map((blogs) => (
        <>
          <figure className="mt-4">
            <img className="rounded-2xl" src={blogs.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <div className="flex">
              <img
                className="w-24 rounded-full mr-4"
                src={blogger}
                alt="blogger"
              />
              <div>
                <h1 className="text-xl font-bold">{blogs.name}</h1>
                <p className="text-sm">
                  {blogs.date.toDateString()} ({blogs.countDays} day
                  {parseInt(blogs.countDays) > 1 ? <span>s</span> : ""} ago )
                </p>
              </div>
              <p className="text-sm text-right">{blogs.time} min to read</p>
            </div>
            <h2 className="card-title">{blogs.title}</h2>
            <p>{blogs.tags}</p>
            <p className="text-primary underline">Mark as read</p>
          </div>
          <hr />
        </>
      ))}
    </div>
  );
};

export default Card;
