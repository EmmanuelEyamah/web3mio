export type Types = {
  id?: string;
  name: string;
  short_desc: string;
  description: string[];
  imageUrl?: string | null;
  imagesUrl?: string[];
  link_text?: string;
  link_url?: string;
  createdAt?: Date;
};

export type User = {
  id?: string;
  username: string;
  email: string;
  password: string;
  createdAt?: Date;
};
