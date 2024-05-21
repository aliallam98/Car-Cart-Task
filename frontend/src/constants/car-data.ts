// import all images from assets/images directory
import img01 from "/images/cars-img/teslacar.jpg";
import img02 from "/images/cars-img/offer-toyota.png";
import img03 from "/images/cars-img/bmw-offer.png";
import img04 from "/images/cars-img/nissan-offer.png";
import img05 from "/images/cars-img/black new bmw.jpg";
import img06 from "/images/cars-img/mercedes-offer.png";
import img07 from "/images/cars-img/car-isolated-white-background-mercedes-glc-white-car-blank-clean-white-backgro-white-black_655090-605267.avif";
import img08 from "/images/cars-img/brabus.jpg";
import img09 from "/images/cars-img/mustang.jpg";
const carData = [
  {
    id: 1,
    brand: "Tesla",
    rating: 112,
    carName: "Tesla Malibu",
    imgUrl: img01,
    model: "Model 3",
    price: 10000,
    speed: "100kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The Tesla Malibu is an electric sedan that combines sleek design with sustainable performance, offering cutting-edge technology and impressive range. With its futuristic aesthetic and eco-friendly engineering, it's redefining luxury in the electric vehicle market.",
  },

  {
    id: 2,
    brand: "Toyota",
    rating: 70,
    carName: "Toyota Camry",
    imgUrl: img02,
    model: "Model-2022",
    price: 5000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The Toyota Camry is a reliable midsize sedan renowned for its comfort, efficiency, and longevity, offering a blend of practicality and refinement that appeals to a wide range of drivers. With its sleek design and reputation for reliability, it's a perennial favorite in its class.",
  },

  {
    id: 3,
    brand: "BMW",
    rating: 132,
    carName: "BMW X3",
    imgUrl: img03,
    model: "Model-2022",
    price: 9000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The BMW X3 is a luxury compact SUV that combines sporty performance with upscale comfort and cutting-edge technology, delivering a thrilling driving experience wrapped in a stylish and versatile package. With its agile handling and premium amenities, it's designed to elevate every journey, whether on city streets or winding country roads.",
  },

  {
    id: 4,
    brand: "Nissan",
    rating: 102,
    carName: "Nissan Mercielago",
    imgUrl: img04,
    model: "Model-2022",
    price: 7800,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The Nissan Murcielago is a sleek and powerful sports car, blending Japanese engineering precision with Italian-inspired design flair, offering exhilarating performance and head-turning style on the road. With its distinctive looks and dynamic capabilities, it embodies the spirit of automotive passion and innovation.",
  },

  {
    id: 5,
    brand: "Bmw",
    rating: 105,
    carName: "Bmw X6",
    imgUrl: img05,
    model: "Model-2022",
    price: 19800,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The BMW X6 is a dynamic and luxurious crossover SUV that seamlessly merges sporty performance with elegant design, offering a commanding presence on the road and a spacious, upscale interior. With its combination of athleticism and refinement, it sets a new standard for versatility and sophistication in its class.",
  },

  {
    id: 6,
    brand: "Mercedes",
    rating: 119,
    carName: "Mercedes Benz XC90",
    imgUrl: img06,
    model: "Model-2022",
    price: 18000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Mercedes-Benz XC90 is a luxurious and spacious SUV, renowned for its premium craftsmanship, advanced technology features, and smooth ride comfort, offering a refined and sophisticated driving experience for both passengers and drivers alike. With its elegant design and upscale amenities, it epitomizes luxury and innovation in the SUV segment.",
  },

  {
    id: 7,
    brand: "Mercedes",
    rating: 150,
    carName: "Mercedes Benz Glc",
    imgUrl: img07,
    model: "Model 3",
    price: 21500,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Mercedes-Benz GLC is a stylish and versatile luxury SUV, blending elegant design with advanced technology and dynamic performance, providing a smooth and comfortable ride while exuding sophistication and refinement. With its spacious interior, impressive features, and impeccable build quality, it sets a high standard for modern luxury SUVs.",
  },

  {
    id: 8,
    brand: "Mercedes",
    rating: 199,
    carName: "Mercedes Brabus",
    imgUrl: img08,
    model: "Model 2024",
    price: 30000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Mercedes-Brabus is an exclusive line of vehicles tuned by the renowned German tuner Brabus, specializing in enhancing performance, luxury, and style beyond the standard Mercedes-Benz models. These custom creations boast breathtaking power, exquisite craftsmanship, and unique design elements, catering to enthusiasts seeking unparalleled automotive excellence and individuality.",
  },

  {
    id: 9,
    brand: "Ford",
    rating: 152,
    carName: "ford Mustang",
    imgUrl: img09,
    model: "Model 3",
    price: 23000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "The Ford Mustang is an iconic American muscle car, known for its bold styling, powerful performance, and rich heritage, offering exhilarating driving dynamics and timeless appeal. With its legendary status in automotive culture, the Mustang continues to captivate enthusiasts worldwide, embodying the spirit of freedom, strength, and raw power on the open road.",
  },
];

export default carData;
