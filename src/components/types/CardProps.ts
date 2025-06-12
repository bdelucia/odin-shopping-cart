export type CardProps = {
  title?: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
  price?: string;
  rating?: {
    rate?: number; // 0-5
    count?: number; // number of ratings
  };
};
