import React from "react";
import { useParams } from "react-router-dom";
import articles from "./Articles";

const SingleBlog = () => {
  const { id } = useParams();

  const article = articles.find((article) => article.id === parseInt(id));

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div style={{ marginTop: "100px" }}>
      <p> article id: {id} </p>
      <div key={article.id}>
        <h1>{article.title}</h1>
        <h2>Author: {article.author}</h2>
        <p>Date: {article.date}</p>
        <p>{article.content}</p>
        <img src={article.img} alt={article.title} className="" />
      </div>
    </div>
  );
};

export default SingleBlog;
