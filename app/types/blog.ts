export interface Blog {
  id: number;
  title: string;
  description: string;
  author: string;
  status: "public" | "unpublic";
  createdDate: string;
  updatedDate: string;
}

export interface CardProps {
  blog: Blog;
}