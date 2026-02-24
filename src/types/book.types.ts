interface IAuthor {
  name: string;
}

export interface IBook {
  slug: string;
  title: string;
  description: string;
  author: IAuthor | null;
  coverImage: string;
  file: string;
  genre: string;
  createdAt?: string;
  updatedAt?: string;
}
