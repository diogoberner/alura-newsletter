import { createContext, useEffect, useState } from "react";
import { getArticles } from "../api";
import type { IArticle } from "../types/shared";

type ArticlesContextType = {
  articles: IArticle[];
  setArticles: React.Dispatch<React.SetStateAction<IArticle[]>>;
};

const defaultValue: ArticlesContextType = {
  articles: [],
  setArticles: () => [],
};

export const ArticlesContext = createContext<ArticlesContextType>(defaultValue);

type ArticlesProviderProps = {
  children: React.ReactNode;
};

export const ArticlesProvider = ({ children }: ArticlesProviderProps) => {
  const [articles, setArticles] = useState<IArticle[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await getArticles();
        setArticles(response);
      } catch (error) {
        console.error("Erro ao buscar artigos:", error);
      }
    };
    fetchArticles();
  }, []);

  return (
    <ArticlesContext.Provider value={{ articles, setArticles }}>
      {children}
    </ArticlesContext.Provider>
  );
};
