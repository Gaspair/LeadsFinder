export interface Place {
  name: string;
  website: string;
  formatted_phone_number: string;
  rating: string;
  user_ratings_total: string;
  formatted_address: string;
}

export interface PlacesContainerProps {
  places: Place[];
}
