const API_URL =
  "https://raw.githubusercontent.com/cardozov/alura-newsletter/aula3/articles.json";

export const getArticles = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};
