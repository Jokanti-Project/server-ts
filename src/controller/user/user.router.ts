import express, { Request, Response, Router } from "express";
import { body, validationResult } from "express-validator";
import * as UserService from "./user.service";

const router = express.Router();

router.get("/", async (_, res: Response) => {
    try {
      const user = await UserService.findAll();
      return res.status(200).json(user);
    } catch (err: any) {
      console.log(err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  });

router.post("/login")

  export default router