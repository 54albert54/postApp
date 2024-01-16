export interface TProducts {
  id:          number;
  title:       string;
  price:       number;
  description: string;
  images:      string[];
  creationAt:  Date;
  updatedAt:   Date;
  category:    TCategory;
}

export interface TCategory {
  id:         number;
  name:       string;
  image:      string;
  creationAt: Date;
  updatedAt:  Date;
}