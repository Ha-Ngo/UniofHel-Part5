import React, { useState } from "react";

export const AddBlog = ({ createBlog }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const addBlog = (event) => {
    event.preventDefault();
    const blogObject = {
      title: title,
      author: author,
      url: url,
    };
    createBlog(blogObject);
    setTitle("");
    setAuthor("");
    setUrl("");
  };
  return (
    <div>
      <h2> create a new note</h2>
      <form onSubmit={addBlog}>
        <div>
          title{" "}
          <input type="text" value={title} onChange={handleTitleChange}></input>
        </div>
        <div>
          author{" "}
          <input
            type="text"
            value={author}
            onChange={handleAuthorChange}
          ></input>
        </div>
        <div>
          url <input type="text" value={url} onChange={handleUrlChange}></input>
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};
