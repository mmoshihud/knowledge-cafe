import { useEffect, useState } from "react";
import BookmarkedBlog from "../BookmarkedBLog/BookmarkedBlog";
import Card from "../Card/Card";

const Blog = () => {
  const [blog, setBlog] = useState([]);

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
        <Card blog={blog}></Card>
        <BookmarkedBlog></BookmarkedBlog>
      </div>
    </div>
  );
};

export default Blog;
<>
  <h1>ok</h1>
</>;
