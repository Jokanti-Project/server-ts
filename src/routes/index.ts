import express, {Request, Response} from "express";
import { json } from "stream/consumers";

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
res.status(200).json({message: "Server Up"})
})

import user from "../controller/user/user.router"
router.use('/user', user)

export default router
