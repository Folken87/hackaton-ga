import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || "js_fullstack_dev_1";

export const registerUser = async (
  login: string,
  password: string,
  role_id: number
) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  return prisma.user.create({
    data: {
      Login: login,
      Password: hashedPassword,
      Role_id: role_id,
      Is_banned: false,
    },
  });
};

export const loginUser = async (login: string, password: string) => {
  //   const user = await UserService.getUserByLogin(login);

  const user = await prisma.user.findFirst({
    where: {
      Login: login,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const passwordMatch = await bcrypt.compare(password, user.Password);

  if (!passwordMatch) {
    throw new Error("Invalid password");
  }

  const token = jwt.sign({ userId: user.Id, role: user.Role_id }, JWT_SECRET, {
    expiresIn: "1h",
  });

  return {
    token,
    id: user.Id,
    name: user.Login,
    role: user.Role_id,
  };
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};
