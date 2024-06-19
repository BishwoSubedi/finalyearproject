import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";
export const register = async (req, res) => {
  const { username, email, password } = req.body;
  if (!email || !username || !password) {
    return res.status(400).json({
      message: "all the fields are required",
    });
  }
  const hashedPassword = bcrypt.hashSync(password, 8);
  const user = await prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  });
    res.status(201).json({ message: "User created successfully", user });
};

export const login = (req, res) => {
  console.log("Db Operation");
};

export const logout = (req, res) => {
  console.log("Db Operation");
};
