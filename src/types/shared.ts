export type IArticle = {
  title: string;
  text: string[];
  tags: string[];
  image?: string;
  alt?: string;
};

export type IUser = {
  name: string;
  email: string;
};
