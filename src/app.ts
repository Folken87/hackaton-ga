import express from "express";
import routes from "./routes/index";
import { setupSwagger } from "./swagger";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());

app.use(express.json());

// Set up API routes
app.use("/api", routes);

// Set up Swagger documentation
setupSwagger(app);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
  console.log("API Documentation available at http://localhost:3000/api-docs");
});
