import express from "express";
import dotenv from "dotenv";
import path from "path";
import { page } from "./routes";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use("/", page.home);

app.listen(port, () => {
    console.log(`[server]: Server is running 1at http://localhost:${port}`);
});
