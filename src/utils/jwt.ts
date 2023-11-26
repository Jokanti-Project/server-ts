import jwt from "jsonwebtoken";

const JWT_SECRET: any = process.env.JWT_SECRET

type Payload = {
    id: number
    firstName: string
    lastName: string
    email: string
    role: string
}

export const signToken = (user: Payload): string => {
    const {id, firstName, lastName, email, role} = user 
  return jwt.sign({ id, firstName, lastName, email, role}, JWT_SECRET);
}