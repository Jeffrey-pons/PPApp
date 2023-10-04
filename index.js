import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import MongoDb from "./config/db.js";
import initMiddlewares from "./middlewares/init.middleware.js";
import initRoutes from "./routes/routes.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(cookieParser());
await MongoDb();

//middlewares
initMiddlewares(app);

//routes
initRoutes(app);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
