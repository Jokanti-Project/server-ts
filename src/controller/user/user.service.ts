import { db } from "../../utils/db.server";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  role: string;
};

export const findAll = async (): Promise<User[]> => {
  return db.user.findMany({
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      phoneNumber: true,
      password: true,
      role: true,
    },
  });
};

export const findByEmail = async (email: string): Promise<User | null> => {
  return db.user.findFirst({
    where: { email },
  });
};

export const create = async (user: Omit<User, "id">): Promise<User> => {
  const { firstName, lastName, email, phoneNumber, password, role } = user;
  return db.user.create({
    data: {
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
      role,
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      phoneNumber: true,
      password: true,
      role: true,
    },
  });
};
