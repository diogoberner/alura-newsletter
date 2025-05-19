import { useContext } from "react";
import { ArticlesContext } from "../../context/ArticlesContext";

const ArticleList = () => {
  const { articles } = useContext(ArticlesContext);

  return (
    <div className="">
      {articles.map((article, index) => {
        console.log(article);
        return <p key={index}>{article.title}</p>;
      })}
    </div>
  );
};

export default ArticleList;
