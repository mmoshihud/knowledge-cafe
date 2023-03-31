import "./Card.css";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = (props) => {
  const onBookmarkHandler = (title, id) => {
    props.onBookmarkHandler(title, id);
  };

  const readHandler = (time) => {
    props.readHandler(time);
  };

  return (
    <div className="card w-7/12 bg-base-100 shadow-2xl p-4 mt-4">
      {props.blog.map((blogs) => (
        <div key={blogs.id}>
          <figure className="mt-4">
            <img className="rounded-2xl" src={blogs.banner} alt="Banner" />
          </figure>
          <div className="card-body">
            <div className="flex">
              <img
                className="w-24 rounded-full mr-4"
                src={blogs.image}
                alt="User"
              />
              <div>
                <h1 className="text-xl font-bold">{blogs.name}</h1>
                <p className="text-sm">
                  {blogs.publish_date.toDateString()} ({blogs.countDays} day
                  {parseInt(blogs.countDays) > 1 ? <span>s</span> : ""} ago )
                </p>
              </div>
              <p className="text-sm text-right">
                {blogs.time} min to read{" "}
                <FontAwesomeIcon
                  className="icon"
                  icon={faBookmark}
                  onClick={() => onBookmarkHandler(blogs.title, blogs.id)}
                ></FontAwesomeIcon>
              </p>
            </div>
            <h2 className="card-title">{blogs.title}</h2>
            <p>{blogs.tags}</p>
            <p
              className="icon text-primary underline"
              onClick={() => readHandler(blogs.time)}
            >
              Mark as read
            </p>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Card;
