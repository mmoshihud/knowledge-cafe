import { useEffect, useState } from "react";
import BookmarkedBlog from "../BookmarkedBlog/BookmarkedBlog";
import Card from "../Card/Card";

const Blog = () => {
  const [blog, setBlog] = useState([]);
  const [bookmark, setBookmark] = useState([]);
  const [readTime, setReadTime] = useState(0);

  const onBookmarkHandler = (title) => {
    const addedBookmark = [...bookmark, title];
    setBookmark(addedBookmark);
    console.log(bookmark);
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
          date: new Date(item.date),
          countDays: Math.floor(
            (new Date() - new Date(item.date)) / (1000 * 60 * 60 * 24)
          ),
        }));
        setBlog(convertDate);
      });
  }, []);

  return (
    <div>
      <hr />
      <div className="flex gap-4">
        <Card
          blog={blog}
          onBookmarkHandler={onBookmarkHandler}
          readHandler={readHandler}
        ></Card>
        <BookmarkedBlog bookmark={bookmark} time={readTime}></BookmarkedBlog>
      </div>
    </div>
  );
};

export default Blog;
