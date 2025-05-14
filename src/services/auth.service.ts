import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || "js_fullstack_dev_1";

export const registerUser = async (
  login: string,
  password: string,
) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  return prisma.user.create({
    data: {
      Login: login,
      Password: hashedPassword,
    },
  });
};

export const loginUser = async (login: string, password: string) => {
//   const user = await UserService.getUserByLogin(login);

  if (!user) {
    throw new Error("User not found");
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    throw new Error("Invalid password");
  }

  const token = jwt.sign({ userId: user.id_person, role: user.user_role.id }, JWT_SECRET, {
    expiresIn: "1h",
  });

  return {
    token,
    id: user.id_person,
    name: user.person.fullname,
    role: user.user_role.id
  };
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};
