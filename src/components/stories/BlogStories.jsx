import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardBlogStories from './cardsStories/CardBlogStories';

const BlogStories = ({ selectNav }) => {
  const [blogsStories, setblogsStories] = useState();

  useEffect(() => {
    const url = `${import.meta.env.VITE_URL_API}/blogs`;
    axios
      .get(url)
      .then((res) => setblogsStories(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="photographsStories__container">
      {blogsStories?.blogs.map((blog, index) => (
        <CardBlogStories
          key={blog.id}
          blog={blog}
          index={index}
          selectNav={selectNav}
        />
      ))}
    </div>
  );
};

export default BlogStories;
