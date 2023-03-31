import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import BookmarkedBlog from "../BookmarkedBlog/BookmarkedBlog";
import Card from "../Card/Card";

const Blog = () => {
  const [blog, setBlog] = useState([]);
  const [bookmark, setBookmark] = useState([]);
  const [readTime, setReadTime] = useState(0);

  const onBookmarkHandler = (title, id) => {
    const addedBookmark = [...bookmark, { title, id }];
    setBookmark(addedBookmark);

    const existingBookmark = bookmark.find((bookmark) => bookmark.id === id);

    if (existingBookmark) {
      toast.warn("You Have Already Bookmarked This Blog!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.success("Congratulations, You have successfully added a bookmark", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const readHandler = (time) => {
    setReadTime(readTime + time);
  };

  useEffect(() => {
    fetch("/blog.json")
      .then((response) => response.json())
      .then((data) => {
        const convertDate = data.map((item) => ({
          ...item,
          publish_date: new Date(item.publish_date),
          countDays: Math.floor(
            (new Date() - new Date(item.publish_date)) / (1000 * 60 * 60 * 24)
          ),
        }));
        setBlog(convertDate);
      });
  }, []);

  return (
    <div>
      <hr />
      <div className="flex flex-col gap-4 sm:flex-row">
        <Card
          blog={blog}
          onBookmarkHandler={onBookmarkHandler}
          readHandler={readHandler}
        ></Card>
        <BookmarkedBlog bookmark={bookmark} time={readTime}></BookmarkedBlog>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Blog;
