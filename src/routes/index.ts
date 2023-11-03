import express, {Request, Response} from "express";
import { json } from "stream/consumers";

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
res.status(200).json({message: "Server Up"})
})

export default router
