type Author = {
  name: string;
  image: string;
  designation: string;
};

export type Blog = {
  id: number;
  title: string;

  // optional fields
  content?: string;
  image_url?: string;
  slug?: string;
  created_at?: string;

  // required
  image: string;
  publishDate: string;
  tags: string[];
  author: Author;
  paragraph: string;
};
