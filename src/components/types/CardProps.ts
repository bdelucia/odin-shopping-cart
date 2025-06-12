export type CardProps = {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  price: string | number;
  rating: {
    rate: number; // 0-5
    count: number; // number of ratings
  };
};
