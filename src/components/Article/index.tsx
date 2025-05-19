import type { IArticle } from "../../types/shared";

const Article = ({ title, text }: IArticle) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>
        {text.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default Article;
