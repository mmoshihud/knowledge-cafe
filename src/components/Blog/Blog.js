import { useEffect, useState } from "react";
import BookmarkedBlog from "../BookmarkedBLog/BookmarkedBlog";
import Card from "../Card/Card";

const Blog = () => {
  const [blog, setBlog] = useState([]);
  const [bookmark, setBookmark] = useState([]);

  const onBookmarkHandler = (value) => {
    const addedBookmark = [...bookmark, value];
    setBookmark(addedBookmark);
    console.log(bookmark);
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
        <Card blog={blog} onBookmarkHandler={onBookmarkHandler}></Card>
        <BookmarkedBlog bookmark={bookmark}></BookmarkedBlog>
      </div>
    </div>
  );
};

export default Blog;
