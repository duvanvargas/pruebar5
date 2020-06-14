export interface Book{
  etag?: string
  id?: string
  searchInfo?: {
    textSnippet: string
  }
  selfLink?: string
  volumeInfo?: {
    title?: string;
    description?: string;
    ratingsCount?: number;
    averageRating?: number;
    authors?: string[];
    imageLinks?:{
      thumbnail?: string
    }
  }
}