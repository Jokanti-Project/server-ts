import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import rootRoutes from "./routes"

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10)
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use(rootRoutes)

app.listen(PORT, () => {
    console.log(`Example app listening on PORT ${PORT}`)
  }) 