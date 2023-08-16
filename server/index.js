import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import notesRoutes from "./routes/notes.js";
import collectionsRoutes from "./routes/trashCollections.js";
import generalStatsRoutes from "./routes/generalStats.js";

/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

/*ROUTES*/
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/notes", notesRoutes);
app.use("/collect", collectionsRoutes);
app.use("/general", generalStatsRoutes);

/*MONGOOSE SETUP*/
const PORT = process.env.PORT || 6001;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`Server Rodando: ${PORT}`));
}).catch((error) => console.log(`${error} não conectou`));