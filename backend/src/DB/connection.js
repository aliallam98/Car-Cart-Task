import mongoose from "mongoose";

const connectToDatabase = async () => {
  return await mongoose
    .connect(`${process.env.DB_URL}`)
    .then(() => console.log("DB Is Connected"))
    .catch((error) =>
      console.log("Something Went Wrong With DB Connection", error)
    );
};

export default connectToDatabase;
