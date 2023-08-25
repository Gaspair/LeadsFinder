export interface Place {
  name: string;
  website: string;
  formatted_phone_number: string;
  type: string;
  reviews: string;
}

export interface PlacesContainerProps {
  places: Place[];
}
