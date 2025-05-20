import type { IArticle } from "../../types/shared";

const Article = ({ title, text, image, alt, tags }: IArticle) => {
  return (
    <div className="p-5 bg-gray-200 dark:bg-dark-200 sm:rounded-xl sm:shadow-md flex gap-2 flex-col items-center sm:hover:shadow-gray-500 sm:hover:dark:shadow-black sm:hover:shadow-lg">
      <h3 className="text-xl text-alura-200 dark:text-gray-200 font-bold">
        {title}
      </h3>
      <div className="w-full hidden sm:flex justify-end flex-row gap-2 pr-5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-alura-100 dark:bg-dark-100 px-4 py-1 rounded-full text-gray-200 text-xs font-bold uppercase hover:scale-110 hover:bg-gradient-to-r hover:from-alura-200"
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
