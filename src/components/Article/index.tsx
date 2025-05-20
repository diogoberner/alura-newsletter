import type { IArticle } from "../../types/shared";

const Article = ({ title, text, image, alt, tags }: IArticle) => {
  return (
    <div className="p-5 bg-gray-200 dark:bg-dark-200 sm:rounded-xl sm:shadow-lg flex flex-col gap-2 items-center">
      <h3 className="text-xl text-alura-200 dark:text-gray-200 font-bold">
        {title}
      </h3>
      <div className="w-full hidden sm:flex justify-end flex-row gap-2 pr-5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-alura-100 dark:bg-dark-100 text-gray-200 text-bold text-xs uppercase px-4 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="grid gap-1">
        {text.map((paragraph, index) => (
          <p key={index} className="text-alura-200 dark:text-gray-400">
            {paragraph}
          </p>
        ))}
      </div>
      {image && <img className="sm:p-4" src={image} />}
      {image && alt && <span className="sr-only">{alt}</span>}
    </div>
  );
};

export default Article;
