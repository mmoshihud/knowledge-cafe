import "./Card.css";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import blogger from "../../images/blogger-1.jpg";

const Card = (props) => {
  const onBookmarkHandler = (val) => {
    props.onBookmarkHandler(val);
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
                src={blogger}
                alt="User"
              />
              <div>
                <h1 className="text-xl font-bold">{blogs.name}</h1>
                <p className="text-sm">
                  {blogs.date.toDateString()} ({blogs.countDays} day
                  {parseInt(blogs.countDays) > 1 ? <span>s</span> : ""} ago )
                </p>
              </div>
              <p className="text-sm text-right">
                {blogs.time} min to read{" "}
                <FontAwesomeIcon
                  className="icon"
                  icon={faBookmark}
                  onClick={() => onBookmarkHandler(blogs.title)}
                ></FontAwesomeIcon>
              </p>
            </div>
            <h2 className="card-title">{blogs.title}</h2>
            <p>{blogs.tags}</p>
            <p className="icon text-primary underline">Mark as read</p>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Card;
