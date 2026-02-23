interface IAuthor {
  name: string;
}

export interface IBook {
  _id: string;
  title: string;
  author: IAuthor;
  coverImage: string;
  file: string;
  genre: string;
  createdAt: string;
  updatedAt: string;
}
