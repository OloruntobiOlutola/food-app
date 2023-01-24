import dotenv from "dotenv";
dotenv.config();

const envFile = {
  DB_URL: process.env.DB_URL ? process.env.DB_URL : "",
  URL: "http://localhost:3000/api",
};

export default envFile;
