import { useContext } from "react";
import { ArticlesContext } from "../../context/ArticlesContext";
import Article from "../Article";

const ArticleList = () => {
  const { articles } = useContext(ArticlesContext);

  return (
    <div className="mt-5 sm:mt-0 grid gap-5 m-auto max-w-2xl sm:grid-cols-2 lg:grid-cols-3 lg:max-w-[1000px]">
      {articles.map((article, index) => {
        return <Article key={index} {...article} />;
      })}
    </div>
  );
};

export default ArticleList;
