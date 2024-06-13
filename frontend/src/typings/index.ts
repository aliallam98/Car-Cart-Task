export interface IImage {
  secure_url: string;
  public_id: string;
}

export interface ICart {
  cart: {
    cart:{
      carId: {
        carName: string; // Name of the car model
        brand: string; // Car brand
        model?: string; // Car model (redundant with carName)
        imgUrl: string; // URL of the car image
        price: string; // Price of the car (consider using a number type if possible)
        rating: string; // Car rating (consider using a number type if possible)
        description: string; // Description of the car
  
        // Optional car features (can be expanded as needed)
        automatic?: string; // Whether the car is automatic
        gps?: string; // Whether the car has GPS navigation
        seatType?: string; // Type of seats (e.g., Heated seats)
        speed?: string; // Car speed (consider using a number
      };
    }
  };
}

export interface ICar {
  carId: {
    carName: string; // Name of the car model
    brand: string; // Car brand
    model?: string; // Car model (redundant with carName)
    imgUrl: string; // URL of the car image
    price: string; // Price of the car (consider using a number type if possible)
    rating: string; // Car rating (consider using a number type if possible)
    description: string; // Description of the car
    // Optional car features (can be expanded as needed)
    automatic?: string; // Whether the car is automatic
    gps?: string; // Whether the car has GPS navigation
    seatType?: string; // Type of seats (e.g., Heated seats)
    speed?: string; // Car speed (consider using a number
  };
}
export interface ICarInterface{
  _id:string
  carName: string; // Name of the car model
  brand: string; // Car brand
  model?: string; // Car model (redundant with carName)
  imgUrl: string; // URL of the car image
  price: string; // Price of the car (consider using a number type if possible)
  rating: string; // Car rating (consider using a number type if possible)
  description: string; // Description of the car
  // Optional car features (can be expanded as needed)
  automatic?: string; // Whether the car is automatic
  gps?: string; // Whether the car has GPS navigation
  seatType?: string; // Type of seats (e.g., Heated seats)
  speed?: string; // Car speed (consider using a number
}
export interface ICartItem {
  carId: string;
  _id: string;
  name: string;
  coverImage: IImage;
  paymentPrice: string;
  quantity: number;
}
